// function redBall () {
//   let img = document.createElement("img");
//   img.src = source.getAttribute('assets/circle.png');
//   //setAttribute('src', 'assets.circle.png')
//   document.body.appendChild('img');
// }

chrome.tabs.onUpdated.addListener(function(changeInfo) {
  console.log(changeInfo)
    if (changeInfo.status === 'complete'){
      chrome.tabs.executeScript({
      file: 'insert.js' 
    });
  }
});

