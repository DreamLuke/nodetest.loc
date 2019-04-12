<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/test', function () {
    return view('test');
});

// Роуты сделанные для выполнения примеров
Route::get('/start', 'StartController@index')->name('start');
Route::get('/start/get-json', 'StartController@getJson')->name('start.get-json');

// Роуты сделанные для выполнения задания
Route::get('/table', 'StartController@index')->name('start');
