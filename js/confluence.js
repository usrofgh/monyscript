let currentURL = (window.location.href).slice(0, 24);
const confluenceURL = "https://info.ftband.net/"

if (currentURL === confluenceURL) {
	Mousetrap.bind("alt+a", function() {
		document.getElementsByClassName('confluence-btn')[0].click();
	});
}