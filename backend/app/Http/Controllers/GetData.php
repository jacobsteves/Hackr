<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Log;

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

    private function invalidAuthToken($authToken)
    {
        return !(\DB::table('users')->get()->where('auth_token', $authToken)->first());
    }

    public function addSwipe($request)
    {
      if ($this->invalidAuthToken($request->header('auth_token'))) return;

      // swiper_id, swipee_id, hackathon_id, said_yes
      $newSwipe = new Swipe;
      $newSwipe->swiper_id = $request->header('swiper_id');
      $newSwipe->swipee_id = $request->header('swipee_id');
      $newSwipe->hackathon_id = $request->header('hackathon_id');
      $newSwipe->said_yes = $request->header('said_yes');
      $newSwipe->save();

      $match = \DB::select("SELECT id FROM swipes WHERE swipes.swiper_id=$swipee_id AND swipes.swipee_id=$swiper_id");

      $rtnObj = (object)[];
      $rtnObj->matched = false;

      if ($match->count()) {
        $newMatch = new Match;
        $newMatch->user_one_id = $request->header('swiper_id');
        $newMatch->user_two_id = $request->header('swipee_id');
        $newMatch->hackathon_id = $request->header('hackathon_id');
        $newMatch->save();
        $rtnObj->matched = true;
      }

      $myJSON = json_encode($rtnObj);

      return $myJSON;
    }

    public function getUserIdFromToken($authToken)
    {
      if ($this->invalidAuthToken($authToken)) return;

      $id = \DB::table('users')->get()->where('auth_token', $authToken)->first()->id;
      return $id;
    }


    public function saveProfile($request)
    {
      if ($this->invalidAuthToken($request->header('auth_token'))) return;

      // swiper_id, swipee_id, hackathon_id, said_yes
      $id = getUserIdFromToken($request->header('auth_token'));
      $updatedUser = User::find($id);
      $updatedUser->content = $request->header('content');
      $updatedUser->skills = $request->header('skills');
      $updatedUser->projects = $request->header('projects');

      $usrObj = (object)[];
      $usrObj->user = $updatedUser;

      $myJSON = json_encode($usrObj);

      return $myJSON;
    }

    public function getCards($authToken, $hackathonId) {
      if ($this->invalidAuthToken($authToken)) return;

      $id = $this->getUserIdFromToken($authToken);
      Log::info("$id");
      $filteredUsrs = \DB::select("SELECT * FROM users WHERE users.id<>$id AND users.id NOT IN (SELECT swipee_id FROM swipes WHERE swipes.swiper_id=$id) LIMIT 30");
      //$filteredUsrs = \DB::select("SELECT * FROM users LEFT JOIN swipes ON users.id=swipes.swipee_id WHERE users.id=$id");
      // TODO: Return error if the above query returns nothing (as in, there's no one left!)
      $usrObj = (object)[];
      $usrObj->users = $filteredUsrs;

      $myJSON = json_encode($usrObj);

      return $myJSON;
    }

    /**
     * Returns the formatted user object
     *
     * @param  int  $id
     * @return json
     */
    public function getUser($id)
    {
      if ($this->invalidAuthToken($authToken)) return;

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

        $cards = \DB::select("SELECT * FROM cards INNER JOIN swipes ON swipes.swiper_id <> $user_id WHERE cards.user_id <> $user_id AND cards.hackathon_id = $hackathon_id");
        $myJSON = json_encode($cards);

        return $myJSON;
    }

     * Returns the matches for a given user
     *
     * @return json
     */
     public function getMatches($id)
     {
       if ($this->invalidAuthToken($authToken)) return;

       $matches = \DB::select("SELECT * FROM matches WHERE user_one_id = $id OR user_two_id = $id" );
       $matchesObj = (object)[];
       $matchesObj->matches = $matches;

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
