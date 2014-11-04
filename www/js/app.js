var resultDiv;

document.addEventListener("deviceready", init, false);
function init() {
	document.querySelector("#startScan").addEventListener("touchend", startScan, false);
	resultDiv = document.querySelector("#results");
	lookup("0060410001295");
}

function startScan() {

    cordova.plugins.barcodeScanner.scan(
		function (result) {
		    var s = "Result: " + result.text + "<br/>" +
			"Format: " + result.format + "<br/>" +
			"Cancelled: " + result.cancelled;
		    resultDiv.innerHTML = s;
		},
		function (error) {
		    alert("Scanning failed: " + error);
		}
	);
}
function lookup(upc) {
    jQuery.ajax({
        url: "http://api.upcdatabase.org/json/a076fe196e7054a3da2a2d8ac2685187/" + upc}).done(function (result) { alert("I was here." + result.itemname); });
}
