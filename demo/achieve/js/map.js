$(document).on("pageshow", "#map-page", function() {
     var map;
    initmap();

    function initmap() {
        L.mapbox.accessToken =
            'pk.eyJ1Ijoic2FkZWVxaGFtemE5MiIsImEiOiJCYTlIX0tFIn0.01iv4vJRDdsqClbUnlncSQ';
       
        map = L.mapbox.map('map', 'examples.map-i86l3621', {
            trackResize: true,
            worldCopyJump: true,
            zoomControl: false
        });
        map.setView([50.794876, -1.104574], 9);
        var data;
        index = localStorage.getItem("Goalindex");
        for (var i = 0; i < index; i++) {
            if (getData(i) != null) {
                data = getData(i);
                if (data.location) {
                    var marker = new L.Marker(data.location);
                    map.addLayer(marker);
                }
            }
        }
    }
    map.on('dblclick', function(e) {
        map.invalidateSize();                
        $("#panel-map").panel("open");
        $(document).on('click', '#map-save', function() {
            $("#panel-map").panel("close");
            var mapInput;
            mapInput = document.getElementById("map-goal-input").value;
            var mapgoal = createGoal(mapInput);
            mapgoal.type = e.latlng.toString();
            localStorage.setItem(mapgoal.id, JSON.stringify(mapgoal));
        });
    });
});