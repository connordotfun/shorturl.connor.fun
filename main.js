var urlbox = document.getElementById("urlbox");
var shortenButton = document.getElementById("shorten_button");
var outputDiv = document.getElementById("output_div");

var queryParam = "theshorturliguess";
var baseUrl = location.protocol + '//' + location.host;
var shortPath = baseUrl + "?" + queryParam + "=";

function shorten_url() {
    console.log("shortening a url");

    var toShorten = urlbox.value;
    console.log(toShorten);

    var short = btoa(toShorten.replace("http://", "").replace("https://", ""));
    console.log(short);

    outputDiv.innerHTML = "<a href=\"" + shortPath + short + "\">" + shortPath + short +"</a>";
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

window.onload = function() {
    shortenedUrl = getParameterByName(queryParam, window.location);
    if (shortenedUrl != null && shortenedUrl != '') {
        console.log(shortenedUrl);
        console.log(atob(shortenedUrl));
        window.location = 'http://' + atob(shortenedUrl);
    }
}