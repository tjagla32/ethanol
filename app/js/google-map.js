function initMap() {
  var styledMapType = new google.maps.StyledMapType(
    [
      {
        "stylers": [
          {
            "hue": "#00aaff"
          },
          {
            "saturation": -100
          },
          {
            "lightness": 12
          },
          {
            "gamma": 2.15
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "labels.text",
        "stylers": [
          {
            "color": "#000000"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "lightness": 57
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text",
        "stylers": [
          {
            "color": "#000000"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "lightness": 25
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ffca26"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      }
    ],
    {name: 'Styled Map'});
  var uluru = {lat: 49.28, lng: -123.1};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru,
    scrollwheel				: false,
    navigationControl	: false,
    mapTypeControl		: false,
    scaleControl			: false,
    draggable					: false
  });

  var contentString = '<div class="info-window">Alan Smith<br>42nd Avenue 16<br>'+
                      '<b>Vancouver, BC, Canada</b></div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });


  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: 'images/map-marker.png',
    position : {lat: 49.27967, lng: -123.1005}
  });

  infowindow.open(map, marker);


  map.mapTypes.set('styled_map', styledMapType);
  map.setMapTypeId('styled_map');

}
