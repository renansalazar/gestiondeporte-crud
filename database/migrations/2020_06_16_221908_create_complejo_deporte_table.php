<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateComplejoDeporteTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('complejo_deporte', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('complejo_id')->unsigned();
            $table->foreign('complejo_id')->references('id')->on('complejos');
            $table->unsignedBigInteger('deporte_id')->unsigned();
            $table->foreign('deporte_id')->references('id')->on('deportes');
            $table->string('localizacion');
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
        Schema::dropIfExists('complejo_deporte');
    }
}
