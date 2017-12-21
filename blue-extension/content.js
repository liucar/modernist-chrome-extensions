// <--- BLUE --->
Array.prototype.slice.call(document.querySelectorAll('img, a')).map(function(el){
	el.src = 'http://www.pd4pic.com/images/blue-square-color-block-background-pure-unicode.png';
});

Array.prototype.slice.call(document.querySelectorAll('div, a, figure, section, i, body, background, ol, script, article, figcaption,p,span, body, h1, h2, h3, h4, h5, h6, a, video, src')).map(function(el){
	el.style.color="blue";
});

