<?php

namespace App\Models\Models\YordasGroup;

use Illuminate\Database\Eloquent\Model;

class Substance extends Model
{
    protected $table = 'yordas_group_db.substances';
    protected $fillable = [''];

    //Relationships

    public function tsd()
    {
        return $this->hasOne(TSDSubstanceList::class, 'id');
    }

    public function svhc()
    {
        return $this->hasOne(ReachSVHCCandidSubstance::class, 'id');
    }

    //Scopes

    public function scopeActive($query) {
        return $query->whereNotNull('id')->with('tsd', 'svhc');
    }

}
