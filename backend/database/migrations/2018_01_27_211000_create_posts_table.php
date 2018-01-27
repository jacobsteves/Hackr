<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->increments('id');
            $table->foreign('user_id')
              ->references('id')->on('users');
            $table->foreign('hackathon_id')
              ->references('id')->on('hackathons');
            $table->string('description');
            $table->boolean('have_idea');
            $table->integer('desired_members');
            $table->boolean('will_stay_up');
            $table->integer('seriousness_level');
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
        Schema::dropIfExists('posts');
    }
}
