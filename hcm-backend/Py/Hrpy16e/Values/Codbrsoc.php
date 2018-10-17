<?php

namespace App\Containers\Py\Hrpy16e\Values;

use App\Ship\Parents\Values\Value;

class Codbrsoc extends Value
{ 
  public $codcompy;
  public $codbrlc;
  public $numbrlvl;
  public $descod;
  public $codbrsoc;
  public $zipcode;
  public $numtele;
  public $numfax;
  public $adrcome1;
  public $coderror;
  public $response;

  /**
   * A resource key to be used by the the JSON API Serializer responses.
   */
  protected $resourceKey = 'hrpy16e-codbrsoc';

  public function __construct($value)
  {
    $this->codcompy  = (isset($value->codcompy)) ? $value->codcompy : '';
    $this->codbrlc   = (isset($value->codbrlc)) ? $value->codbrlc : '';
    $this->numbrlvl  = (isset($value->numbrlvl)) ? $value->numbrlvl : '';
    $this->descod   = (isset($value->descod)) ? $value->descod : '';
    $this->codbrsoc   = (isset($value->codbrsoc)) ? $value->codbrsoc : '';
    $this->zipcode   = (isset($value->zipcode)) ? $value->zipcode : '';
    $this->numtele   = (isset($value->numtele)) ? $value->numtele : '';
    $this->numfax   = (isset($value->numfax)) ? $value->numfax : '';
    $this->adrcome1   = (isset($value->adrcome1)) ? $value->adrcome1 : '';

    $this->coderror = (isset($value->coderror)) ? $value->coderror : '';
    $this->response = (isset($value->response)) ? $value->response : '';
  }
}
