<?php

namespace App\Containers\Py\Hrpy16e\Tasks;

use App\Ship\Parents\Tasks\Task;
use App\Containers\Py\Hrpy16e\Values\Post;

class PostDeleteTask extends Task
{
  public function run($data)
  {
    $params['input']  = $data;
    $params['output'] = [];    
    $params           = executeProcedure('HRPY16EENT.post_delete', $params);
    $json_str         = $params['output'];
    $collection       = convertJsonStrToCollection($json_str, Post::class);
    return $collection;
  }
}
