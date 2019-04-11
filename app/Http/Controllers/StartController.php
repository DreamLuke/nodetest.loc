<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StartController extends Controller
{
    public function index()
    {
        $url_data = [
            array(
                'title' => 'DKA-DEVELOP',
                'url' => 'https://dka-develop.ru'
            ),
            array(
                'title' => 'YouTube',
                'url' => 'https://youtube.com'
            ),
        ];

        // dd(json_encode($url_data));

        return view('start', [
            'url_data' => $url_data
        ]);
    }

    public function getJson()
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
    }
}
