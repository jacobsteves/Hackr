<?php

use Illuminate\Http\Request;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/getHackathons', 'GetData@getHackathons');
Route::get('/getSwipees', function (Request $request) {
    return App::make('App\Http\Controllers\GetData')->getSwipees($request);
});

Route::get('/login', function (Request $request) {
    return App::make('App\Http\Controllers\Authenticate')->login($request);
});

Route::get('/signup', function (Request $request) {
    return App::make('App\Http\Controllers\Authenticate')->signup($request);
});

Route::get('/getCards', function (Request $request) {
    return App::make('App\Http\Controllers\GetData')->getCards($request);
});

Route::get('/addSwipe', function (Request $request) {
    return App::make('App\Http\Controllers\GetData')->addSwipe($request);
});

Route::get('/updateProfile', function (Request $request) {
    return App::make('App\Http\Controllers\GetData')->updateProfile($request);
});
