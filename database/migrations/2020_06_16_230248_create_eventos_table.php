<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('eventos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('complejo_id')->unsigned();
            $table->foreign('complejo_id')->references('id')->on('complejos');
            $table->timestamp('fecha', 0);
            $table->decimal('duracion', 10, 2);
            $table->integer('cant_participantes');
            $table->integer('cant_comisarios');
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
        Schema::dropIfExists('eventos');
    }
}
