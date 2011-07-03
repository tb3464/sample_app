var map;
var centerLat = 40.6897;
var centerLng = -95.0446;
var startZoom = 3;
var description = 'center of map';

function addMarker(lat, lng, desc) {
	var marker = new GMarker(new GLatLng(lat, lng));
	
	GEvent.addListener(marker, 'click',
		function() {
			marker.openInfoWindowHtml(desc);
		} 
	);

	map.addOverlay(marker);
}


function init(){
		
	map = new GMap2(document.getElementById("map"));
	map.addControl(new GSmallMapControl());
	var location = new GLatLng(centerLat, centerLng);
	map.setCenter(location, startZoom);
	addMarker(centerLat, centerLng, description);
	for(id in markers) {
	    addMarker(markers[id].latitude, markers[id].longitude, markers[id].name);
	}
	//var debugDiv = document.getElementById("debug");
	//var tester = markers[0].name;
	//var msg = document.createTextNode(tester);
	//debugDiv.appendChild(msg);
}

window.onload = init;
window.onunload = Gunload;
