<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class rom extends Model
{
    use HasFactory, SoftDeletes;

    protected $filable = [
        'name',
        'image',
        'lang',
        'slug',
        'url',
    ];

    public function console() {
        return $this->belongsTo(Console::class);
    }

    protected static function boot()
    {
        parent::boot();

        // Evento para gerar a slug antes de criar o modelo
        static::creating(function ($post) {
            $post->slug = self::createSlug($post->title);
        });

        // Evento para atualizar a slug antes de atualizar o modelo
        static::updating(function ($post) {
            // Atualiza a slug apenas se o título for modificado
            if ($post->isDirty('title')) {
                $post->slug = self::createSlug($post->title, $post->id);
            }
        });
    }

    protected static function createSlug($title, $excludeId = null)
    {
        $slug = Str::slug($title);
        $originalSlug = $slug;

        $count = 1;
        // Verifica se a slug já existe
        while (static::where('slug', $slug)->where('id', '<>', $excludeId)->exists()) {
            $slug = $originalSlug . '-' . $count++;
        }

        return $slug;
    }
}
