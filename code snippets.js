
// ===================== PUT ============================================================
//One way to update an entry without just tacking everything from req.body and seeing what sticks. 

/* Country.findById(req.params.id, function(err, country){

       
        if(req.body.name != null)
        {
            country.name = req.body.name;
        }
        if(req.body.size != null)
        {
            country.size = req.body.size;
        }
        if(req.body.population != null)
        {
            country.population = req.body.population;
        }
        if(req.body.language != null)
        {
            country.language = req.body.language;
        }
        if(req.body.donkey != null)
        {
            country.donkey = req.body.donkey;
        }

       Country.update({_id: req.params.id}, country , function(err)
       {
            console.log(err);
       });
       res.status(201);
       return res.json({"message" : " country " + country.name + " has been edited"})
   });
   */


   //============================= GET ONE COUNTRY ============================
     // Country.findById(req.params.id, function(err, country)
    // {
    //     if(!err)
    //     {
    //         console.log("well done, country found" + country.name);
    //         res.status(304);
    //         return res.json(country);
    //     }
    //     else{
    //         console.log(err);
    //         res.status(404);
    //         return res.json({"message " : "Country not found"})
    //     }
    // });

  //============================= OLD LIST OF COUNTRIES ========================
    // Country.find(function(err, countries) {
    //     if (!err) {
    //         return res.json(countries);
    //     } else {
    //         console.log(err);
    //         res.status(500);
    //         return res.json({"message" : "Internal Server Error"});
    //     }
    // });
})


/*     
        //  Country.findOne({_id : req.params.id}, 'tracks', function(err,country)
        // {
            
        //     if(err){
        //         console.log(err);
        //         res.status(404);
        //         return res.json({"message " : "Country not found"})
        //     }
           
        // })
    //Currently the tracks in the country is filled with objectId references. The populate method
    //will perform an application level join and fill the array with track objects. 
    //Essentially it joins the collections and selects everything from the two tables. 
        // .populate('tracks')
        // .exec(function(err, track)
        // {
        //     if(err){console.log(err);}
        //     else{
        //         console.log("country selected " + track.name);
        //         //this is somewhat misleading. It will return the country + the data from the tracks. 
        //         return res.json(track); 
        //     }

        // });
        */