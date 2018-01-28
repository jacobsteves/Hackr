<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Log;
use App\User;
use App\Swipe;

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

    private function invalidauth_token($auth_token)
    {
        // return !(\DB::table('users')->get()->where('auth_token', $auth_token)->exists());
        return !(User::where('auth_token', '=', "$auth_token")->exists());
    }

    public function addSwipe($request)
    {
      if ($this->invalidauth_token($request->header('auth_token'))) return;
      $newSwipe = new Swipe;
      $newSwipe->swiper_id = $request->header('swiper_id');
      $newSwipe->swipee_id = $request->header('swipee_id');
      $newSwipe->hackathon_id = 1;
      $newSwipe->said_yes = $request->header('said_yes');
      $newSwipe->save();

      $match = \DB::select("SELECT id FROM swipes WHERE swipes.swiper_id=$request->header('swipee_id') AND swipes.swipee_id=$request->header('swiper_id')");
      $rtnObj = (object)[];
      $rtnObj->matched = false;

      if (count($match)) {
        $newMatch = new Match;
        $newMatch->user_one_id = $request->header('swiper_id');
        $newMatch->user_two_id = $request->header('swipee_id');
        $newMatch->save();

        $newMatch2 = new Match;
        $newMatch2->user_one_id = $request->header('swipee_id');
        $newMatch2->user_two_id = $request->header('swiper_id');
        $newMatch2->save();

        $rtnObj->matched = true;
      }

      $myJSON = json_encode($rtnObj);
      return "$myJSON";
    }

    public function getUserIdFromToken($auth_token)
    {
      if ($this->invalidauth_token($auth_token)) return;

      $id = \DB::table('users')->get()->where('auth_token', $auth_token)->first()->id;
      return $id;
    }


    public function updateProfile($request)
    {
      if ($this->invalidauth_token($request->header('auth_token'))) return;
      $id = $this->getUserIdFromToken($request->header('auth_token'));
      $updatedUser = User::find($id);
      $updatedUser->contact = $request->header('contact');
      $updatedUser->skills = $request->header('skills');
      $updatedUser->projects = $request->header('projects');
      $updatedUser->save();

      $usrObj = (object)[];
      $usrObj->user = $updatedUser;
      $usrObj->success = true;
      $myJSON = json_encode($usrObj);
      return "$myJSON";
    }

    public function getCards($results) {
      $auth_token = $results->header('auth_token');
      if ($this->invalidauth_token($auth_token)) return;
      $id = $this->getUserIdFromToken($auth_token);
      $filteredCards = \DB::select("SELECT * FROM users WHERE users.id<>$id AND users.id NOT IN (SELECT swipee_id FROM swipes WHERE swipes.swiper_id=$id) LIMIT 30");
      $usrObj = (object)[];
      $usrObj->cards = $filteredCards;
      $myJSON = json_encode($usrObj);

      return "$myJSON";
    }

    /**
     * Returns the formatted user object
     *
     * @param  int  $id
     * @return json
     */
    public function getUser($id)
    {
      if ($this->invalidauth_token($auth_token)) return;

      $users = \DB::table('users')->get()->where('id', 1)->first();
      $usrObj = (object)[];
      $usrObj->name = $users->name;
      $usrObj->email = $users->email;

      $myJSON = json_encode($usrObj);

      return "$myJSON";
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

      return "$myJSON";
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

        return "$myJSON";
    }

     /** Returns the matches for a given user
     *
     * @return json
     */
     public function getMatches($response)
     {
       $auth_token = $response->header('auth_token');
       $id = $response->header('user_id');
       if ($this->invalidauth_token($auth_token)) return;
       $matches = \DB::select("SELECT users.name, matches.user_two_id, users.email FROM matches JOIN users ON matches.user_two_id=users.id WHERE user_one_id = $id" );
       $myJSON = json_encode($matches);
       return "$myJSON";
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
