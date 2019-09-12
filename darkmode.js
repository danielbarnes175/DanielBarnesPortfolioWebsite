let isDark;
const black = "#1A1A1A";
const white = "#FFFFFF";
const grayWhite = "#E6E6E6";
const grayBlack = "#000000";

function init() {
	if (sessionStorage.getItem('isDark') == null) {
		isDark = false;
	} else {
		isDark = JSON.parse(sessionStorage.getItem('isDark'));
	}
	setColorOnLoad();
};

function toggleDarkMode() {
	if (isDark) {
		document.body.style.background = white;
		document.body.style.color = black;
		document.getElementById("iNeedThisToChangeTheHeaderWithJavascript").style.background = grayWhite;
		document.getElementById("iNeedThisToChangeTheFooterWithJavascript").style.background = grayWhite;
		isDark = false;
	} else {
		document.body.style.background = black;
		document.body.style.color = white;
		document.getElementById("iNeedThisToChangeTheHeaderWithJavascript").style.background = grayBlack;
		document.getElementById("iNeedThisToChangeTheFooterWithJavascript").style.background = grayBlack;
		isDark = true;
	}
	sessionStorage.setItem('isDark', isDark);
};

function setColorOnLoad() {
	if (!isDark) {
		document.body.style.background = white;
		document.body.style.color = black;
		document.getElementById("iNeedThisToChangeTheHeaderWithJavascript").style.background = grayWhite;
		document.getElementById("iNeedThisToChangeTheFooterWithJavascript").style.background = grayWhite;
	} else {
		document.body.style.background = black;
		document.body.style.color = white;
		document.getElementById("iNeedThisToChangeTheHeaderWithJavascript").style.background = grayBlack;
		document.getElementById("iNeedThisToChangeTheFooterWithJavascript").style.background = grayBlack;
	}
}