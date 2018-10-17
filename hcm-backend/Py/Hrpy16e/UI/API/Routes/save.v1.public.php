<?php

/**
 * @apiGroup           Py/Hrpy16e
 * @apiName            save
 *
 * @api                {POST} /api/hrpy16e/save save
 * @apiDescription     Save data.
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
 * @apiParam         (Body) {String}   codcompy       รหัสบริษัท
 * @apiParam         (Body) {String}   numtele		  โทรศัพท์
 * @apiParam         (Body) {String}   numbrlvl       ลำดับสาขา
 * @apiParam         (Body) {String}   descod         รายละเอียดสถานที่ทำงาน
 * @apiParam         (Body) {String}   codbrsoc       รหักลุ่มสาขา
 * @apiParam         (Body) {String}   zipcode        รหัสไปรษณีย์
 * @apiParam         (Body) {String}   numfax         โทรสาร
 * @apiParam         (Body) {String}   adrcome1       ที่อยู่
 * @apiParam         (Body) {String}   codbrlc        สถานที่ทำงาน

 *
 * @apiParamExample {json} Request-Example:
 * {
 *    "codcompy": "String",
 *    "numtele": "String",
 *    "numbrlvl": "String",
 *    "descod": "String",
 *    "codbrsoc": "string",
 *    "zipcode": "string",
 *    "numfax": "string",
 *    "adrcome1": "string",
 *    "codbrlc": "string"
 * }
 * 
 * @apiSuccess (Success 201) response Success status value
 * 
 * @apiSuccessExample  {json}  Success-Response:
 * HTTP/1.1 201 OK
 * {
 *    "response": "string"
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
$router->post('hrpy16e/save', [
    'as' => 'api.hrpy16e.save.post',
    'uses'  => 'Controller@save',
    'middleware' => [
      'auth:api',
    ],
]);
