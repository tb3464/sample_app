

function addMarker(lat, lng, description)
{
	var marker = new GMarker(new GLatLng(lat, lng));

	GEvent.addListener(marker, 'click',
	    function() {
	    	marker.openInfoWindowHtml(description);
	    }
	);

	map.addOverlay(marker);
}

function addMarkers(anArray)
{
	for (id in markers) {
		addMarker(markers[id].latitude, markers[id].longitude, markers[id].name);
	}
}
