<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        $user = User::where('email', $credentials['email'])->first();

        if (!$user || !Hash::check($credentials['password'], $user->password)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $token = $user->createToken('auth_token')->plainTextToken;
        return response()->json([
            'message' => 'Login successful',
            'user' => $user,
            'token' => $token
        ]);
    }

    public function register(Request $request)
    {
        \Log::info('All request data:', $request->all());
        \Log::info('All files:', $request->allFiles());
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
            'profileImage' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg,avif,webp,bmp|max:2048',
        ]);

        $profileImageUrl = null;
        if ($request->hasFile('profileImage')) {
            $image = $request->file('profileImage');
            $imageName = time().'_'.$image->getClientOriginalName();
            $image->move(public_path('uploads/profile_images'), $imageName);
            $profileImageUrl = url('uploads/profile_images/' . $imageName);
            \Log::info('Image moved to: ' . public_path('uploads/profile_images/' . $imageName));
        }

        \Log::info('Profile image URL to save:', [$profileImageUrl]);

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => bcrypt($validated['password']),
            'profileImageUrl' => $profileImageUrl,
            'role' => 'user',
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'Registration successful',
            'user' => $user,
            'token' => $token
        ], 201);
    }

    public function uploadImage(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg,avif,webp,bmp|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time().'_'.$image->getClientOriginalName();
            $image->move(public_path('uploads/profile_images'), $imageName);
            $imageUrl = url('uploads/profile_images/' . $imageName);
            return response()->json(['imageUrl' => $imageUrl], 201);
        }

        return response()->json(['message' => 'No image uploaded'], 400);
    }
} 