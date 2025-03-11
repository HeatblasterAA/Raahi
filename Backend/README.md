# User Registration Endpoint

## POST /users/register

### Description

This endpoint is used to register a new user.

### Request Body

The request body must be a JSON object containing the following fields:

- `email` (string, required): The email address of the user. Must be a valid email format.
- `fullname` (object, required): An object containing the user's full name.
  - `firstname` (string, required): The first name of the user. Must be at least 3 characters long.
  - `lastname` (string, optional): The last name of the user. Must be at least 3 characters long if provided.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

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
