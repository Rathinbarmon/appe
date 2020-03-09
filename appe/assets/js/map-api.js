// Map
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -28.397, lng: 120.644},
      zoom: 6,
      styles: [
                {
                    "stylers": [
                        {
                            "hue": "#2c3e50"
                        },
                        {
                            "saturation": 250
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "lightness": 50
                        },
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                }
            ]
    });
}