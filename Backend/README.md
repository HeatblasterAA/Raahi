# Backend API Documentation

## User Register

### /users/register

### Description

This endpoint is used to register a new user.

### Request Body

The request body must be a JSON object containing the following fields:

- `fullname` (object, required): An object containing the user's full name.
  - `firstname` (string, required): The first name of the user. Must be at least 3 characters long.
  - `lastname` (string, optional): The last name of the user. Must be at least 3 characters long if provided.
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

### Response body

The response body will be a JSON object containing the following fields:

- `token` (string): The JWT token for the authenticated user.
- `user` (object): An object containing the user's details.
  - `fullname` (object): An object containing the user's full name.
    - `firstname` (string): The first name of the user.
    - `lastname` (string): The last name of the user.
  - `email` (string): The email address of the user.
  - `password` (string): The hashed password of the user.
  - `_id` (string): The unique identifier of the user.
  - `__v` (number): The version key.

### Example Request

```json
{
  "fullname": {
    "firstname": "Test_first",
    "lastname": "test_last"
  },
  "email": "test@test.com",
  "password": "test_pass"
}
```

### Response

- `201 Created`: User successfully registered.
- `400 Bad Request`: Invalid input data. The response will contain details about the validation errors.

### Example Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaSI6IjY3ZDA1NGJkYzRmZjIwMTIzZGY4NWFjNSIsImlhdCI6MTc0MTcwNjQyOX0.Jd26NFTe9i8gWt0-1VcJ35MB_HJlIRBl309C1bPkRmE",
  "user": {
    "fullname": {
      "firstname": "Test_first",
      "lastname": "test_last"
    },
    "email": "test@test.com",
    "password": "$2b$10$GdNhsUjYz5S4R9hxouHBD.SOqUxzZOgMtWY2BbqtJCEikNi3gj1vC",
    "_id": "67d054bdc4ff20123df85ac5",
    "__v": 0
  }
}
```

### Error Response

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

## User Login

### /users/login

### Description

This endpoint is used to log in an existing user.

### Request Body

The request body must be a JSON object containing the following fields:

- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

### Response body

The response body will be a JSON object containing the following fields:

- `token` (string): The JWT token for the authenticated user.
- `user` (object): An object containing the user's details.
  - `fullname` (object): An object containing the user's full name.
    - `firstname` (string): The first name of the user.
    - `lastname` (string): The last name of the user.
  - `email` (string): The email address of the user.
  - `password` (string): The hashed password of the user.
  - `_id` (string): The unique identifier of the user.
  - `__v` (number): The version key.

### Example Request

```json
{
  "email": "test@test.com",
  "password": "test_pass"
}
```

### Response

- `200 OK`: User successfully logged in.
- `400 Bad Request`: Invalid input data. The response will contain details about the validation errors.
- `401 Unauthorized`: Invalid email or password.

### Example Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaSI6IjY3ZDA1NGJkYzRmZjIwMTIzZGY4NWFjNSIsImlhdCI6MTc0MTcxMjIyN30.yv1IRCbrYE0BtcXDZnrO6VWeJZhNxtbgGzE0l5dF1A8",
  "user": {
    "fullname": {
      "firstname": "Test_first",
      "lastname": "test_last"
    },
    "_id": "67d054bdc4ff20123df85ac5",
    "email": "test@test.com",
    "password": "$2b$10$GdNhsUjYz5S4R9hxouHBD.SOqUxzZOgMtWY2BbqtJCEikNi3gj1vC",
    "__v": 0
  }
}
```

### Error Response

```json
{
  "errors": [
    {
      "msg": "Invalid email or password",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Invalid email or password",
      "param": "password",
      "location": "body"
    }
  ]
}
```

## User Profile

### /users/profile

### Description

This endpoint is used to retrieve the profile of the currently logged-in user. It requires a valid JWT token in the `Authorization` header or in the cookies.

### Request Headers

- `Authorization`: `Bearer <token>`, where `<token>` is the JWT token obtained after login.

### Request Cookies

- `token`: The JWT token obtained after login.

### Response Body

The response body will be a JSON object containing the user's profile details.

- `fullname` (object): An object containing the user's full name.
  - `firstname` (string): The first name of the user.
  - `lastname` (string): The last name of the user.
- `email` (string): The email address of the user.
- `_id` (string): The unique identifier of the user.
- `__v` (number): The version key.

### Example Response

```json
{
  "fullname": {
    "firstname": "Test_first",
    "lastname": "test_last"
  },
  "email": "test@test.com",
  "_id": "67d054bdc4ff20123df85ac5",
  "__v": 0
}
```

### Error Responses

- `401 Unauthorized`: If the JWT token is missing, invalid, or expired.

## User Logout

### /users/logout

### Description

This endpoint is used to log out the currently logged-in user. It requires a valid JWT token in the `Authorization` header or in the cookies. It also clears the `token` cookie.

### Request Headers

- `Authorization`: `Bearer <token>`, where `<token>` is the JWT token obtained after login.

### Request Cookies

- `token`: The JWT token obtained after login.

### Response Body

The response body will be a JSON object containing a success message.

### Example Response

```json
{
  "message": "Logged out"
}
```

### Error Responses

- `401 Unauthorized`: If the JWT token is missing, invalid, or expired.

## Captain

## Captain Register

### /captains/register

### Description

This endpoint is used to register a new captain.

### Request Body

The request body must be a JSON object containing the following fields:

- `fullname` (object, required): An object containing the captain's full name.
  - `firstname` (string, required): The first name of the captain. Must be at least 3 characters long.
  - `lastname` (string, optional): The last name of the captain. Must be at least 3 characters long if provided.
- `email` (string, required): The email address of the captain. Must be a valid email format.
- `password` (string, required): The password for the captain. Must be at least 6 characters long.
- `vehicle` (object, required): An object containing the vehicle details.
  - `color` (string, required): The color of the vehicle. Must be at least 3 characters long.
  - `plate` (string, required): The plate number of the vehicle. Must be at least 3 characters long.
  - `capacity` (number, required): The capacity of the vehicle. Must be at least 1.
  - `vehicleType` (string, required): The type of the vehicle. Must be one of "car", "motorcycle", or "auto".

### Response Body

The response body will be a JSON object containing the following fields:

- `token` (string): The JWT token for the authenticated captain.
- `captain` (object): An object containing the captain's details.
  - `fullname` (object): An object containing the captain's full name.
    - `firstname` (string): The first name of the captain.
    - `lastname` (string): The last name of the captain.
  - `email` (string): The email address of the captain.
  - `vehicle` (object): An object containing the vehicle details.
    - `color` (string): The color of the vehicle.
    - `plate` (string): The plate number of the vehicle.
    - `capacity` (number): The capacity of the vehicle.
    - `vehicleType` (string): The type of the vehicle.
  - `_id` (string): The unique identifier of the captain.
  - `__v` (number): The version key.

### Example Request

```json
{
  "fullname": {
    "firstname": "Captain_first",
    "lastname": "Captain_last"
  },
  "email": "captain@test.com",
  "password": "captain_pass",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Response

- `201 Created`: Captain successfully registered.
- `400 Bad Request`: Invalid input data. The response will contain details about the validation errors.

### Example Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaSI6IjY3ZDA1NGJkYzRmZjIwMTIzZGY4NWFjNSIsImlhdCI6MTc0MTcwNjQyOX0.Jd26NFTe9i8gWt0-1VcJ35MB_HJlIRBl309C1bPkRmE",
  "captain": {
    "fullname": {
      "firstname": "Captain_first",
      "lastname": "Captain_last"
    },
    "email": "captain@test.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "_id": "67d054bdc4ff20123df85ac5",
    "__v": 0
  }
}
```

### Error Response

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

## User Login

### /users/login

### Description

This endpoint is used to log in an existing user.

### Request Body

The request body must be a JSON object containing the following fields:

- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

### Response body

The response body will be a JSON object containing the following fields:

- `token` (string): The JWT token for the authenticated user.
- `user` (object): An object containing the user's details.
  - `email` (string): The email address of the user.
  - `_id` (string): The unique identifier of the user.
  - `__v` (number): The version key.

### Example Request

```json
{
  "email": "test@test.com",
  "password": "test_pass"
}
```

### Response

- `200 OK`: User successfully logged in.
- `400 Bad Request`: Invalid input data. The response will contain details about the validation errors.
- `401 Unauthorized`: Invalid email or password.

### Example Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaSI6IjY3ZDA1NGJkYzRmZjIwMTIzZGY4NWFjNSIsImlhdCI6MTc0MTcwNjQyOX0.Jd26NFTe9i8gWt0-1VcJ35MB_HJlIRBl309C1bPkRmE",
  "user": {
    "email": "test@test.com",
    "_id": "67d054bdc4ff20123df85ac5",
    "__v": 0
  }
}
```

### Error Response

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

## User Profile

### /users/profile

### Description

This endpoint is used to retrieve the profile of the currently logged-in user. It requires a valid JWT token in the `Authorization` header or in the cookies.

### Request Headers

- `Authorization`: `Bearer <token>`, where `<token>` is the JWT token obtained after login.

### Request Cookies

- `token`: The JWT token obtained after login.

### Response Body

The response body will be a JSON object containing the user's profile details.

- `fullname` (object): An object containing the user's full name.
  - `firstname` (string): The first name of the user.
  - `lastname` (string): The last name of the user.
- `email` (string): The email address of the user.
- `_id` (string): The unique identifier of the user.
- `__v` (number): The version key.

### Example Response

```json
{
  "fullname": {
    "firstname": "Test_first",
    "lastname": "test_last"
  },
  "email": "test@test.com",
  "_id": "67d054bdc4ff20123df85ac5",
  "__v": 0
}
```

### Error Responses

- `401 Unauthorized`: If the JWT token is missing, invalid, or expired.

## User Logout

### /users/logout

### Description

This endpoint is used to log out the currently logged-in user. It requires a valid JWT token in the `Authorization` header or in the cookies. It also clears the `token` cookie.

### Request Headers

- `Authorization`: `Bearer <token>`, where `<token>` is the JWT token obtained after login.

### Request Cookies

- `token`: The JWT token obtained after login.

### Response Body

The response body will be a JSON object containing a success message.

### Example Response

```json
{
  "message": "Logged out"
}
```

### Error Responses

- `401 Unauthorized`: If the JWT token is missing, invalid, or expired.

## Captain

## Captain Register

### /captains/register

### Description

This endpoint is used to register a new captain.

### Request Body

The request body must be a JSON object containing the following fields:

- `fullname` (object, required): An object containing the captain's full name.
  - `firstname` (string, required): The first name of the captain. Must be at least 3 characters long.
  - `lastname` (string, optional): The last name of the captain. Must be at least 3 characters long if provided.
- `email` (string, required): The email address of the captain. Must be a valid email format.
- `password` (string, required): The password for the captain. Must be at least 6 characters long.
- `vehicle` (object, required): An object containing the vehicle details.
  - `color` (string, required): The color of the vehicle. Must be at least 3 characters long.
  - `plate` (string, required): The plate number of the vehicle. Must be at least 3 characters long.
  - `capacity` (number, required): The capacity of the vehicle. Must be at least 1.
  - `vehicleType` (string, required): The type of the vehicle. Must be one of "car", "motorcycle", or "auto".

### Response Body

The response body will be a JSON object containing the following fields:

- `token` (string): The JWT token for the authenticated captain.
- `captain` (object): An object containing the captain's details.
  - `fullname` (object): An object containing the captain's full name.
    - `firstname` (string): The first name of the captain.
    - `lastname` (string): The last name of the captain.
  - `email` (string): The email address of the captain.
  - `vehicle` (object): An object containing the vehicle details.
    - `color` (string): The color of the vehicle.
    - `plate` (string): The plate number of the vehicle.
    - `capacity` (number): The capacity of the vehicle.
    - `vehicleType` (string): The type of the vehicle.
  - `_id` (string): The unique identifier of the captain.
  - `__v` (number): The version key.

### Example Request

```json
{
  "fullname": {
    "firstname": "Captain_first",
    "lastname": "Captain_last"
  },
  "email": "captain@test.com",
  "password": "captain_pass",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Response

- `201 Created`: Captain successfully registered.
- `400 Bad Request`: Invalid input data. The response will contain details about the validation errors.

### Example Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaSI6IjY3ZDA1NGJkYzRmZjIwMTIzZGY4NWFjNSIsImlhdCI6MTc0MTcwNjQyOX0.Jd26NFTe9i8gWt0-1VcJ35MB_HJlIRBl309C1bPkRmE",
  "captain": {
    "fullname": {
      "firstname": "Captain_first",
      "lastname": "Captain_last"
    },
    "email": "captain@test.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "_id": "67d054bdc4ff20123df85ac5",
    "__v": 0
  }
}
```

### Error Response

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    },
    {
      "msg": "Color must be at least 3 characters long",
      "param": "vehicle.color",
      "location": "body"
    },
    {
      "msg": "Plate must be at least 3 characters long",
      "param": "vehicle.plate",
      "location": "body"
    },
    {
      "msg": "Capacity must be at least 1",
      "param": "vehicle.capacity",
      "location": "body"
    },
    {
      "msg": "Invalid vehicle type",
      "param": "vehicle.vehicleType",
      "location": "body"
    }
  ]
}
```

## Captain Login

### /captains/login

### Description

This endpoint is used to log in an existing captain.

### Request Body

The request body must be a JSON object containing the following fields:

- `email` (string, required): The email address of the captain. Must be a valid email format.
- `password` (string, required): The password for the captain. Must be at least 6 characters long.

### Response Body

The response body will be a JSON object containing the following fields:

- `token` (string): The JWT token for the authenticated captain.
- `captain` (object): An object containing the captain's details.
  - `email` (string): The email address of the captain.
  - `_id` (string): The unique identifier of the captain.
  - `__v` (number): The version key.

### Example Request

```json
{
  "email": "captain@test.com",
  "password": "captain_pass"
}
```

### Response

- `200 OK`: Captain successfully logged in.
- `400 Bad Request`: Invalid input data. The response will contain details about the validation errors.
- `401 Unauthorized`: Invalid email or password.

### Example Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaSI6IjY3ZDA1NGJkYzRmZjIwMTIzZGY4NWFjNSIsImlhdCI6MTc0MTcwNjQyOX0.Jd26NFTe9i8gWt0-1VcJ35MB_HJlIRBl309C1bPkRmE",
  "captain": {
    "email": "captain@test.com",
    "_id": "67d054bdc4ff20123df85ac5",
    "__v": 0
  }
}
```

### Error Response

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

## Captain Profile

### /captains/profile

### Description

This endpoint is used to retrieve the profile of the currently logged-in captain. It requires a valid JWT token in the `Authorization` header or in the cookies.

### Request Headers

- `Authorization`: `Bearer <token>`, where `<token>` is the JWT token obtained after login.

### Request Cookies

- `token`: The JWT token obtained after login.

### Response Body

The response body will be a JSON object containing the captain's profile details.

- `fullname` (object): An object containing the captain's full name.
  - `firstname` (string): The first name of the captain.
  - `lastname` (string): The last name of the captain.
- `email` (string): The email address of the captain.
- `_id` (string): The unique identifier of the captain.
- `__v` (number): The version key.

### Example Response

```json
{
  "fullname": {
    "firstname": "Captain_first",
    "lastname": "Captain_last"
  },
  "email": "captain@test.com",
  "_id": "67d054bdc4ff20123df85ac5",
  "__v": 0
}
```

### Error Responses

- `401 Unauthorized`: If the JWT token is missing, invalid, or expired.

## Captain Logout

### /captains/logout

### Description

This endpoint is used to log out the currently logged-in captain. It requires a valid JWT token in the `Authorization` header or in the cookies. It also clears the `token` cookie.

### Request Headers

- `Authorization`: `Bearer <token>`, where `<token>` is the JWT token obtained after login.

### Request Cookies

- `token`: The JWT token obtained after login.

### Response Body

The response body will be a JSON object containing a success message.

### Example Response

```json
{
  "message": "Logged out successfully"
}
```

### Error Responses

- `401 Unauthorized`: If the JWT token is missing, invalid, or expired.
