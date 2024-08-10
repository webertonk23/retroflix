<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FrontentController extends Controller
{
    public function index() 
    { 
        return view('frontend'); 
    } 
}
