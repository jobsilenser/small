<?php

namespace App\Containers\Py\Hrpy16e\Tasks;

use App\Ship\Parents\Tasks\Task;
use App\Containers\Py\Hrpy16e\Values\Codbrsoc;

class GetIndexTask extends Task
{
  public function run($data)
  {
    $params['input']  = $data;
    $params['output'] = [];    
    $params           = executeProcedure('HRPY16EENT.get_index', $params);
    $json_str         = $params['output'];
    $collection       = convertJsonStrToCollection($json_str, Codbrsoc::class);
    return $collection;
  }
}
