<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\Models\Achievements;

class AchievementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $achievements = [
            [
                'title' => 'First Like',
                'user_id' => '0',
                'info' => 'This achievement is unlocked by liking a recipe for the first time.',
                'icon' => 'public/icons/like-icon.png',
                'score' => 10,
            ],
            [
                'title' => 'Ten likes',
                'user_id' => '0',
                'info' => 'Great job liking 10 recipes, you made som people happy.',
                'icon' => 'public/icons/like-icon.png',
                'score' => 30,
            ],

            [
                'title' => 'Created your first Recipe',
                'user_id' => '0',
                'info' => 'You created your first recipe, continiue sharing your recipes with the world.',
                'icon' => 'public/icons/comment-icon.png',
                'score' => 20,
            ],
            [
                'title' => 'Created 10 recipec',
                'user_id' => '0',
                'info' => 'Hello Gordon Ramsay! You almost made a cook book by now.',
                'icon' => 'public/icons/comment-icon.png',
                'score' => 50,
            ],

        ];

        foreach ($achievements as $achievement) {
            Achievements::create($achievement);
        }
    }

}
