# Contact Spec API

## Create Contact

Endpoint : POST /api/contact
Request Header :
- X-API-TOKEN : token

Request Body :
```json
{
    "first_name" : "Jeff",
    "last_name" : "Modjo",
    "email" : "jefmodjo@gmail.com",
    "phone" : "085340440971"
}
```

Response Body (success) :

```json
{
    "data" : {
        "id" : 1,
        "first_name" : "Jeff",
        "last_name" : "Modjo",
        "email" : "jefmodjo@gmail.com",
        "phone" : "085340440971"
    }
}
```

Response Body (failed) :

```json
{
    "messages" : "not found"
}
```
## Get Contact
Endpoint : GET /api/contact/:id
Request Header :
- X-API-TOKEN : token

Response Body (success) :

```json
{
    "data" : {
        "id" : 1,
        "first_name" : "Jeff",
        "last_name" : "Modjo",
        "email" : "jefmodjo@gmail.com",
        "phone" : "085340440971"
    }
}
```

Response Body (failed) :

```json
{
    "messages" : "not found"
}
```
## Update Contact

Endpoint : PUT /api/contact
Request Header :
- X-API-TOKEN : token

Request Body :
```json
{
    "first_name" : "Jeff",
    "last_name" : "Modjo",
    "email" : "jefmodjo@gmail.com",
    "phone" : "085340440971"
}
```

Response Body (success) :

```json
{
    "data" : {
        "id" : 1,
        "first_name" : "Jeff",
        "last_name" : "Modjo",
        "email" : "jefmodjo@gmail.com",
        "phone" : "085340440971"
    }
}
```

Response Body (failed) :

```json
{
    "messages" : "not found"
}
```

## Delete Contact
Endpoint : DELETE /api/contact/:id
Request Header :
- X-API-TOKEN : token


Response Body (success) :

```json
{
    "data" : "contact has been delete success"
}
```

Response Body (failed) :

```json
{
    "messages" : "not found"
}
```
## Search Contact

Endpoint : GET /api/contact

Query Parameter :

- name : String, contact firstname or contact lastname, optional
- phone : String, contact phone, optional
- email : String, contact email, optional
- page : number, default 1
- size :number, default 10


Request Header :
- X-API-TOKEN : token


Response Body (success) :

```json
{
    "data" : [
        {
        "id" : 1,
        "first_name" : "Jeff",
        "last_name" : "Modjo",
        "email" : "jefmodjo@gmail.com",
        "phone" : "085340440971"
    },
    {
        "id" : 2,
        "first_name" : "lin",
        "last_name" : "ahmad",
        "email" : "linahmad@gmail.com",
        "phone" : "082271291096"
    }
    ],
    "paging" :{
        "current_page" : 1,
        "total_page" : 10,
        "size" : 10,
    }
}
```

Response Body (failed) :

```json
{
    "messages" : "not found"
}
```