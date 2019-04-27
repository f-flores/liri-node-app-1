require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios");

// Grab the movieName which will always be the third node argument.
// var movieName = process.argv[2];

function movieThis(movieName) {

if (!movieName)
{
  movieName = "Mr. Nobody"
};
// Then run a request with axios to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

axios.get(queryUrl).then(
  function(response) {
    console.log("Release Year: " + response.data.Year);
    console.log("Release Year: " + response.data.Year);
    console.log("Release Year: " + response.data.Year);
  }
);
}
//concert-this

//spotify-this-song
function spotifySong(){
  return true;
}
//movie-this

//do-what-it-says

console.log(process.argv);

var command = process.argv[2]
var value = process.argv[3]
switch(command){
  case "concert-this":
  concert();
  break;
  case "spotify-this-song":
  spotifySong();
  break;
  case "movie-this":
  movieThis(value);
  break;

}
