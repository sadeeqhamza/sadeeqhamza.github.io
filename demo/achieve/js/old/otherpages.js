var currentGoal;
$(document).on("pagebeforechange", function(event, data) {

    if (data.toPage[0].id == "goal-page") {
        console.log(data);
        currentGoal = data.options.myd;
        document.getElementById("clicked-goal-name").innerHTML = currentGoal.name;
        document.getElementById("goal-description").innerHTML = currentGoal.details;
        $(document).on('click', '#del-goal-btn', function() {
            removeData(currentGoal.id);
            $.mobile.pageContainer.pagecontainer('change', '#my-goals', {
                transition: 'flow'
            });
        });
       
        return currentGoal;
    }
    if (data.toPage[0].id == "notes-page") {
        currentGoal = data.options.myd;
        $("#goal-notes").empty();
        for (var i = 0; i < currentGoal.tasks.length; i++) {
            currentGoal.tasks[i].id = i;
            $("#goal-notes").append('<li><label for="' + currentGoal.tasks[i].id + '">' +
                currentGoal.tasks[i].description +
                '</label> <input type = "checkbox" data-role="flipswitch" name ="' +
                currentGoal.tasks[i].id + '"id = "' + currentGoal.tasks[i].id +
                '"> </li>').trigger('create').listview("refresh");;
        }
    }
});


$(document).on("pageshow", "#notes-page", function(e,ui) {
currentGoal = getData(currentGoal.id);
  console.log(currentGoal);

});
var barChart;
$(document).on("pagecontainershow", function(event, ui) {

    if (ui.toPage.prop("id") == "goal-page") {
      currentGoal = getData(currentGoal.id);
      console.log("here");
if(barChart==null)
       
       {
            var data = {
                labels: weekday,
                datasets: [{
                    label: "checkin",
                    fillColor: "rgba(220,220,220,0.5)",
                    strokeColor: "rgba(220,220,220,0.8)",
                    highlightFill: "rgba(220,220,220,0.75)",
                    highlightStroke: "rgba(220,220,220,1)",
                    data: currentGoal.day
                }]
            };
            var ctx = document.getElementById("myChart").getContext("2d");
            window.barChart = new Chart(ctx).Line(data, {
            
                responsive: false // change to "false" and it will work
            });
        }
   return currentGoal;
  }
});
$(document).on("pageinit", "#goal-page", function() {
    var d = new Date();
    

    $(document).on('click', '#usercheckin', function() {
        var d = new Date();
        console.log(currentGoal + "checkin");
        currentGoal.day[d.getDay()]++;
        localStorage.setItem(currentGoal.id, JSON.stringify(currentGoal));
        window.barChart.update();
        
        $("#goal-page-pop").popup("open");
    });
     $(document).on('click', '#add-note-btn', function() {
            temptask = document.getElementById("note-input").value;
            addTask(currentGoal, temptask);
            temptask = "";
        });
        $(document).on('click', '#notes-btn', function() {
            var data = currentGoal;
            $.mobile.pageContainer.pagecontainer('change', '#notes-page', {
                transition: 'flow',
                myd: data
            });
        });

    
    
});

$(document).on("pageinit", "#explore-page", function() {
    console.log("Explore page initialized");
    $(document).on('click', '#addCat', function() {
        createGoal("QuitSmoking");
        console.log("Goal Added From Explorer initialized");
    });
});
////END EXPLORE////
$(document).on("pageshow", "#map-page", function() {
    initmap();

    function initmap() {
        L.mapbox.accessToken =
            'pk.eyJ1Ijoic2FkZWVxaGFtemE5MiIsImEiOiJCYTlIX0tFIn0.01iv4vJRDdsqClbUnlncSQ';
        var map;
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
////END MAP///////