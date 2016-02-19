  $(document).on("pagecontainerbeforeshow", function(e, data) {
      if (data.toPage[0].id == "home-page") {
          displayUser();
      }
      if (data.toPage[0].id == "my-goals") {
          loadGoals();

      }
      if (data.toPage[0].id == "goal-page") {
          var currentGoal = JSON.parse(sessionStorage.getItem("currentGoal"));
          $("#clicked-goal-name").html(currentGoal.name);
          $("#goal-description").html(currentGoal.details);
       

      }
      if (data.toPage[0].id == "notes-page") {
          displayTasks();
      }
  });