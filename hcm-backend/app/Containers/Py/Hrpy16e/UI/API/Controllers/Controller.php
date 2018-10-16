<?php

namespace App\Containers\Py\Hrpy16e\UI\API\Controllers;

use Apiato\Core\Foundation\Facades\Apiato;
use App\Containers\Py\Hrpy16e\UI\API\Requests\GetIndexRequest;
use App\Containers\Py\Hrpy16e\UI\API\Requests\DeleteRequest;
use App\Containers\Py\Hrpy16e\UI\API\Requests\SaveRequest;
use App\Containers\Py\Hrpy16e\UI\API\Transformers\CodbrsocTransformer;
use App\Containers\Py\Hrpy16e\UI\API\Transformers\PostTransformer;
use App\Ship\Parents\Controllers\ApiController;

/**
 * Class Controller
 *
 * @package App\Containers\Py\Hrpy16e\UI\API\Controllers
 */
class Controller extends ApiController
{
  private $user;

  public function __construct()
  {
    $this->user = getCurrentUser();
  }

  /**
   * @param GetIndex $request
   * @return array
   */
  public function getIndex(GetIndexRequest $request)
  {
    $collection = Apiato::call('Py\\Hrpy16e@GetIndexAction', [$this->user, $request]);
    $transform  = $this->transform($collection, CodbrsocTransformer::class);
    $result     = getResultTableFromTransform($transform);
    $response   = getResponse($collection, $result);

    return response($response['data'], $response['status']);
  }
  /**
    * @param SaveRequest $request
    * @return array
    */
    public function save(SaveRequest $request)
    {
        $collection = Apiato::call('Py\\Hrpy16e@SaveAction', [$this->user, $request]);

        $transform  = $this->transform($collection, PostTransformer::class);
        $result     = getResultDetailFromTransform($transform);    
        $response   = getResponse($collection, $result);

        return response($response['data'], $response['status']);
    }
      /**
     * @param DeleteRequest $request
     * @return array
     */
    public function postDelete(DeleteRequest $request)
    {
        $collection = Apiato::call('Py\\Hrpy16e@postdeleteAction', [$this->user, $request]);
        $transform  = $this->transform($collection, PostTransformer::class);
        $result     = getResultDetailFromTransform($transform);
        $response   = getResponse($collection, $result);
        return response($response['data'], $response['status']);
    }
}
