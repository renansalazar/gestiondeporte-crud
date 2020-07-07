<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateComplejoEquipamientoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('complejo_equipamiento', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('complejo_id')->unsigned();
            $table->foreign('complejo_id')->references('id')->on('complejos');
            $table->unsignedBigInteger('equipamiento_id')->unsigned();
            $table->foreign('equipamiento_id')->references('id')->on('equipamientos');
            $table->timestamp('fecha_matenimiento', 0);
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
        Schema::dropIfExists('complejo_equipamiento');
    }
}
