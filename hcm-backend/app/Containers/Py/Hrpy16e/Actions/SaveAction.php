<?php

namespace App\Containers\Py\Hrpy16e\Actions;

use App\Ship\Parents\Actions\Action;
use App\Ship\Parents\Requests\Request;
use Apiato\Core\Foundation\Facades\Apiato;

class SaveAction extends Action
{
    public function run($user, $request)
    {
      /*  $params = [
            'codcompy'   => $request->codcompy,
            'numtele'  => $request->numtele,
            'numbrlvl'  => $request->numbrlvl,
            'descod'  => $request->descod,
            'codbrsoc'  => $request->codbrsoc,
            'zipcode'  => $request->zipcode,
            'numfax'   => $request->numfax,
            'adrcome1'   => $request->adrcome1,
            'codbrlc'   => $request->codbrlc
        ];
		echo("xxxxxxxxxx".$request->codcompy."<<<<<");
        $data = array_merge($user, $params);
        $collection = Apiato::call('Py\\Hrpy16e@SaveTask', [$data]);
        
        return $collection;
		
		{"detail":{"codcompy":"PPS","codbrlc":"0002","adrcome1":"   สวนอุตสาหกรรมโรจนะ เลขที่ 1/42 หมู่ที่ 5  ถ.ถนนโรจนะ ตำบลคานหาม ต. คานหาม อ. อุทัย จ. พระนครศรีอย","zipcode":"11120","numfax":"0-3533-1500","numtele":"0-3533-1500","numbrlvl":"000000"}}
		*/
	$params = [
            'param_json' => json_encode($request->getInputByKey('param_json'), JSON_FORCE_OBJECT),
    ];
    $params     = array_merge($user, $params);
    $collection = Apiato::call('Py\\Hrpy16e@SaveTask', [$params]);
    return $collection;
    }
}