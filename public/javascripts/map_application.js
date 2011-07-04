var cLat = 40.6897;
var cLng = -95.0446;
var startZoom = 3;
var description = "Golden Gate Bridge";

var map;

function init()
{
	map = new GMap2(document.getElementById("map"));
	var location = new GLatLng(cLat, cLng);
	map.addControl(new GSmallMapControl());
	map.setCenter(location, startZoom);

	//addMarker(cLat, cLng, description);
	addMarkers(markers);
}

window.onload = init;
window.onunload = GUnload;
