var currentGoal;
$(document).on("pagebeforechange", function(event, data) {

   if (data.toPage[0].id == "goal-page") {
      console.log(data);
      currentGoal = data.options.myd;
      
   

      return currentGoal;
   }
   if (data.toPage[0].id == "notes-page") {
      currentGoal = data.options.myd;
      
      $("#goal-notes").empty();
for (var i = 0; i < currentGoal.tasks.length; i++)
{
    currentGoal.tasks[i].id = i;
    $("#goal-notes").append('<li><label for="' + currentGoal.tasks[i].id + '">' + currentGoal.tasks[i].description +
        '</label> <input type = "checkbox" data-role="flipswitch" name ="' + currentGoal.tasks[i].id + '"id = "' + currentGoal.tasks[i].id + '"> </li>').trigger(
        'create').listview("refresh");
}

});

$(document).on("pageinit", "#goal-page", function() {
   var d = new Date();


   
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

var barChart;
$(document).on("pagecontainershow", function(event, ui) {
f
});

$(document).on("pageshow", "#notes-page", function(e, ui) {
   currentGoal = getData(currentGoal.id);
   console.log(currentGoal);

});

////END EXPLORE////

////END MAP///////
