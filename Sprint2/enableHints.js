function doTip(e) {
	var elem = e.toElement;
	if(elem.getAttribute('data-tip-on')  === 'false') {
		elem.setAttribute('data-tip-on', 'true');
		var rect = elem.getBoundingClientRect();          
		var tipId = Math.random().toString(36).substring(7);
		elem.setAttribute('data-tip-id', tipId);
		var tip = document.createElement("div");
		tip.setAttribute('id', tipId);
		tip.innerHTML = elem.getAttribute('data-tip');
		tip.style.top = rect.bottom+ 10 + 'px';
		tip.style.left = (rect.left-200) + 'px';
		tip.setAttribute('class','tip-box');
		document.body.appendChild(tip);
	} else {
		elem.setAttribute('data-tip-on', 'false');
		var tip = document.getElementById(elem.getAttribute('data-tip-id'));
		tip.parentNode.removeChild(tip);
	}
}
function enableTips() {
	var elems = document.getElementsByClassName('quick-tip');
	for(var i = 0; i < elems.length; i++) { 
		elems[i].addEventListener("click", doTip, false);
	}
}
window.onload = function() {
	enableTips();
}