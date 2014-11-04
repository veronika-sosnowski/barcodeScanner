var resultDiv;

document.addEventListener("deviceready", init, false);
function init() {
	document.querySelector("#startScan").addEventListener("touchend", startScan, false);
	resultDiv = document.querySelector("#results");
	//lookup("0060410001295");
}

function startScan() {

    cordova.plugins.barcodeScanner.scan(
		function (result) {
		    while (result.text.length < 13)
		        result.text = "0" + result.text;
		    lookup(result.text);
		    displayresult(result.text);
		},
		function (error) {
		    alert("Scanning failed: " + error);
		}
	);
}
function lookup(upc) {
    jQuery.ajax({
        url: "http://api.upcdatabase.org/json/a076fe196e7054a3da2a2d8ac2685187/" + upc
    }).done(function (result) { displayresult(result.itemname);});
}
function displayresult(result) {
    resultDiv = document.querySelector("#results");
    resultDiv.innerHTML = resultDiv.innerHTML + "<br>" + result;
}
//displayresult("Sun Chips");