define({ "api": [
  {
    "type": "post",
    "url": "/login",
    "title": "Login",
    "name": "Login",
    "group": "Auth",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n   \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9\"\n   \"name\": \"Hodor\",\n   \"email\": \"hodor@hodor.com\"\n }",
          "type": "type"
        }
      ]
    },
    "filename": "src/app/auth/index.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/contact",
    "title": "Add contact",
    "name": "AddContact",
    "group": "Contacts",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Auth token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the contact.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone Number of the contact.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "company",
            "description": "<p>Company of the contact.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "street",
            "description": "<p>Street Name of the contact.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "city",
            "description": "<p>City of the contact.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "country",
            "description": "<p>Country of the contact.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n   \"id\": \"0a16b149-e1df-4d63-b30c-e7060b080v22\",\n   \"userId\": 423,\n   \"email\": \"queen@msn.com\",\n   \"phone\": \"+01985154726\",\n   \"company\": \"7 Kingdoms LLC\"\n   \"street\": \"123 Joffrey St.\"\n   \"city\": \"King's Landing\"\n   \"country\": \"Westeros\",\n   \"createdAt\": \"2017-10-04\"\n  }",
          "type": "type"
        }
      ]
    },
    "filename": "src/app/contact/index.js",
    "groupTitle": "Contacts"
  },
  {
    "type": "post",
    "url": "/api/user",
    "title": "Add user",
    "name": "AddUser",
    "group": "Users",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the user.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the user.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n   \"id\": 652,\n   \"email\": \"daenerys@dragonclub.com\",\n   \"name\": \"Daenerys\"\n   \"username\": \"danny_stormborn\"\n  }",
          "type": "type"
        }
      ]
    },
    "filename": "src/app/user/index.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/api/user/:id",
    "title": "Get user",
    "name": "GetUser",
    "group": "Users",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Auth token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Url params": [
          {
            "group": "Url params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The user ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 652,\n  \"email\": \"daenerys@dragonclub.com\",\n  \"name\": \"Daenerys\"\n  \"username\": \"mother_of_dragons14\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/user/index.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/api/user",
    "title": "Get users",
    "name": "GetUsers",
    "group": "Users",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Auth token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Query String params": [
          {
            "group": "Query String params",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Find users with given email</p>"
          },
          {
            "group": "Query String params",
            "type": "String",
            "optional": true,
            "field": "username",
            "description": "<p>Find users with given username</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [\n  {\n    \"id\": 652,\n    \"email\": \"daenerys@dragonclub.com\",\n    \"name\": \"Daenerys\"\n    \"username\": \"mother_of_dragons14\"\n  },\n  {\n    \"id\": 129,\n    \"email\": \"tyrion22@lannister.com\",\n    \"name\": \"Tyrion\"\n    \"username\": \"winelover\"\n  }\n ]",
          "type": "json"
        }
      ]
    },
    "filename": "src/app/user/index.js",
    "groupTitle": "Users"
  },
  {
    "type": "delete",
    "url": "/api/user/:id",
    "title": "Remove user",
    "name": "RemoveUser",
    "group": "Users",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Auth token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Url params": [
          {
            "group": "Url params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the user</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 OK\n{}",
          "type": "type"
        }
      ]
    },
    "filename": "src/app/user/index.js",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "/api/user",
    "title": "Update user",
    "name": "UpdateUser",
    "group": "Users",
    "version": "0.1.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Auth token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the user</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Name of the User.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "username",
            "description": "<p>Username of the User.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n   \"id\": 652,\n   \"email\": \"daenerys@dragonclub.com\",\n   \"name\": \"Danny\"\n   \"username\": \"danny_stormborn\"\n  }",
          "type": "type"
        }
      ]
    },
    "filename": "src/app/user/index.js",
    "groupTitle": "Users"
  }
] });
