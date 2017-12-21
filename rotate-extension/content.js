// <---  ROTATE --->
var toggle = false;
chrome.runtime.onMessage.addListener(function() {
  toggle = !toggle;
  Array.prototype.forEach.call(document.querySelectorAll('div,p,span,img,a,body'), function(el) {
    el.style.transform = 'rotate(' + (toggle?(Math.floor(Math.random() * 10) - 1):0) + 'deg)';
  });
});

