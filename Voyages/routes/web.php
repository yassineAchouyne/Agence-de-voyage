<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/',function(){
    return Inertia::render('AppVoyage');
});
Route::get('/connecter',function(){
    return Inertia::render('Connecter');
});
Route::get('/resultat',function(){
    return Inertia::render('Resultat');
});
Route::get('/confirm',function(){
    return Inertia::render('Confirme');
});
Route::get('/paiment',function(){
    return Inertia::render('Paimente');
});


require __DIR__.'/auth.php';
