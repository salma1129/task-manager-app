<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;

class TaskController extends Controller
{
    // Fetch tasks for the authenticated user
    public function myTasks(Request $request)
    {
        $user = $request->user();
        $tasks = $user->tasks()->latest()->get();
        return response()->json($tasks);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'priority' => 'nullable|string',
            'category' => 'nullable|string',
            'dueDate' => 'nullable|date',
            'status' => 'nullable|string',
        ]);

        $user = $request->user();

        $task = $user->tasks()->create([
            'title' => $validated['title'],
            'description' => $validated['description'] ?? '',
            'priority' => $validated['priority'] ?? 'Low',
            'category' => $validated['category'] ?? 'Personal',
            'dueDate' => $validated['dueDate'] ?? null,
            'status' => $validated['status'] ?? 'Pending',
        ]);

        return response()->json($task, 201);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'priority' => 'nullable|string',
            'category' => 'nullable|string',
            'dueDate' => 'nullable|date',
            'status' => 'nullable|string',
        ]);

        $task = Task::findOrFail($id);

        $task->update($validated);

        return response()->json($task);
    }

    public function userDashboardData(Request $request)
    {
        $user = $request->user();
        $tasks = $user->tasks()->latest()->get();

        // Task distribution by status
        $taskDistribution = [
            'All' => $tasks->count(),
            'Pending' => $tasks->where('status', 'Pending')->count(),
            'InProgress' => $tasks->where('status', 'In Progress')->count(),
            'Completed' => $tasks->where('status', 'Completed')->count(),
        ];

        // Task priority levels
        $taskPriorityLevels = [
            'Low' => $tasks->where('priority', 'Low')->count(),
            'Medium' => $tasks->where('priority', 'Medium')->count(),
            'High' => $tasks->where('priority', 'High')->count(),
        ];

        // Recent tasks (last 5)
        $recentTasks = $tasks->take(5)->map(function($task) {
            return [
                '_id' => $task->id,
                'title' => $task->title,
                'status' => $task->status,
                'priority' => $task->priority,
                'createdAt' => $task->created_at,
            ];
        });

        return response()->json([
            'charts' => [
                'taskDistribution' => $taskDistribution,
                'taskPriorityLevels' => $taskPriorityLevels,
            ],
            'recentTasks' => $recentTasks,
        ]);
    }

    public function index(Request $request)
    {
        $status = $request->query('status');
        $query = \App\Models\Task::query();

        if ($status) {
            $query->where('status', $status);
        }

        $tasks = $query->with('user')->get();

        // Optionally, you can add a status summary for tabs
        $statusSummary = [
            'all' => \App\Models\Task::count(),
            'pendingTasks' => \App\Models\Task::where('status', 'Pending')->count(),
            'inProgress' => \App\Models\Task::where('status', 'In Progress')->count(),
            'completedTasks' => \App\Models\Task::where('status', 'Completed')->count(),
        ];

        return response()->json([
            'tasks' => $tasks,
            'statusSummary' => $statusSummary,
        ]);
    }
}
