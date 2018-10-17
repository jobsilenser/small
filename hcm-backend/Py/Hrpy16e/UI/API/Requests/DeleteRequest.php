<?php

namespace App\Containers\Py\Hrpy16e\UI\API\Requests;

use App\Ship\Parents\Requests\Request;

/**
 * Class DeleteRequest.
 */
class DeleteRequest extends Request
{
    /**
     * Define which Roles and/or Permissions has access to this request.
     *
     * @var  array
     */
    protected $access = [
        'permissions' => 'edit-hrpy16e',
        'roles'       => '',
    ];

    /**
     * Id's that needs decoding before applying the validation rules.
     *
     * @var  array
     */
    protected $decode = [
        // 'id',
    ];

    /**
     * Defining the URL parameters (e.g, `/user/{id}`) allows applying
     * validation rules on them and allows accessing them like request data.
     *
     * @var  array
     */
    protected $urlParameters = [
    ];

    /**
     * @return  array
     */
    public function rules()
    {
        return [
            'param_json'            => 'required|array',
            'param_json.*.codcompy' => 'required',
            'param_json.*.codbrlc' => 'required',
			'param_json.*.numbrlvl' => 'required',
			'param_json.*.codbrsoc' => 'required',
        ];
    }

    /**
     * @return  bool
     */
    public function authorize()
    {
        return $this->check([
            'hasAccess',
        ]);
    }
}
