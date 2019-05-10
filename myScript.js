var newTweet = "Pew Study finds race conversations noticeably absent from white people's timelines http://bit.ly/2b18nFy";

var tweets = document.getElementsByClassName("tweet-text");

for(var i = 0; i < 40; i++){
  if(tweetOnRace(tweets[i].textContent)){
    tweets[i].textContent = newTweet;
  }
}

function tweetOnRace(text) {
  if (text.indexOf('minority') === -1){
    return true;
  }
}

// arbitrary change
