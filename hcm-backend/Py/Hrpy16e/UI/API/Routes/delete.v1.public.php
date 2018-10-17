<?php

/**
 * @apiGroup           py/Hrpy16e
 * @apiName            delete
 *
 * @api                {POST} /api/hrpy16e/delete delete
 * @apiDescription     Delete data.
 *
 * @apiVersion         1.0.0
 * @apiPermission      none
 *
 * @apiHeader          {String}  Authorization     Access Token value
 * @apiHeader          {String}  Accept-Language   Language code value
 * @apiHeader          {String}  X-Requested-With  XML HttpRequest value
 * @apiHeader          {String}  Content-Type      application/json
 * 
 * @apiHeaderExample {json} Header-Example:
 *    "Authorization": "Bearer {{ACCESS_TOKEN}}"
 *    "Accept-Language": "th-TH"
 *    "X-Requested-With": "XMLHttpRequest"
 *    "Content-Type": "application/json"
 *
 * @apiParam         (Body) {Object[]} param_json  
 * @apiParam         (Body) {String}   param_json.codcompy  รหัสบริษัท
 * @apiParam         (Body) {String}   param_json.codbrlc  สถานที่ทำงาน
 * @apiParam         (Body) {String}   param_json.numbrlvl  ลำดับสาขา
 * @apiParam         (Body) {String}   param_json.codbrsoc  รหัสกลุ่มสาขา
 *
 * @apiParamExample {json} Request-Example:
 * {
 *    "param_json" : [{
 *          "codcompy": "String",
 *          "codbrlc": "String",
 *          "numbrlvl": "String",
 *          "codbrsoc": "String",
 *    }]
 * }
 * 
 * @apiSuccess (Success 204) response Success status value
 * 
 * @apiSuccessExample  {json}  Success-Response:
 * HTTP/1.1 204 OK
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
$router->post('hrpy16e/postdelete', [
    'as' => 'api.hrpy16e.postdelete.post',
    'uses'  => 'Controller@postDelete',
    'middleware' => [
      'auth:api',
    ],
]);
