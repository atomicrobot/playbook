+++
date = "2017-05-12T06:46:57-04:00"
title = "REST API"

+++

## REST API Design Recommendations

This is a living document that captures our current recommendations and preferences when designing RESTful APIs that mobile apps and web apps will consume.

## Network Transport

All communication must occur over SSL (HTTPS).

## Request Methods

- `GET` - Retrieving a resource
- `POST` - creating a resource or exposing a verb-like operation that will have a side effect
- `PUT` - updating a resource in whole or in part
- `DELETE` - deleting a resource

## Path

There are several considerations when creating a new resource.

### Structure

Follow logical naming of endpoints that describes what is being represented and appropriately in what hierarchy, if applicable.

Examples:

- `/widgets`
- `/widgets/1`
- `/widgets/1/parts`
- `/widgets/1/parts/abc-xyz`
- `/parts/`
- `/parts/abc-xyz`

### Content Negotiation

There are two primary ways to achieve retrieving content in the appropriate presentation.

- File extension (ex: `/api/widget.json`)
- HTTP `Accept` header (ex: `/api/widget` with `Accept: application/json`)

Our preference is to use the `Accept` header.

### Versioning

There are two primary ways to accomplish API versioning.

- As part of the URL path (ex: `/api/v1/widget`)
- As part of the HTTP `Accept` header (ex: `/api/widget` with `Accept: application/json;version=2`)

Our preference is to use the URL path.

### Summary

Our preference is that all API endpoints also begin with /api. 

An example request would be below:

```javascript
GET /api/v1/widgets/1/
Accept: application/json
```

## Status Codes

Try to limit the use of status codes to the following below.

- `200` - Standard success response code.
- `204` - POST - result of a verb like operation where it does make sense to return a response.
- `30x` - standard caching headers.
- `400` - All methods - the client has submitted a request that the server can not process.
- `401` - All methods - the resources requires authentication.
- `402` - All methods - the resource requires payment.
- `422` - PUT/POST - requests that have business logic validation errors.

https://en.wikipedia.org/wiki/List_of_HTTP_status_codes contians a list of all status codes that can be used if the codes above are not sufficient.

## JSON structure

http://jsonapi.org/ provides good guidance when designing JSON structures.  Some of that guidance is reflected in the recommendations below.

### Field Naming Conventions

JSON object key names should follow [snack case](https://en.wikipedia.org/wiki/Snake_case) formatting.

Not Preferred

```javascript
fieldname
fieldName
FieldName
Field_Name
```
Preferred

```javascript
field_name
```

### Appropriate use of JSON keys

Data elements that could be considered values should not be used as key names.

Not Preferred

```javascript
{
 "years": {
    "2017": {
      ..
    }
  }
}
```

Preferred

```javascript
{
  "years": [
    {
      "year": "2017"
    }
  ]
}
```

### Response Structure

See guidance on document structure here: http://jsonapi.org/format/#document-structure

Successful response data should be wrapped in a lightweight `data` envelope.

Not Preferred

```javascript
{
 "years": {
    "2017": {
      ..
    }
  }
}
```

Preferred

```javascript
{
  "data": {
    "years": [
      {
        "year": "2017"
      }
    ]
  },
  "meta": {
    "premium_available": true
  }
}
```

As a matter of convenience for languages that suffer from type erasure (ex: Java), please do not make the `data` value an array type and instead only use an object type.

Not Preferred

```javascript
{
  "data": [
    {
      "year": "2017"
    }
  ]
}
```

Preferred

```javascript
{
  "data": {
    "years": [
      {
        "year": "2017"
      }
    ]
  }
}
```

Error response data should be wrapped in a lightweight `errors` envelope.  See http://jsonapi.org/format/#errors for more detail on the document structure.

Not Preferred

```javascript
{
 "error": "Can't be empty!"
}
```

Preferred

```javascript
{
  "errors": [
    {
      "code": "123",
      "source": { 
        "pointer": "firstName"
      },
      "title": "Required",
      "detail": "Can't be empty!"
    }
  ]
}
```

## Authentication

JSON Web Tokens (JWT - https://jwt.io/introduction/) allows the API to provide clients with tokens that can be used to authenticate/authorize future requests.  Once provide to a client, these tokens are typically replayed to the server in one of two ways:

- The JWT is returned to the client and returned to the server using the `Bearer` scheme in the `Authorization` header. 
- The JWT is returned to the client as a Cookie and that Cookie is returned to the server.

Our preference is to use Cookie mechanisms for two reasons.

- There is a smaller attack surface area if the API is accessed from browsers (https://stormpath.com/blog/where-to-store-your-jwts-cookies-vs-html5-web-storage).
- Allows mobile apps to more easily share Cookies across apps and WebViews.

## Caching

Follow standard HTTP cache-control behaviors.

The HTTP spec allows use of `Last-Modified` date and `ETag` validators.  Our preference is to use `ETags`, first, then `Last-Modified` because `Last-Modified `timestamps do not allow for sub-second cache validation.  See https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html for additional discussion regarding caching.

## Request Headers

### User Agent

The standard HTTP `User-Agent header` that app clients use should follow the following pattern:
[`App Name] [version] ([Platform]; [Model]; [OS Version])`

An example would be:
`Widget App 1.0.0 (Android; Nexus 6P; 7.1.1)`

Generally, applications should avoid modifying the WebView User-Agent header unless there is a compelling use case.

### Non-standard Headers

- `X-Request-Id` - this is unique per request and if provided by the client in the request should also be echoed in the response by the server to enable end-to-end troubleshooting.  This value should be a UUID.
- `X-Platform` - the OS initiating the request.  `android` or `ios`.  This eliminates the need to parse the platform from the `User-Agent` header.
- `X-AppPackage` - Android application package or iOS bundle identifier name (ex: com.widget.app).
- `X-AppVersionName` - application version name (ex: 1.0.0).
- `X-AppVersionCode` - application version code/build number (ex: 42).


