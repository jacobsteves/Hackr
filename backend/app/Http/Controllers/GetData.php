<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GetData extends Controller
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

    public function getUserIdFromToken($authToken)
    {
        $id = \DB::table('users')->get()->where('auth_token', $authToken)->first();
        return $id;
    }

    public function getCards($authToken, $hackathonId) {
      $id = getUserIdFromToken(authToken);
      $filteredUsrs = \DB::select("SELECT * FROM users LEFT JOIN swipes ON user.id=swipes.swiper_id WHERE swipes.swipee_id IS NULL  LIMIT 30")
      // TODO: Return error if the above query returns nothing (as in, there's no one left!)
      $usrObj = (object)[];
      $usrObj->users = $filteredUsrs->toArray();

      $myJSON = json_encode($usrObj);

      return $myJSON
    }

    /**
     * Returns the formatted user object
     *
     * @param  int  $id
     * @return json
     */
    public function getUser($id)
    {
        $users = \DB::table('users')->get()->where('id', 1)->first();
        $usrObj = (object)[];
        $usrObj->name = $users->name;
        $usrObj->email = $users->email;

        $myJSON = json_encode($usrObj);

        return $myJSON;
    }

    /**
     * Returns the formatted hackathons
     *
     * @return json
     */
    public function getHackathons()
    {
        $hackathons = \DB::table('hackathons')->get();
        $hackObj = (object)[];
        $hackObj->hackathons = $hackathons->toArray();

        $myJSON = json_encode($hackObj);

        return $myJSON;
    }

    /**
     * Returns the matches for a given user
     *
     * @return json
     */
     public function getMatches($id)
     {
       $matches = \DB::select("SELECT * FROM matches WHERE user_one_id = $id OR user_two_id = $id" );
       $matchesObj = (object)[];
       $matchesObj->matches = $matches->toArray();

       $myJSON = json_encode($matchesObj);

       return $myJSON;
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
}
