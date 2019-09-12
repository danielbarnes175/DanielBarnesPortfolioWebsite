let isDark;
const black = "#1A1A1A";
const white = "#FFFFFF";
const grayWhite = "#E6E6E6";
const grayBlack = "#000000";

function init() {
	if(typeof isDark === "undefined") {
		isDark = false;
	} else {
		setColorOnLoad();
	}
};
function toggleDarkMode() {
	if (isDark) {
		document.body.style.background = white;
		document.body.style.color = black;
		document.getElementById("test").style.background = grayWhite;
		isDark = false;
	} else {
		document.body.style.background = black;
		document.body.style.color = white;
		document.getElementById("test").style.background = grayBlack;
		isDark = true;
	}
};
function setColorOnLoad() {
	if (!isDark) {
		document.body.style.background = white;
		document.body.style.color = black;
		document.getElementById("test").style.background = grayWhite;
	} else {
		document.body.style.background = black;
		document.body.style.color = white;
		document.getElementById("test").style.background = grayBlack;
	}
}