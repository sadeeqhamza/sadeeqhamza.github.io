	$(document).on("pageinit", "#new-goal-page", function() {

	   console.log("Goal Page initialized");

	     $(document).on('click', '#icon-one', function() {
document.getElementById("icon-input").value= "user-sponge"
  });

	   $(document).on('click', '#save-goal-btn', function() {

	      var inputGoal;
	      var InputGoalObj;

	      inputGoal = document.getElementById("goalInput").value;
	      inputIcon = document.getElementById("icon-input").value;
	      createGoal(inputGoal,inputIcon);
	      ///$("#goal-list").append('<li>' + '<a href="#" id="' + goalObj.id + '"class="ui-nodisc-icon event-item ui-corner-all">' + goalObj.name + '</a>' + '</li>').listview("refresh");

	      console.log("goalAdded");
	      $.mobile.pageContainer.pagecontainer('change', '#my-goals', {
	         transition: 'flow'
	      });

	      inputGoal = "";

	   });


	});
