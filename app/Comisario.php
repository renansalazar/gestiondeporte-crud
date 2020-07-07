<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comisario extends Model
{
    protected $fillable = [
      'nombre',
    ];

    public function eventos()
    {
      return $this->belongsToMany('App\Evento');
    }

}
