function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

//function initialize () {
//  var markers ={
//    "title": "paris",
//    "lat" : 48.1351,
//    "lng" : 11.5820,
//    "description" : "paris"
//  }
//  var mapOption {
//  center: new google.maps.latlng(11.44, 78.79),
//    zoom: 5,
//      mapTapId: google.maps.MapTypeId.ROADMAP
//};
//  var map = new google.Map(document.getElementById('map'), mapOption);
//  for(i = 0; i < markers.length; i++) {
//    var data = markers [i]
//    var mylatlng = new google.maps.Latlng(data.lat, data.lng);
//    var markers = new google.maps.Markers{(
//     position : mylatlng,
//     map : map,
//     title : data.title
//    )};
//    
//  (function (marker, data){
//    google.maps.Event.addListener(marker, "clicl", function (e) {
//      infoWindow.setContent(data.description);
//      infoWindow.open(map, marker);
//    });
//                                
//  })(marker, data);
//    
//  }
//    };



var googleMap = new google.maps.Map( $('#google-map')[0]);
googleMap.setCenter( { lat: 47.6205, lng: -122.3493 } );
googleMap.setZoom( 25 );





