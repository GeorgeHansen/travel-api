define({ "api": [
  {
    "type": "get",
    "url": "/bookings/",
    "title": "Get all Bookings",
    "name": "GetAllBookings",
    "group": "Bookings",
    "description": "<p>Is used to get all the bookings currently in the database in JSON format. Just quickly threw something up there to have it. Dates are a little weird atm. You can leave them blank for the current date</p> ",
    "version": "0.2.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>ID</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the booking.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the person doing the booking.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>email address for person doing the booking.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "fromDate.",
            "description": "<p>Date booking starts from</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Date</p> ",
            "optional": false,
            "field": "toDate",
            "description": "<p>Date booking ends.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n[\n  {\n\n\n \"_id\": \"565d82e58eaa68c014dc550e\",\n \"username\": \"Test\",\n \"email\": \"test@test.com\",\n \"toDate\": \"2015-12-01T11:22:41.239Z\",\n \"fromDate\": \"2015-12-01T11:22:41.239Z\"\n\n  }\n]",
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
    "filename": "./routes/bookings.js",
    "groupTitle": "Bookings"
  },
  {
    "type": "post",
    "url": "/bookings/",
    "title": "Create Booking",
    "name": "createBooking",
    "group": "Bookings",
    "description": "<p>Is used to create a new booking. Dates are optional. If nothing is entered current date will be used.</p> ",
    "version": "0.2.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "username",
            "description": "<p>Mandatory userName for booking</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>Mandatory userEmail for booking</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Date</p> ",
            "optional": true,
            "field": "fromDate",
            "description": "<p>Optional starting date for booking</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "toDate",
            "description": "<p>Optional  ending date for booking</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Post-Example:",
          "content": "[\n  {\n\n\n \"_id\": \"565d82e58eaa68c014dc550e\",\n \"username\": \"Test\",\n \"email\": \"test@test.com\",\n \"toDate\": \"2015-12-01T11:22:41.239Z\",\n \"fromDate\": \"2015-12-01T11:22:41.239Z\"\n\n  }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/bookings.js",
    "groupTitle": "Bookings"
  },
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
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>ID</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the track.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sport",
            "description": "<p>The sport for this track.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "trackName",
            "description": "<p>Name of the Track.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "trackType",
            "description": "<p>The type of track, it's terrain.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "region",
            "description": "<p>Region the track is located in.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "trackRating",
            "description": "<p>Rating for this track.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "km",
            "description": "<p>Distance in kms for this track</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 202 Created \nL",
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
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "404",
            "description": "<p>Country Not found</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"message\" : \"Internal Server Error\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Country not found\n{\n    \"message\" : \"Country not found\"\n}",
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
    "description": "<p>Is used to get all the countries currently listed in the database in JSON format. Tracks are no longer stored in countries. Instead you can find a reference to the country it belongs to in /tracks Donkey's have been removed. Description and Imagelocation added. You can store multiple Languages per country.</p> ",
    "version": "0.2.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>ID</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the country.</p> "
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
            "description": "<p>Size of the Country in km2.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "population",
            "description": "<p>Number of people living in the country.</p> "
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
            "type": "<p>String</p> ",
            "optional": false,
            "field": "Location",
            "description": "<p>of the countries flag on the server.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String[]</p> ",
            "optional": false,
            "field": "languages",
            "description": "<p>Languages they speak in the Country.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n[\n  {\n\n  \"_id\": \"5628d0e8e4b0e09ab41e256c\",\n \"name\": \"Denmark\",\n \"size\": ​42915,\n  \"population\": ​5678348,\n \"description\": \"This is Denmark. The flag is pretty nifty. The weather a bit drifty. but give the people a fifty and they'll look at you shifty. Test \",\n  \"imageLocation\": \"http://travel-project.azurewebsites.net/img/countries/denmark-flag.jpg\",\n  \"languages\": \n\n  [\n      \"Danish\"\n  ]\n\n  }\n]",
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
    "version": "0.2.0",
    "description": "<p>by supplying a countries ID you will get all information available to said country. Currently that is, name, population, size a description, languages and an image path for that country</p> ",
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
            "description": "<p>Size of the Country in km2</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "population",
            "description": "<p>Number of people living in the country</p> "
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
            "type": "<p>String</p> ",
            "optional": false,
            "field": "Location",
            "description": "<p>of the countries flag on the server.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String[]</p> ",
            "optional": false,
            "field": "languages",
            "description": "<p>Languages they speak in the Country.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n[\n  {\n\n  \"_id\": \"5628d0e8e4b0e09ab41e256c\",\n  \"name\": \"Denmark\",\n  \"size\": ​42915,\n  \"population\": ​5678348,\n  \"description\": \"This is Denmark. The flag is pretty nifty. The weather a bit drifty. but give the people a fifty and they'll look at you shifty. Test \",\n  \"imageLocation\": \"http://travel-project.azurewebsites.net/img/countries/denmark-flag.jpg\",\n  \"languages\": \n\n  [\n      \"Danish\"\n  ]\n\n  }\n]",
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
    "type": "get",
    "url": "countries/:countryId/tracks",
    "title": "Get all tracks per country",
    "name": "GetCountryTracks",
    "group": "Countries",
    "version": "0.2.0",
    "description": "<p>Gets all the Tracks from the specified country</p> ",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>ID</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the track</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sport",
            "description": "<p>Name of the sport for the track.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "trackName",
            "description": "<p>Name of the track.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "trackType",
            "description": "<p>The type of track/terrain.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "region",
            "description": "<p>Region the track is in in the country.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "trackRating",
            "description": "<p>Rating for a given track.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "km",
            "description": "<p>Distance of the track in km.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "countryId",
            "description": "<p>ID of the country this track belongs to.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n[\n  \"_id\": \"56431d40e4b0ecb0579e31df\",\n \"sport\": \"Biking\",\n \"trackName\": \"Somewhere\",\n \"trackType\": \"City\",\n \"region\": \"Testing\",\n \"trackRating\": ​5,\n \"km\": ​201,\n \"countryId\": \"5628d0e8e4b0e09ab41e256c\"\n]",
          "type": "json"
        }
      ]
    },
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
    "error": {
      "fields": {
        "Error 5xx": [
          {
            "group": "Error 5xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal Server Error</p> "
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "404",
            "description": "<p>Country Not found</p> "
          }
        ]
      }
    },
    "filename": "./routes/countries.js",
    "groupTitle": "Countries"
  },
  {
    "type": "get",
    "url": "countries/:countryId/:sport/tracks",
    "title": "Countries tracks for a sport",
    "name": "GetCountryTracksForSport",
    "group": "Countries",
    "version": "0.2.0",
    "description": "<p>Gets all the Tracks from the specified country from the specified sport</p> ",
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
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>ID</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the track</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sport",
            "description": "<p>Name of the sport for the track.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "trackName",
            "description": "<p>Name of the track.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "trackType",
            "description": "<p>The type of track/terrain.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "region",
            "description": "<p>Region the track is in in the country.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "trackRating",
            "description": "<p>Rating for a given track.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "km",
            "description": "<p>Distance of the track in km.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "countryId",
            "description": "<p>ID of the country this track belongs to.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n[\n  \"_id\": \"56431d40e4b0ecb0579e31df\",\n \"sport\": \"Biking\",\n \"trackName\": \"Somewhere\",\n \"trackType\": \"City\",\n \"region\": \"Testing\",\n \"trackRating\": ​5,\n \"km\": ​201,\n \"countryId\": \"5628d0e8e4b0e09ab41e256c\"\n]",
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
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "404",
            "description": "<p>Country Not found</p> "
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
    "version": "0.2.0",
    "description": "<p>Can update a specific country by supplying it's ID. In the method body include the fields you want updated. Only supplying the field you want updated will not delete the other fields. ImageLocation still doesn't work</p> ",
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
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "404",
            "description": "<p>Country Not found</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"message\" : \"Internal Server Error\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Country not found\n{\n    \"message\" : \"Country not found\"\n}",
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
    "description": "<p>Is used to create a new country. Image location is currently not saved to the db.</p> ",
    "version": "0.2.0",
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
            "optional": true,
            "field": "description",
            "description": "<p>Optional  description of country</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String[]</p> ",
            "optional": false,
            "field": "languages",
            "description": "<p>Mandatory languages spoken in country</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": true,
            "field": "imageLocation",
            "description": "<p>Optional path to countries flag on server</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Post-Example:",
          "content": "{\n   \"name\" : USA,\n   \"size\" : 9857306,\n   \"population\" : 322014853,\n   \"imageLocation\" : http://travel-project.azurewebsites.net/img/countries/usa-flag.jpg\n   \"description\" : This is a pretty cool country pretty far away from quite a few things. Rumoured to have dragons.,\n   \"languages\" : [English, Spanish],\n }",
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
          "content": "HTTP/1.1 201 Created \nLocation : /countries/<ObjectId>\n{\n  \"message\": \"country :countryName created\"\n}",
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
    "url": "/tracks/",
    "title": "Get all Tracks",
    "name": "GetAlltracks",
    "group": "Tracks",
    "description": "<p>Is used to get all the tracks currently listed in the database in JSON format. Tracks contain a reference to the country they belong to. Not all tracks have been added to countries.</p> ",
    "version": "0.1.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>ID</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the track</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sport",
            "description": "<p>Name of the sport for the track.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "trackName",
            "description": "<p>Name of the track.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "trackType",
            "description": "<p>The type of track/terrain.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "region",
            "description": "<p>Region the track is in in the country.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "trackRating",
            "description": "<p>Rating for a given track.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "km",
            "description": "<p>Distance of the track in km.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "countryId",
            "description": "<p>ID of the country this track belongs to.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n[\n  \"_id\": \"56431d40e4b0ecb0579e31df\",\n \"sport\": \"Biking\",\n \"trackName\": \"Somewhere\",\n \"trackType\": \"City\",\n \"region\": \"Testing\",\n \"trackRating\": ​5,\n \"km\": ​201,\n \"countryId\": \"5628d0e8e4b0e09ab41e256c\"\n]",
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
    "filename": "./routes/tracks.js",
    "groupTitle": "Tracks"
  },
  {
    "type": "get",
    "url": "/tracks/:id",
    "title": "Get Track",
    "name": "GetTrack",
    "group": "Tracks",
    "version": "0.2.0",
    "description": "<p>by supplying a tracks ID you will get all information available to said track.</p> ",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>Tracks unique ID.</p> "
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
            "description": "<p>ID of the track</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "sport",
            "description": "<p>Name of the sport for the track.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "trackName",
            "description": "<p>Name of the track.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "trackType",
            "description": "<p>The type of track/terrain.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "region",
            "description": "<p>Region the track is in in the country.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "trackRating",
            "description": "<p>Rating for a given track.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "km",
            "description": "<p>Distance of the track in km.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>ObjectId</p> ",
            "optional": false,
            "field": "countryId",
            "description": "<p>ID of the country this track belongs to.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n[\n  \"_id\": \"56431d40e4b0ecb0579e31df\",\n \"sport\": \"Biking\",\n \"trackName\": \"Somewhere\",\n \"trackType\": \"City\",\n \"region\": \"Testing\",\n \"trackRating\": ​5,\n \"km\": ​201,\n \"countryId\": \"5628d0e8e4b0e09ab41e256c\"\n]",
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
            "description": "<p>Track Not Found</p> "
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
    "filename": "./routes/tracks.js",
    "groupTitle": "Tracks"
  }
] });