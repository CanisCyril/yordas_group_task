<?php

namespace App\Http\Controllers\YordasGroup;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Models\YordasGroup\Substance;

class ApiController extends Controller
{
    public function active(Substance $substance) {

        return $substance->active()->get();   //returns result from model
    }
}
