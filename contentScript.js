function injectJs(srcFile) {
	var scr = document.createElement('script');
	scr.src = srcFile;
	document.getElementsByTagName('head')[0].appendChild(scr);
}

injectJs(chrome.extension.getURL('js/jquery.js'));
injectJs(chrome.extension.getURL('js/rtmsfdt.js'));