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

    /**
     * Returns the formatted user object
     *
     * @param  int  $id
     * @return json
     */
    public function getCards($id)
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
     * Returns the users associated with hackathon. returns cards that match the
     * hackathon being browsed which the user has not swiped on
     *
     * @param  \Illuminate\Http\Request $request
     * @return json
     */
    public function getSwipees($request)
    {
        // get data from header
        $user_id = $request->header('user_id');
        $hackathon_id = $request->header('hackathon_id');

        $cards = \DB::select("SELECT * FROM cards INNER JOIN swipes ON swipes.swiper_id != $user_id WHERE cards.user_id != $user_id AND cards.hackathon_id = $hackathon_id");
        $myJSON = json_encode($cards);

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
