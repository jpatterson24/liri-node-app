
console.log("=================================   Liri Options   ===================================\n"+
	        " 1: Enter node liri.js my-tweets followed by a Twitter name to display latest tweets. \n"+
	        " 2: Enter node liri.js spotify-this-song to display a song of your choice.            \n"+
	        " 3: Enter node liri.js movie-this to display a movie of your choice.                  \n"+
	        " 4: Enter node liri.js do-what-it-says, to do just that.                              \n"+
	        "======================================================================================\n");

	//input captures the user input
	var input = process.argv[2];

	//input analyed for Liri option type
	if (process.argv[2] === "my-tweets") {tweet();}	
		else if (process.argv[2] === "spotify-this-song") {song();}
     	else if (process.argv[2] === "movie-this") {movie();}
     	else if (process.argv[2] === "do-what-it-says") {doIt();};
     	
     var space = "                              ";

    //twitter request to the twitter API
	function tweet(){
		var fs = require("fs");
		var Twitter = require('twitter');
		var keys = require("./keys.js");
		var client = new Twitter(keys);
	//input for twitter name
	var name = process.argv[3];

	//twitter parameters
    var params = {screen_name: name, count:21};
  
  	//twitter API call
      client.get('statuses/user_timeline', params, function(error, tweets, response) {
     if (!error) { 
   	 //loop through tweets starting at index 1	 	
     for (var i=1; i<tweets.length; i++){	
    //console.log(JSON.stringify(tweets[i].created_at, null, 2));
    console.log("=====================================TWEET=============================================================================================");
    console.log("Tweet#: "+i+" "+tweets[i].text +"\n");
    var time = tweets[i].created_at;
    var timeArr = time.split(' ');
    console.log("=====================================POSTED=============================================================================================");
    console.log("Time Posted: " + timeArr.slice(0,4).join(', '));
    console.log("\n");
				}
			}
		});
	};


	function song(name){
		var spotify = require('spotify');
		var Spotify = require('node-spotify-api');
		var search = process.argv[3];+ " " + process.argv[4];
		

	  // if (search === "undefined") {
	  // 	search = "The Sign" by Ace of Base"";
	  // 	}
	 //console.log(input);
		var spotify = new Spotify({
	   	  			id: '55289cfa8264426ab11c37b6111a02a9',
		  			secret: 'd35af337616849838e21f905ae261f1a'
				});
					//console.log(spotify);
	    spotify.search({ type: 'track', query: search, limit:20}, function(err, data){
			//search: function({ type: 'artist OR album OR track', query: 'My search query', limit: 20 }, callback);
	 			 if (err) {
	   				 return console.log('Error occurred: ' + err);
	  				}
	  				var track = data.tracks.items;
	  				for (var i=0; i< track.length; i++){
	  			   console.log("===========================================================================================");
	  			   console.log(i);
	  			   console.log("Artist: " + track[i].artists[0].name);
	  			   console.log("The Song's Name: " + track[i].name);
				   console.log("Album Type: " + track[i].album.album_type);
				   console.log(track[i].external_urls);
				   console.log("Album Name: " + track[i].album.name)+"\n";
				   console.log("==========================================================================================="+"\n");
				 	}
				});

			};

		function movie(){
			var request = require("request");
		    // Grab or assemble the movie name and store it in a variable called "movieName"
		    var movieName = function(movie){
		    	if(movieName ==='undefined'){
		    		movieName = "Mr. Nobody";
		    	}
		    }
			var movieName = (process.argv[3]+" "+process.argv[4]);
			movieArr = [];
			movieArr.push(movieName);
			console.log(movieArr);
		 	
			

		    // Then run a request to the OMDB API with the movie specified
			var queryUrl = "http://www.omdbapi.com/?t=" + movieArr + "&y=&plot=short&apikey=trilogy";
			
		    // This line is just to help us debug against the actual URL.
			//console.log(queryUrl);
			request(queryUrl, function(error, response, body) {


		       // Then create a request to the queryUrl
		      //request("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";)
					

		      // If the request is successful
		 		if(!error && response.statusCode === 200) {
		 			  console.log("Title: " + JSON.parse(body).Title +"\n");
					  console.log("Year: "  + JSON.parse(body).Year +"\n");
					  console.log("Rating: " + JSON.parse(body).Rated +"\n");
					  console.log("IMDB Rating: " + JSON.parse(body).imdbRating +"\n");
					  console.log("Country: " + JSON.parse(body).Country +"\n");
					  console.log("Language: " + JSON.parse(body).Language +"\n");
					  console.log("Plot : " + JSON.parse(body).Plot +"\n");
					  console.log("Actors : " + JSON.parse(body).Actors +"\n");
					  //console.log("Rotten Tomatoes URL: " + JSON.parse.(body).tomatoURL);
						}
					});
					  console.log("YOUR REQUESTED MOVIE!!!!!");
					
				}
			

				function doIt(){

						var fs = require("fs");

							fs.readFile("random.txt", "utf8", function(error, data) {
								if (error) {
								// console.log(error);
								}
								
								var dataArr = data.split(",");
								console.log(dataArr[1]);
								if (dataArr.length === 2) {
									song(dataArr[2]);
								} else if (dataArr === 1) {
									//console.log(dataArr[0]);
								}
							
							});
						

					}


