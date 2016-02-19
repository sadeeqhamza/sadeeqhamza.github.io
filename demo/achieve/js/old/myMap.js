L.mapbox.accessToken = 'pk.eyJ1Ijoic2FkZWVxaGFtemE5MiIsImEiOiJCYTlIX0tFIn0.01iv4vJRDdsqClbUnlncSQ';

var map = L.mapbox.map('map', 'sadeeqhamza92.l9of3c0n', {
	trackResize:true,
    maxZoom: 16,
    minZoom: 10,
    zoomControl: false
});

map.invalidateSize();
var featureLayer = L.mapbox.featureLayer()
    .loadURL('assets/randshow.geojson')
    .addTo(map);

featureLayer.on('layeradd', function(e) {
    var marker = e.layer,
        feature = marker.feature;

    marker.setIcon(L.icon(feature.properties.icon));
});
food = document.getElementById('filter-food'),
    utility = document.getElementById('filter-utility'),
    garden = document.getElementById('filter-garden'),
    outdoor = document.getElementById('filter-outdoor'),
    parking = document.getElementById('filter-parking'),
    shop = document.getElementById('filter-shop'),
    fashion = document.getElementById('filter-fashion'),
    all = document.getElementById('filter-all');


map.featureLayer.on('ready', function() {



food.onclick = function(e) {


                // The setFilter function takes a GeoJSON feature object
                // and returns true to show it or false to hide it.
                featureLayer.setFilter(function(f) {
                    return f.properties['title'] === 'FOOD EXPERIENCE';


                });

                return false;
            };

            utility.onclick = function(e) {


                // The setFilter function takes a GeoJSON feature object
                // and returns true to show it or false to hide it.
                featureLayer.setFilter(function(f) {
                    return f.properties['title'] === 'Toilet Service';


                });

                return false;
            };

            garden.onclick = function(e) {


                // The setFilter function takes a GeoJSON feature object
                // and returns true to show it or false to hide it.
                featureLayer.setFilter(function(f) {
                    return f.properties['title'] === 'GARDEN & OUTDOOR ROOMS';


                });

                return false;
            };

            outdoor.onclick = function(e) {


                // The setFilter function takes a GeoJSON feature object
                // and returns true to show it or false to hide it.
                featureLayer.setFilter(function(f) {
                    return f.properties['title'] === 'Outdoor Exhibit';


                });

                return false;
            };

            parking.onclick = function(e) {


                // The setFilter function takes a GeoJSON feature object
                // and returns true to show it or false to hide it.
                featureLayer.setFilter(function(f) {
                    return f.properties['title'] === 'Parking';


                });

                return false;
            };
            shop.onclick = function(e) {


                // The setFilter function takes a GeoJSON feature object
                // and returns true to show it or false to hide it.
                featureLayer.setFilter(function(f) {
                    return f.properties['title'] === 'SHOP';


                });

                    return false;
                };
fashion.onclick = function(e) {

                    // The setFilter function takes a GeoJSON feature object
                    // and returns true to show it or false to hide it.
                    featureLayer.setFilter(function(f) {
                        return f.properties['title'] === 'Fashion,Health & Beauty';


                    });

                    return false;
                };

                all.onclick = function() {


                    map.featureLayer.setFilter(function(f) {
                        // Returning true for all markers shows everything.
                        return true;
                    });
                    return false;
                };

          });

    
   $("#refreshBtn").on("tap", function() {
            map.invalidateSize();


        });

        $("#showMarkers").on("tap", function() {
            map.setView([-26.246735, 27.97898], 15);


        });
