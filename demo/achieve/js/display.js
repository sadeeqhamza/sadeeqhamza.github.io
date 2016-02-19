function displayUser() {
 
   userAccount = JSON.parse(localStorage.getItem("user"));
   document.getElementById("goal-count").innerHTML = countGoals();
   document.getElementById("user-name").innerHTML = userAccount.name;
   document.getElementById("email-name").innerHTML = userAccount.email;
   document.getElementById("birth-date").innerHTML = userAccount.birthdate;
   $("#profile-pic").attr("src", userAccount.pic);
}

function displayMotivation() {
   var counter = 0;
   var temp = new motivateMessage(
      "I’ve missed more than 9000 shots in my career.I’ve lost almost 300 games.26 times I’ ve been trusted to take the game winning shot and missed.I’ ve failed over and over and over again in my life.And that is why I succeed.–Michael Jordan ",
      "Inspire");
   temp.message.push("Hope is a waking dream.");
   temp.message.push("Life is trying things to see if they work.");
   temp.message.push("The power of imagination makes us infinite.");
   document.getElementById("message-p").innerHTML = temp.message[0];
   setInterval(change, 5000);

   function change() {
      document.getElementById("message-p").innerHTML = temp.message[
         counter];
      $("#message-p").fadeOut("slow");
      $("#message-p").fadeIn("slow");
      counter++;
      if (counter >= temp.message.length) {
         counter = 0;
      }
   }
}

function loadGoals() {
   console.log("loadGoals()");
   if (!localStorage.getItem("Goalindex")) {
      localStorage.setItem("Goalindex", Goal.index = 1);
   }
   var data;
   index = localStorage.getItem("Goalindex");
   $("#goal-list").empty();
   if (index > 1) {
      for (var i = 0; i < index; i++) {
         if (getData(i) !== null) {
            data = getData(i);
            getProgess(data);
            $("#goal-list").append('<li class="usergoal" data-icon="' +
               data.icon + '" data-name="' + data.id + '">' +
               '<a href="#" class="light-pink">' + '<h2>' + data.name +
               '</h2>' + '<p>' + data.date + '</p>' + '<p>' + data.progress + "%" + '</p>' + '</a>' +
               '</li>').trigger('create').listview("refresh");
         }
        

      }
   }
}

function displayChart() {
   var barChart;
   var currentGoal = JSON.parse(sessionStorage.getItem("currentGoal"));
   console.log("displayChart()");
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


function displayTasks() {
   $("#goal-notes").empty();
   var currentGoal = getSessionGoal();
   for (var i = 0; i < currentGoal.tasks.length; i++) {

      $('#goal-notes').append('<label for="' + currentGoal.tasks[i].id +
         '">' + currentGoal.tasks[i].description +
         '</label><select name="' + currentGoal.tasks[i].id +
         '"id="' + currentGoal.tasks[i].id +
         '"class="taskToggle" data-role="flipswitch"><option value="on">Complete</option><option value="off">Not Yet</option></select>'
      );
      $('select').slider();
     $("#"+currentGoal.tasks[i].id).val(currentGoal.tasks[i].complete).slider("refresh");
// console.log(currentGoal);
   }
}
