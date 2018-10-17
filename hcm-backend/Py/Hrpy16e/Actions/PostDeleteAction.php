<?php

namespace App\Containers\Py\Hrpy16e\Actions;

use Apiato\Core\Foundation\Facades\Apiato;
use App\Ship\Parents\Actions\Action;

class PostDeleteAction extends Action
{
  public function run($user,$request)
  {
 /*   $p_codcompy = $request->p_codcompy;
	$p_codbrlc = $request->p_codbrlc;
	$p_numbrlvl = $request->p_numbrlvl;
	$p_codbrsoc = $request->p_codbrsoc;
    if(!is_null($p_codcompy)) {
      $p_codcompy .= '%';
    }
	if(!is_null($p_codbrlc)) {
      $p_codbrlc .= '%';
    }
	if(!is_null($p_numbrlvl)) {
      $p_numbrlvl .= '%';
    }
	if(!is_null($p_codbrsoc)) {
      $p_codbrsoc .= '%';
    }
    $params = [
      'p_codcompy'  => $request->p_codcompy,
	  'p_codbrlc'  => $request->p_codbrlc,
	  'p_numbrlvl'  => $request->p_numbrlvl,
	  'p_codbrsoc'  => $request->p_codbrsoc
    ];*/
	$params = [
            'param_json' => json_encode($request->getInputByKey('param_json'), JSON_FORCE_OBJECT),
    ];
    $params     = array_merge($user, $params);
    $collection = Apiato::call('Py\\Hrpy16e@PostDeleteTask', [$params]);
    return $collection;
  }
}
