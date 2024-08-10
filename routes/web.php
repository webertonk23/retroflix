<?php

use Illuminate\Support\Facades\Route;

Route::namespace('App\Http\Controllers')->group(function () {
    Route::apiResource('console', 'ConsoleController');
    Route::any('/{any}', 'FrontentController@index')->where('any', '^(?!api).*$');
});
