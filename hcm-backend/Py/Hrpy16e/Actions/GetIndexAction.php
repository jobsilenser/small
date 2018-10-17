<?php

namespace App\Containers\Py\Hrpy16e\Actions;

use Apiato\Core\Foundation\Facades\Apiato;
use App\Ship\Parents\Actions\Action;

class GetIndexAction extends Action
{
  public function run($user,$request)
  {
    $p_codbrsoc = $request->p_codbrsoc;
    if(!is_null($p_codbrsoc)) {
		if($p_codbrsoc=='undefined'){$p_codbrsoc='0';}
      $p_codbrsoc .= '%';
    }
    $params = [
      'p_codbrsoc'  =>  $p_codbrsoc
    ];
    $params     = array_merge($user, $params);
    $collection = Apiato::call('Py\\Hrpy16e@GetIndexTask', [$params]);
    return $collection;
  }
}
