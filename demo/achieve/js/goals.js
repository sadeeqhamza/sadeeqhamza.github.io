$(document).on("pageinit", "#my-goals", function()
{
   console.log("goals.js");
  
});

   $(document).on("pageload", "#new-goal-page", function() {

      console.log("Goal Page initialized");

      $(document).on('click', '#icon-one', function() {
         document.getElementById("icon-input").value = "album"
      });
       $(document).on('click', '#icon-two', function() {
         document.getElementById("icon-input").value = "barley"
      });
        $(document).on('click', '#icon-three', function() {
         document.getElementById("icon-input").value = "airballon"
      });

      $(document).on('click', '#save-goal-btn', function() {

         var inputGoal;
         var InputGoalObj;
         inputGoal = document.getElementById("goalInput").value;
         inputDescription = document.getElementById("goalDescription").value;
         inputIcon = document.getElementById("icon-input").value;
         createGoal(inputGoal,inputIcon,inputDescription);
       

         console.log("goalAdded");
         $.mobile.pageContainer.pagecontainer('change', '#my-goals', {
            transition: 'flow'
         });

         inputGoal = "";

      });


   });
