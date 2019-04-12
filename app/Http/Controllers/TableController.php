<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TableController extends Controller
{
    public function index()
    {
        return view('table');
    }

    /*public function subtractFromBalance()
    {
        return [
            array(
                'title' => 'Google',
                'url' => 'https://google.com'
            ),
            array(
                'title' => 'Yandex',
                'url' => 'http://ya.ru'
            ),
        ];
    }*/
}
