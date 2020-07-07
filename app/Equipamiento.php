<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Equipamiento extends Model
{
    protected $fillable = [
      'nombre',
    ];

    public function eventos()
    {
      return $this->belongsToMany('App\Evento');
    }

    public function complejos()
    {
      return $this->belongsToMany('App\Complejo');
    }

}
