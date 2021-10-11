<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthUserController extends Controller
{

    public function login(Request $request)
    {
        $user_id = User::where('email', $request->email)->first();

        $this->validateLogin($request);
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);
        }

        return response()->json([
            'id' =>  $user_id->id,
            'user' =>  $user_id->email,
            'token' => $request->user()->createToken($request->device)->plainTextToken,
            'message' => 'Success'
        ], 200);
    }

    public function validateLogin(Request $request)
    {
       
        return $request->validate([
            'email' => 'required|email',
            'password' => 'required',
            'device' => 'required',
        ]);
    }

    public function register(Request $request)
    {
        $this->validateRegister($request);
        if ($request->input('password') != $request->input('confirmPassword')) {
            return response()->json([
                'message' => 'Passwords are not the same',
                'status' => 401,
            ], 401);
        } else {
            User::create([
                'name' => $request->name,
                'lastname' => $request->lastname,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);
            return response()->json([
                'message' => 'User register',
                'status' => 200,
            ], 200);
        }
    }

    public function validateRegister(Request $request)
    {
        return $request->validate([

            'name' => ['required', 'string', 'max:30'],
            'lastname' => ['required', 'string', 'max:30'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'max:30'],
        ]);
    }
}
