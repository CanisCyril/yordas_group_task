<?php

Route::namespace('YordasGroup')->group(function () {  // namespace paths to 'App\Http\Controllers\YordasGroup'

    Route::view('/', 'yordas_group.index'); //returning view -- index page
    Route::post('/api', 'ApiController@active'); //fetching substances with relationships
});
