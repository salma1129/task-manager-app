<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TaskController;

Route::post('/auth/login', [AuthController::class, 'login']);
Route::post('/auth/upload-image', [AuthController::class, 'uploadImage']);
Route::post('/auth/register', [AuthController::class, 'register']);
Route::middleware('auth:sanctum')->get('/tasks/my', [TaskController::class, 'myTasks']);
Route::middleware('auth:sanctum')->post('/tasks', [TaskController::class, 'store']);
Route::middleware('auth:sanctum')->put('/tasks/{id}', [TaskController::class, 'update']);
Route::middleware('auth:sanctum')->get('/tasks/user-dashboard-data', [TaskController::class, 'userDashboardData']); 
Route::get('/tasks', [TaskController::class, 'index']); 