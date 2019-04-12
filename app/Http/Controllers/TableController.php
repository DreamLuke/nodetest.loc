<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TableController extends Controller
{
    public function index()
    {
        return view('table');
    }

    public function getJson()
    {
        return [
            array(
                'title' => 'Позиция 1',
                'number' => 0,
                'price' => 10
            ),
            array(
                'title' => 'Позиция 2',
                'number' => 0,
                'price' => 20
            ),
            array(
                'title' => 'Позиция 3',
                'number' => 0,
                'price' => 30
            ),
        ];
    }
}
