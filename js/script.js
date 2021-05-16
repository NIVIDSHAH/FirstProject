/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/
let quotes = [];

quotes = [
  {
    quote:
      "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    source: "Patrick McKenzie",
    citation: "Twitter",
    year: 2016,
  },
  {
    quote: "Waste your time wisely!",
    source: "Abdul kalam",
    citation: "FaceBook",
    year: 1998,
  },
  {
    quote: "Always be absolutely involved in what you do!",
    source: "Afrojack",
    citation: "Instagram",
    year: "",
  },
  {
    quote: "Do what you love, be good at it!",
    source: "Douglas College",
    citation: "",
    year: 2019,
  },
  {
    quote: "Dream BIG, start SMALL!!",
    source: "Elon Musk",
    citation: "",
    year: 2019,
  },
  {
    quote: "Sun rises in the North and it always stays there!!",
    source: "Nivid Shah",
    citation: "",
    year: 2019,
  },
  {
    quote: "West is right next to East",
    source: "Nobody",
    citation: "",
    year: "",
  },
];

/***
 * `getRandomQuote` function
 ***/
let randomQuote;
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  console.log(quotes[randomNumber].quote);
  let x = document.getElementsByClassName("quote");
  for (let i = 0; i < x.length; i++) {
    x[i].innerText = quotes[randomNumber].quote;
    if (
      quotes[randomNumber].citation != "" &&
      quotes[randomNumber].year != ""
    ) {
      document.getElementsByClassName("source")[i].innerText =
        quotes[randomNumber].source +
        "," +
        quotes[randomNumber].citation +
        "," +
        quotes[randomNumber].year;
    } else if (
      quotes[randomNumber].citation != "" &&
      quotes[randomNumber].year == ""
    ) {
      document.getElementsByClassName("source")[i].innerText =
        quotes[randomNumber].source + "," + quotes[randomNumber].citation;
    } else if (
      quotes[randomNumber].citation == "" &&
      quotes[randomNumber].year != ""
    ) {
      document.getElementsByClassName("source")[i].innerText =
        quotes[randomNumber].source + "," + quotes[randomNumber].year;
    } else {
      document.getElementsByClassName("source")[i].innerText =
        quotes[randomNumber].source;
    }
  }
}

/***
 * `printQuote` function
 ***/
function printQuote() {
  getRandomQuote();
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
