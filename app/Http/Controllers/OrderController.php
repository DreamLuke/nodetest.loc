<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Order;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
         return Order::all();
        // return Order::orderBy('updated_at', 'DESC')->get();
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
        $order = new Order;
        $order->title = $request->title; //'ТАЙТЛ 55';
        $order->number = '0';
        $order->price = $request->price;
        $order->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
        //$order = Order::get('id', $id)->first();

        $order = Order::find($id);
        // dd($order);die;

        $order->title = $order->title;
        $order->number = $request->number;
        $order->price = $order->price;
        $order->save();
    }

    public function updatePosition(Request $request, $id)
    {
        $order = Order::find($id);

        $order->title = $request->title;
        $order->number = $request->number;
        $order->price = $request->price;
        $order->save();
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //$order = Order::find($id);
        //$order->delete();

        Order::where('id', $id)->delete();
    }

    public function getLastUpdateDate()
    {
        // return '12345';
        return Order::orderBy('updated_at', 'DESC')->first();
        //return Order::all()->groupBy('updated_at');
    }
}

