<?php

/**
 * @apiGroup           py/Hrpy16e
 * @apiName            getIndex
 *
 * @api                {GET} /api/hrpy16e/index/{p_codbrsoc} getIndex
 * @apiDescription     Get index page.
 *
 * @apiVersion         1.0.0
 * @apiPermission      none
 *
 * @apiHeader          {String}  Authorization     Access Token value
 * @apiHeader          {String}  Accept-Language   Language code value
 * @apiHeader          {String}  X-Requested-With  XML HttpRequest value
 * 
 * @apiHeaderExample {json} Header-Example:
 *    "Authorization": "Bearer {{ACCESS_TOKEN}}"
 *    "Accept-Language": "th-TH"
 *    "X-Requested-With": "XMLHttpRequest"
 *
 * @apiSuccess         {Object[]} rows        
 * @apiSuccess         {String}   rows.codcompy       รหัสกะ
 * @apiSuccess         {String}   rows.codbrlc  รายละเอียดกะ
 * @apiSuccess         {String}   rows.numbrlvl       ช่วงเวลาปฏิบัติงาน
 * 
 * @apiSuccessExample  {json}  Success-Response:
 * HTTP/1.1 200 OK
 * {
 *    "rows": [
 *        {
 *          "codcompy": "String",
 *          "codbrlc": "String",
 *          "numbrlvl": "String"
 *        }
 *    ]
 * }
 *
 * @apiError response Invalid status value
 * 
 * @apiErrorExample {json} Error-Response:
 * HTTP/1.1 400 Invalid status value
 * {
 *    "response": "string"
 * }
 * 
 */

/** @var Route $router */
$router->get('hrpy16e/index/{p_codbrsoc}', [
    'as' => 'api.hrpy16e.index.get',
    'uses'  => 'Controller@getIndex',
    'middleware' => [
      'auth:api',
    ],
]);
