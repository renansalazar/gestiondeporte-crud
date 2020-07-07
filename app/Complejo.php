<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Complejo extends Model
{
    //
    protected $fillable = [
      'tipo', 'jefe', 'area', 'presupuesto'
    ];

    
    public function deportes()
    {
      return $this->belongsToMany('App\Deporte');
    }
    
    public function eventos()
    {
      return $this->hasMany('App\Evento');
    }

    public function equipamientos()
    {
      return $this->belongsToMany('App\Equipamiento');
    }
          
}
