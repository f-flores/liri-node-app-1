require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios");

// Grab the movieName which will always be the third node argument.
// var movieName = process.argv[2];

function movieThis(movieName) {

  if (!movieName) {
    movieName = "Mr. Nobody"
  };
  // Then run a request with axios to the OMDB API with the movie specified
  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

  // This line is just to help us debug against the actual URL.
  // console.log(queryUrl);

  axios.get(queryUrl).then(
    function (response) {
      var movie = response.data;
      console.log("Title of movie: " + movie.Title);
      console.log("Year of movie: " + movie.Year);
      console.log("IMDB Rating: " + movie.Ratings[0].Value);
      console.log("Rotten Tomatoes Rating: " + movie.Ratings[1].Value);
      console.log("Country of movie: " + movie.Country);
      console.log("Language of movie: " + movie.Language);
      console.log("Plot of movie: " + movie.Plot);
      console.log("Actors of movie: " + movie.Actors);
    }
  );
}
//concert-this




function concertThis(bandName) {
  if (!bandName) {
    bandName = "Aerosmith"
  } else {
    bandName = process.argv.slice(3).join("+");
  }
  // Then run a request with axios to the bandName API with the band specified
  var bandsInTownURL = "https://rest.bandsintown.com/artists/" + band + "/events?app_id=codingbootcamp";
  app_id = "codingbootcamp";
  console.log(bandsInTownURL);

  var axios = require("axios");
  var moment = require("moment");

  var command = process.argv[2];
  var value = process.argv.slice(3);


  axios
    .get(bandsInTownURL)
    .then(function (response) {
      var concerts = response.data;
      for (concert of concerts) {
        console.log(concert.venue.name);
        console.log(concert.venue.city);
        console.log(moment(concert.datetime).format('MM/DD/YYYY'));
        console.log("=========================");
      }
      if (concerts.length === 0) {
        console.log("No upcoming " + band + " concerts. Check again soon");
      }
    })
    .catch(function (err) {
      console.log("Either band does not exist or no upcoming concerts for " + band + ". Try another one.");
    })
}

function doLiri() {
  switch (command) {
    case 'concert-this':
      var band;
      if (value.length > 0) {
        band = value.join("+");
        console.log(band);
      } else {
        band = "Aerosmith";
      }
      concertThis(band);
      break;
    default:
      console.log("...unexpected command. Valid commands are ...");
      break;
  }
}

doLiri();


// This line is just to help us debug against the actual URL.
// console.log(queryUrl);

axios.get(queryUrl).then(
  function (response) {
    var band = response.data;
    console.log("Title of Band: " + band.Title);
    console.log("Year of Band: " + band.Year);
    console.log("Band Rating: " + band.Ratings[0].Value);
    console.log("Rotten Tomatoes Rating: " + movie.Ratings[1].Value);
    console.log("Country of Band: " + band.Country);
    console.log("Language of Band: " + band.Language);
    console.log("Plot of Band: " + band.Plot);
    console.log("Actors of Band: " + band.Actors);
  }
);
console.log(bandName);

//spotify-this-song
function spotifySong(songTitle) {
  if (!songTitle) {
    songTitle = "Mr. Nobody"
  };
  // Then run a request with axios to the OMDB API with the movie specified
  var queryUrl = "http://www.omdbapi.com/?t=" + songTitle + "&y=&plot=short&apikey=trilogy";

  // This line is just to help us debug against the actual URL.
  // console.log(queryUrl);

  axios.get(queryUrl).then(
    function (response) {
      var song = response.data;
      console.log("Title of Song: " + song.Title);
      console.log("Year of Song: " + song.Year);
      console.log("Song Rating: " + song.Ratings[0].Value);
      console.log("Rotten Tomatoes Rating: " + song.Ratings[1].Value);
      console.log("Country of Song: " + song.Country);
      console.log("Language of Song: " + song.Language);
      console.log("Plot of Song: " + song.Plot);
      console.log("Actors of Song: " + song.Actors);
    }
  );
}

//movie-this

//do-what-it-says

console.log(process.argv);

var command = process.argv[2]
var value = process.argv[3]
switch (command) {
  case "concert-this":
    concertThis(value);
    break;
  case "spotify-this":
    spotifySong(value);
    break;
  case "movie-this":
    movieThis(value);
    break;

}
