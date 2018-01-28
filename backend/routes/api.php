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

Route::get('/getCards/{id}', 'GetCards@show');

Route::get('/login', function (Request $request) {
    return App::make('App\Http\Controllers\Authenticate')->login($request);
});

Route::get('/signup', function (Request $request) {
    return App::make('App\Http\Controllers\Authenticate')->signup($request);
});
