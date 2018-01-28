<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Hash;
use App\User;
use Illuminate\Support\Facades\Log;

class Authenticate extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function login($data)
    {
      $users = \DB::table('users')->get()->where('email', $data->header('email'))->first();
      $myObj = (object)[];
      $myObj->name = $users->name;
      $myObj->email = $users->email;
      $myObj->id = "$users->id";

      $sessionData = (object)[];
      $sessionData->userData = $myObj;

      $sessionData->auth_token = "$users->auth_token";
      $sessionData->data = "$data";
      $sessionData->id = "$users->id";
      $sessionData->success = true;

      $myJSON = json_encode($sessionData);

      return "$myJSON";
    }

    public function signup(Request $data)
    {
      $email = $data->header('email');
      $name = $data->header('name');
      $password = Hash::make($data->header('password'));
      $auth_token = Hash::make("$email");

      $myObj = (object)[];
      $myObj->name = "$name";
      $myObj->email = "$email";

      // Create the new user instance
      $user = new User;
      $user->name = "$name";
      $user->email = "$email";
      $user->password = "$password";
      $user->auth_token = "$auth_token";
      $user->contact = "";
      $user->skills = "";
      $user->projects = "";
      $user->save();

      $myObj->id = "$user->id";

      $sessionData = (object)[];
      $sessionData->userData = $myObj;
      $sessionData->auth_token = "$auth_token";
      $sessionData->data = "$data";

      $sessionData->success = true;
      $myJSON = json_encode($sessionData);
      Log::info("this token in signup: $auth_token");
      return "$myJSON";
    }
}
