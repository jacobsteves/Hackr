<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMatchesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('matches', function (Blueprint $table) {
            $table->increments('id')->unsigned();
            $table->integer('user_one_id')->unsigned();
            $table->foreign('user_one_id')->references('id')->on('users');
            $table->integer('user_two_id')->unsigned();
            $table->foreign('user_two_id')->references('id')->on('users');
            $table->integer('hackathon_id')->unsigned();
            $table->foreign('hackathon_id')->references('id')->on('hackathons');
            $table->dateTime('match_date');
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
        Schema::dropIfExists('matches');
    }
}
