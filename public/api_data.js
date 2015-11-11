define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p> "
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./public/main.js",
    "group": "C__Users_Nicholas_Desktop_Node_Node_Angular_Travel_public_main_js",
    "groupTitle": "C__Users_Nicholas_Desktop_Node_Node_Angular_Travel_public_main_js",
    "name": ""
  },
  {
    "type": "delete",
    "url": "countries/:id",
    "title": "Delete Country",
    "name": "DeleteCountry",
    "group": "Countries",
    "version": "0.0.2",
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
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 202 Created \nLocation : country/<ObjectId>\n{\n  \"message\": \"Country <countryName> has been removed\"\n}",
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
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"message\" : \"Internal Server Error\"\n}",
          "type": "json"
        }
      ]
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
    "description": "<p>Is used to get all the countries currently listed in the database in JSON format. Tracks are stored in the DB as a reference but the tables are joined and data displayed as part of the country. Donkey's have been removed. Description and Tracks added. You can now store multiple Languages per country.</p> ",
    "version": "0.1.0",
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
            "type": "<p>String[]</p> ",
            "optional": false,
            "field": "languages",
            "description": "<p>Languages they speak in the Country.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "description",
            "description": "<p>Short Description of the Country.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "tracks",
            "description": "<p>contains the track objects related to this country.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n[\n  {\n\n     \"_id\": \"5628d0e8e4b0e09ab41e256c\",\n     \"name\": \"Denmark\",\n     \"size\": ​3,\n     \"population\": ​90,\n      \"description\": \"This is Denmark. The flag is pretty nifty. The weather a bit drifty. but give the people a fifty and they'll look at you shifty.\",\n     \"languages\": [\"Danish\", \"Swedish\"],\n     \"tracks\" : [{\n         \"_id\": \"56436159e4b0ecb0579e3913\",\n         \"sport\": \"Biking\",\n         \"trackName\": \"fynskoven\",\n         \"trackType\": \"Forest\",\n         \"region\": \"Fyn\",\n         \"trackRating\": ​8,\n         \"km\": ​36\n\n}]",
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
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"message\" : \"Internal Server Error\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/countries.js",
    "groupTitle": "Countries"
  },
  {
    "type": "get",
    "url": "/countries/:id",
    "title": "Get Country",
    "name": "GetCountry",
    "group": "Countries",
    "version": "0.1.0",
    "description": "<p>by supplying a countries ID you will get all information available to said country. update includes adding an array of languages. A description for the country and a list of tracks available for that country</p> ",
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
            "type": "<p>String[]</p> ",
            "optional": false,
            "field": "language",
            "description": "<p>Array of Languages they speak in that Country.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "donkey",
            "description": "<p>Random name of a donkey.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "tracks",
            "description": "<p>contains the track objects related to this country.</p> "
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
          "content": "    HTTP/1.1 200 OK\n[\n  {\n\n     \"_id\": \"5628d0e8e4b0e09ab41e256c\",\n     \"name\": \"Denmark\",\n     \"size\": ​3,\n     \"population\": ​90,\n      \"description\": \"This is Denmark. The flag is pretty nifty. The weather a bit drifty. but give the people a fifty and they'll look at you shifty.\",\n     \"languages\": [\"Danish\", \"Swedish\"],\n     \"tracks\" : [{\n         \"_id\": \"56436159e4b0ecb0579e3913\",\n         \"sport\": \"Biking\",\n         \"trackName\": \"fynskoven\",\n         \"trackType\": \"Forest\",\n         \"region\": \"Fyn\",\n         \"trackRating\": ​8,\n         \"km\": ​36\n\n}]",
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
    "version": "0.0.2",
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
          "content": "HTTP/1.1 201 Created \nLocation : country/<ObjectId>\n{\n  \"message\": \"<countryName> has been edited\"\n}",
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
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"message\" : \"Internal Server Error\"\n}",
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
    "description": "<p>Is used to create a new country. Fields other than those specified can be entered into the body but will not be saved to the database.</p> ",
    "version": "0.0.2",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Mandatory country name</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "size",
            "description": "<p>Mandatory country size</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "population",
            "description": "<p>Mandatory country population size</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "language",
            "description": "<p>Mandatory country main language</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "donkey",
            "description": "<p>Optional  country donkey</p> "
          }
        ]
      },
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
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"message\" : \"Internal Server Error\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/countries.js",
    "groupTitle": "Countries"
  }
] });