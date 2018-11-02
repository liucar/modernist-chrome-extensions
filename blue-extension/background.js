//BLUE

var toggle = false;
chrome.browserAction.onClicked.addListener(function(tab) {
  toggle = !toggle;
  if(toggle){
    chrome.tabs.executeScript(tab.id, {file:"content.js"});
  }
  else{
    chrome.tabs.return;
  }
});
