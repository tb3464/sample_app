// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

var centerLat = 37.818361;
var centerLng = -122.478032;
var startZoom = 13;

var map;

function init()
{
	map = new GMap2(document.getElementById("map"));
	var location = new GLatLng(centerLat, centerLng);
	map.setCenter(location, startZoom);
}

window.onload = init;
