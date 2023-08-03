<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::with('category')
            ->when(\request('category'), function (Builder $query) {
                $query->where('category_id', \request('category'));
            })
            ->paginate(10);

        return PostResource::collection($posts);
    }
}
