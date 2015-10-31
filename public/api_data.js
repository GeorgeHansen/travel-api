define({ "api": [
  {
    "type": "delete",
    "url": "countries/:id",
    "title": "Delete Country",
    "name": "DeleteCountry",
    "group": "Countries",
    "version": "0.0.1",
    "description": "<p>Deletes the country with the ID specified</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Country unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 202": [
          {
            "group": "Success 202",
            "optional": false,
            "field": "202",
            "description": "<p>Accepted</p> "
          }
        ]
      }
    },
    "filename": "./routes/countries.js",
    "groupTitle": "Countries"
  },
  {
    "type": "get",
    "url": "/countries/",
    "title": "Get all Countries",
    "name": "GetAllCountries",
    "group": "Countries",
    "description": "<p>Is used to get all the countries currently listed in the database in JSON format</p> ",
    "version": "0.0.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>ID</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the country</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Country.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "size",
            "description": "<p>Size of the Country. Arbitrary.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "population",
            "description": "<p>Population size of the Country.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "language",
            "description": "<p>Language they speak in the Country.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "donkey",
            "description": "<p>Random name of a donkey.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n[\n  {\n\n     \"_id\": \"5628d0e8e4b0e09ab41e256c\",\n     \"name\": \"Denmark\",\n      \"size\": ​3,\n     \"population\": ​90,\n     \"language\": \"Danish\",\n     \"donkey\": \"æsel\"\n },\n {\n\n     \"_id\": \"5628d153e4b0e09ab41e25b6\",\n     \"name\": \"Belgium\",\n     \"size\": ​1,\n     \"population\": ​2,\n     \"language\": \"Belgiumish\",\n     \"donkey\": \"Grand Noir du Berry\" \n\n  }\n  \n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p> "
          }
        ]
      }
    },
    "filename": "./routes/countries.js",
    "groupTitle": "Countries"
  },
  {
    "type": "get",
    "url": "/api/countries/:id",
    "title": "Get Country",
    "name": "GetCountry",
    "group": "Countries",
    "version": "0.0.1",
    "description": "<p>by supplying a countries ID you will get all information available to said country. As there is no strucutre to the db you might get different info for different countries. That depends on what you put in.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Countries unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>ID</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the country</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Country.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "size",
            "description": "<p>Size of the Country. Arbitrary.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "population",
            "description": "<p>Population size of the Country.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "language",
            "description": "<p>Language they speak in the Country.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "donkey",
            "description": "<p>Random name of a donkey.</p> "
          }
        ],
        "Success 304": [
          {
            "group": "Success 304",
            "optional": false,
            "field": "304",
            "description": "<p>Not Modified</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n\n    \"_id\": \"5628d0e8e4b0e09ab41e256c\",\n    \"name\": \"Denmark\",\n     \"size\": ​3,\n    \"population\": ​90,\n    \"language\": \"Danish\",\n    \"donkey\": \"æsel\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response (304):",
          "content": "HTTP/1.1 304 Not Modified",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>Country Not Found</p> "
          }
        ],
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p> "
          }
        ]
      }
    },
    "filename": "./routes/countries.js",
    "groupTitle": "Countries"
  },
  {
    "type": "put",
    "url": "countries/:id",
    "title": "Update Country",
    "name": "UpdateCountry",
    "group": "Countries",
    "version": "0.0.1",
    "description": "<p>Can update a specific country by supplying it's ID. In the method body include the fields you want updated. Only supplying the field you want updated will not delete the other fields.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Country unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "optional": false,
            "field": "201",
            "description": "<p>Country Created</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created \nLocation : country/<ObjectId>\n{\n  \"message\": \"Country edited\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/countries.js",
    "groupTitle": "Countries"
  },
  {
    "type": "post",
    "url": "/countries/",
    "title": "Create Country",
    "name": "createCountry",
    "group": "Countries",
    "description": "<p>Is used to create a new country. You are not bound by the parameters described in the api. New fields can be created by including them in the method body. You can essentially just add any data you want and it'll be added to the database.</p> ",
    "version": "0.0.1",
    "parameter": {
      "examples": [
        {
          "title": "Post-Example:",
          "content": "{\n   \"name\" : <CountryName>,\n   \"size\" : <CountrySize>,\n   \"population\" : <CountryPopulation>,\n   \"language\" : <CountryLanguage>,\n   \"donkey\" : <CountryDonkey>,\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "optional": false,
            "field": "201",
            "description": "<p>Country Created</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created \nLocation : /countries/<ObjectId>\n{\n  \"message\": \"country added\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/countries.js",
    "groupTitle": "Countries"
  }
] });