# User Api Spec

## Register User

Endpoint : POST /api/users/login

Request Body : 

``` json
{
    "username" : "jefmodjo",
    "password" : "123"
    
}
```
Response Body (Succes) :
```json
{
 "data" : {
    "username" : "jefmodjo",
    "name " : "Nanda",
    "token" : "token1111111111"
 }
}
```
Response Body (Failed) :
```json
{
"response" : "not found"
}
```

## Login User

Endpoint : POST /api/users

Request Body : 

``` json
{
    "username" : "jefmodjo",
    "password" : "123"
}
```
Response Body (Succes) :
```json
{
 "data" : {
    "username" : "jefmodjo",
    "name " : "Nanda",
    "token" : "uuid"
 }
}
```
Response Body (Failed) :
```json
{
"response" : "username or password wrong"
}
```

## Get User
Endpoint : GET /api/users/current

Request Header :
- X-API-TOKEN : token

Response Body (Succes) :
```json
{
 "data" : {
    "username" : "jefmodjo",
    "name " : "Nanda"
 }
}
```
Response Body (Failed) :
```json
{
"response" : "Unauthorized"
}
```
## Update User

Endpoint : PATCH /api/users/current

Request Header :
- X-API-TOKEN : token

Request Body : 

``` json
{
    "password" : "123", //tidak wajib
    "name" : "Nanda"   //tidak wajib
}
```
Response Body (Succes) :
```json
{
 "data" : {
    "username" : "jefmodjo",
    "name " : "Nanda"
 }
}
```
Response Body (Failed) :
```json
{
"response" : "not found"
}
```
## logout User

Endpoint : DELETE /api/users/current

Request Header :
- X-API-TOKEN : token

Response Body (Succes) :
```json
{
 "data" : "OK"
}
```
Response Body (Failed) :
```json
{
"response" : "not found"
}
```