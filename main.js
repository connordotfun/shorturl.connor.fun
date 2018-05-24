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

    outputDiv.innerHTML = "<a id=\"urllink\" href=\"" + shortPath + short + "\">" + shortPath + short +"</a> <br> COPIED URL TO CLIPBOARD THANKYOU";
    copyToClipboard(shortPath + short);
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

function copyToClipboard(str) {
    var el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }

window.onload = function() {
    shortenedUrl = getParameterByName(queryParam, window.location);
    if (shortenedUrl != null && shortenedUrl != '') {
        console.log(shortenedUrl);
        console.log(atob(shortenedUrl));
        window.location = 'http://' + atob(shortenedUrl);
    }
}

urlbox.addEventListener("keyup", function(event) {
    if(event.key !== "Enter") return; // Use `.key` instead.
    shortenButton.click(); // Things you want to do.
    event.preventDefault(); // No need to `return false;`.
});
