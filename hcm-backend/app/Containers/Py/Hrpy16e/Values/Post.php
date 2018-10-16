<?php

namespace App\Containers\Py\Hrpy16e\Values;

use App\Ship\Parents\Values\Value;

class Post extends Value
{
    public $coderror;
    public $response;
    /**
     * A resource key to be used by the the JSON API Serializer responses.
     */
    protected $resourceKey = 'hrpy16e-Post';

    public function __construct($value)
    {
        $this->coderror = (isset($value->coderror)) ? $value->coderror : '';
        $this->response = (isset($value->response)) ? $value->response : '';
    }
}
