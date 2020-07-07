<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Evento extends Model
{
    protected $fillable = [
      'complejo_id', 'fecha', 'duracion', 'cant_participantes', 'cant_comisarios'
    ];

    public function complejo()
    {
      return $this->belongsTo('App\Complejo');
    }

    public function comisarios()
    {
      return $this->belongsToMany('App\Comisario');
    }

    public function equipamientos()
    {
      return $this->belongsToMany('App\Equipamiento');
    }

}
