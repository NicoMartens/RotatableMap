
// The watch id references the current `watchHeading`
var watchID = null;

// Wait for device API libraries to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
//
function onDeviceReady() {
	startWatch();
}

// Start watching the compass
//
function startWatch() {

	// Update compass every 1/4 seconds
	var options = { frequency: 250 };

	watchID = navigator.compass.watchHeading(onSuccess, onError, options);
}

// Stop watching the compass
//
function stopWatch() {
	if (watchID) {
		navigator.compass.clearWatch(watchID);
		watchID = null;
	}
}

// onSuccess: Get the current heading
//
function onSuccess(heading) {
	var element = document.getElementById('heading');
	element.innerHTML = 'Heading: ' + heading.magneticHeading;
	var deg = 360 - heading.magneticHeading;
	map.getView().rotate( (deg/360)*2*Math.PI );
}

// onError: Failed to get the heading
//
function onError(compassError) {
	alert('Compass error: ' + compassError.code);
}

