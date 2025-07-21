<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::withCount(['tasks as completedTasks' => function ($query) {
            $query->where('status', 'Completed');
        }])->get();
        return response()->json($users);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:6',
            'role' => 'required|string',
        ]);
        $validated['password'] = bcrypt($validated['password']);
        $user = User::create($validated);

        // Log activity
        \App\Models\ActivityLog::create([
            'action' => "User created: {$user->email}"
        ]);

        return response()->json($user, 201);
    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,' . $user->id,
            'role' => 'required|string',
        ]);
        if ($request->filled('password')) {
            $validated['password'] = bcrypt($request->password);
        }
        $user->update($validated);

        // Log activity
        \App\Models\ActivityLog::create([
            'action' => "User updated: {$user->email}"
        ]);

        return response()->json($user);
    }

    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $email = $user->email;
        $user->delete();

        // Log activity
        \App\Models\ActivityLog::create([
            'action' => "User deleted: $email"
        ]);

        return response()->json(['message' => 'User deleted successfully.']);
    }
} 