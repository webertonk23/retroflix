<?php

use Illuminate\Support\Facades\Route;

Route::any('/{any}', 'FrontentController@index')->where('any', '^(?!api).*$');
