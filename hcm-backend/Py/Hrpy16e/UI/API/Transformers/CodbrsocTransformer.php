<?php

namespace App\Containers\Py\Hrpy16e\UI\API\Transformers;

use App\Containers\Py\Hrpy16e\Values\Codbrsoc;
use App\Ship\Parents\Transformers\Transformer;

class CodbrsocTransformer extends Transformer
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
   * @param Codbrsoc $calendar
   *
   * @return array
   */
  public function transform(Codbrsoc $codbrsoc)
  {
    if ($codbrsoc->coderror >= 300) {
      $response = [
        'response' => $codbrsoc->response,
      ];
    } else {
      $response = [
        'codcompy'       => $codbrsoc->codcompy,
        'codbrlc'       => $codbrsoc->codbrlc,
        'numbrlvl'       => $codbrsoc->numbrlvl,
		'descod'       => $codbrsoc->descod,
		'codbrsoc'       => $codbrsoc->codbrsoc,
		'zipcode'       => $codbrsoc->zipcode,
		'numtele'       => $codbrsoc->numtele,
		'numfax'       => $codbrsoc->numfax,
		'adrcome1'       => $codbrsoc->adrcome1
      ];
    }

    return $response;
  }
}