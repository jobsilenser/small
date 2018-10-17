<?php

namespace App\Containers\Py\Hrpy16e\UI\API\Transformers;

use App\Containers\Py\Hrpy16e\Values\Post;
use App\Ship\Parents\Transformers\Transformer;

class PostTransformer extends Transformer
{
  /**
   * @var  array
   */
  protected $defaultIncludes = [

  ];

  /**
   * @var  array
   */
  protected $availableIncludes = [

  ];

  /**
   * @param Post $post
   *
   * @return array
   */
  public function transform(Post $post)
  {
    $response = [
        'response'  => $post->response
    ];

    return $response;
  }
}
