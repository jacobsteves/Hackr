<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSwipesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('swipes', function (Blueprint $table) {
            $table->increments('id');
            $table->foreign('swiper_id')
              ->references('id')->on('users');
            $table->foreign('swipee_id')
              ->references('id')->on('users');
            $table->foreign('hackathon_id')
              ->references('id')->on('hackathons');
            $table->boolean('said_yes');
            $table->dateTime('swipe_date');
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
        Schema::dropIfExists('swipes');
    }
}
