<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Deporte extends Model
{
    //
    protected $fillable = [
      'nombre'
    ];

    public function complejos()
    {
      return $this->belongsToMany('App\Complejo');
    }
    
}
