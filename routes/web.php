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
// Route::get('/table', 'TableController@index')->name('table');
// Route::get('/table/get-json', 'TableController@getJson')->name('table.get-json');

/*Route::get('/table', 'OrderController@index');
Route::post('/table', 'OrderController@store');*/
// Route::get('/table', 'OrderController@table')->name('table');

Route::resource('table', 'OrderController');
Route::put('table/{id}', 'OrderController@update');



