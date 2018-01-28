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

Route::get('/getCards/{id}', 'GetData@getCards');
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
    return App::make('App\Http\Controllers\GetData')->getCards('$2y$10$YjqCvf9IIdty9a6m1rFSS.LQR9RYInzw9lUEOK6j6OtdB1bm0cgBG', 1);
});

Route::get('/addSwipe', function (Request $request) {
    return App::make('App\Http\Controllers\GetData')->addSwipe($request);
});

Route::get('/saveProfile', function (Request $request) {
    return App::make('App\Http\Controllers\GetData')->saveProfile($request);
});
