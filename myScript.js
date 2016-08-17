var newTweet = "Pew Study finds race conversations noticeably absent from white people's timelines http://bit.ly/2b18nFy";

var tweets = document.getElementsByClassName("tweet-text");
var firstTweet = tweets[0];

firstTweet.textContent = newTweet;

console.log(firstTweet.textContent);
