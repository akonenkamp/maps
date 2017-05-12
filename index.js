var locations = [
 {
     "name": "Louvre",
     "lat": 48.8606,
     "lng": 2.3376,
     "zoom": 12
 },
 {
     "name": "Smithsonian",
     "lat": 38.8860,
     "lng": 77.0213,
     "zoom": 12
 },
 {
     "name": "London Bridge",
     "lat": 33.9304,
     "lng": 84.3733,
     "zoom": 12
 }];

var map;

function initMap() {
       map = new google.maps.Map($('#map')[0], {
        center: {lat: 33.926188, lng: -84.391968},    
        zoom: 4
        });
        createMarkers();
      }

function createMarkers() {
	$.each(locations, function (index, value) {
		var marker = new google.maps.Marker({
        	position: { lat: value.lat, lng: value.lng }});
		
		marker.setMap(map);

		var infoWindow = new google.maps.InfoWindow({
        	content: value.name });
	
		marker.addListener( 'click', function( ) {
        	infoWindow.open( map, marker );
        });
	});
}

$('#locals').on('change', changeCenter);

function changeCenter() {
	var place = $(this).val();
	var location = $.grep(locations, function (n, i) {
		return n.name == place;
	})[0];

	if(location) {
        map.setCenter({lat: location.lat, lng: location.lng});
		map.setZoom(location.zoom);	
	}
	
}

