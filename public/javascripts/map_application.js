var map;

function init() {
	var latlng = new google.maps.LatLng(57.8, 14.0);
	var options = {
		zoom: 6,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById('map'), options);

	var marker = new google.maps.Marker({
		position: latlng,
		title: "Hello World!"
	});
	marker.setMap(map);
	
	google.maps.event.addListener(map, 'click', function(event) {
		addMarker(event.latLng);
	});
	debug("initialized OK  ");
}

 window.onload=init;

