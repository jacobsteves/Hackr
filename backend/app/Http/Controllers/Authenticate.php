<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
      $users = \DB::table('users')->get()->where('id', 1)->first();
      $myObj = (object)[];
      $myObj->name = $users->name;
      $myObj->email = $users->email;

      $sessionData = (object)[];
      $sessionData->userData = $myObj;
      $sessionData->authToken = "$users->auth_token";
      $sessionData->data = "$data";

      $myJSON = json_encode($sessionData);

      return "$myJSON";
    }

    public function signup($data)
    {
      $email = $data->email;
      $name = $data->name;
      $password = Hash::make($password);
      $authToken = Hash::make($email);

      $myObj = (object)[];
      $myObj->name = $users->name;
      $myObj->email = $users->email;

      $sessionData = (object)[];
      $sessionData->userData = $myObj;
      $sessionData->authToken = "$auth_token";
      $sessionData->data = "$data";

      $myJSON = json_encode($sessionData);

      return "$myJSON";
    }
}
