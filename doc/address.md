# Address API spec

## Create Address

Endpoint :  POST /api/contact/:idContact/addresses

Request Header : 
- X-API-TOKEN : token
Request Body :
```json
{
    "street" : "jalan",
    "city" : "kota",
    "province" : "provinsi",
    "country" : "negara",
    "postal_code" : "kode pos"
}
```
Response Body (success) :
```json
{
    "data" : {
{
    "id" : 1,
    "street" : "jalan",
    "city" : "kota",
    "province" : "provinsi",
    "country" : "negara",
    "postal_code" : "kode pos"
}
    }
}
```
Response Body (failed) :

```json
{
    "errors" : "404 not found"
}
```

## Get Address

Endpoint :  GET /api/contact/:idContact/addresses/:idAddress

Request Header : 
- X-API-TOKEN : token

Response Body (success) :
```json
{
    "data" : {
 "id" : 1,
    "street" : "jalan",
    "city" : "kota",
    "province" : "provinsi",
    "country" : "negara",
    "postal_code" : "kode pos"
    }
}
```
Response Body (failed) :

```json
{
    "errors" : "404 not found"
}
```
## Update Address

Endpoint :  PUT /api/contact/:idContact/addresses/:idAdress

Request Header : 
- X-API-TOKEN : token
Request Body :
```json
{
    "street" : "jalan",
    "city" : "kota",
    "province" : "provinsi",
    "country" : "negara",
    "postal_code" : "kode pos"
}
```
Response Body (success) :
```json
{
    "data" : {
    "id" : 1,
    "street" : "jalan",
    "city" : "kota",
    "province" : "provinsi",
    "country" : "negara",
    "postal_code" : "kode pos"
}
}
```
Response Body (failed) :

```json
{
    "errors" : "404 not found"
}
```

## Delete Address

Endpoint :  DELETE /api/contact/:idContact/addresses/:idAddress

Request Header : 
- X-API-TOKEN : token

Response Body (success) :
```json
{
    "data" :"OK"
}
```
Response Body (failed) :

```json
{
    "errors" : "404 not found"
}
```

## List Address

Endpoint :  GET /api/contact/:idContact/addresses

Request Header : 
- X-API-TOKEN : token
Request Body :
```json

Response Body (success) :
```json
{
    "data" :[
        {
    "id" : 1,
    "street" : "jalan",
    "city" : "kota",
    "province" : "provinsi",
    "country" : "negara",
    "postal_code" : "kode pos"
},
{
    "id" : 2,
    "street" : "jalan",
    "city" : "kota",
    "province" : "provinsi",
    "country" : "negara",
    "postal_code" : "kode pos"
}
    ]
}
```
Response Body (failed) :

```json
{
    "errors" : "404 not found"
}
```
