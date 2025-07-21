<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ActivityLogController;

Route::post('/auth/login', [AuthController::class, 'login']);
Route::post('/auth/upload-image', [AuthController::class, 'uploadImage']);
Route::post('/auth/register', [AuthController::class, 'register']);
Route::middleware('auth:sanctum')->get('/tasks/my', [TaskController::class, 'myTasks']);
Route::middleware('auth:sanctum')->post('/tasks', [TaskController::class, 'store']);
Route::middleware('auth:sanctum')->put('/tasks/{id}', [TaskController::class, 'update']);
Route::middleware('auth:sanctum')->get('/tasks/user-dashboard-data', [TaskController::class, 'userDashboardData']); 
Route::get('/tasks', [TaskController::class, 'index']); 
Route::get('/users', [UserController::class, 'index']); 
Route::post('/users', [UserController::class, 'store']);
Route::put('/users/{id}', [UserController::class, 'update']); 
Route::delete('/users/{id}', [UserController::class, 'destroy']); 
Route::middleware('auth:sanctum')->get('/auth/profile', [App\Http\Controllers\AuthController::class, 'profile']); 
Route::middleware('auth:sanctum')->put('/auth/profile', [AuthController::class, 'updateProfile']); 
Route::get('/activity-log', [ActivityLogController::class, 'index']); 
Route::delete('/tasks/{id}', [TaskController::class, 'destroy']); 