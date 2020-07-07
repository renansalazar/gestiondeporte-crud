<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventoComisarioTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('evento_comisario', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('evento_id')->unsigned();
            $table->foreign('evento_id')->references('id')->on('eventos');
            $table->unsignedBigInteger('comisario_id')->unsigned();
            $table->foreign('comisario_id')->references('id')->on('comisarios');
            $table->enum('tipo', ['juez', 'observador']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('evento_comisario');
    }
}
