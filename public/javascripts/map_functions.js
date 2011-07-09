var markersArray = [];
function writeShit(str) {
	document.write(str);
}

function addMarker(loc) {
	var marker = new google.maps.Marker({
		position: loc,
    		map: map,
		draggable: true,
		animation: google.maps.Animation.DROP	    
	});
	markersArray.push(marker);
	debug(" addMarker ran. ");
	debug(markersArray.length + "points ");
}

function debug(str) {
div = document.getElementById("debug");
alert = document.createTextNode(str);
div.appendChild(alert);
}

function clearOverlays() {
  if (markersArray) {
    for (i in markersArray) {
      markersArray[i].setMap(null);
    }
  }
}

function showOverlays() {
  if (markersArray) {
    for (i in markersArray) {
      markersArray[i].setMap(map);
    }
  }
}

function deleteOverlays() {
  if (markersArray) {
    for (i in markersArray) {
      markersArray[i].setMap(null);
    }
    markersArray.length=0;
  }
}
 

