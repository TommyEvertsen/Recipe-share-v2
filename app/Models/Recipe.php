<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Events\RecipeCreated;

class Recipe extends Model
{
    use HasFactory;

    protected $fillable = [
        'message',
        'title',
        'ingridients'
    ];

    protected $dispatchesEvents = [
        'created' => RecipeCreated::class,
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
