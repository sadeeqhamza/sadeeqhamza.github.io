$(document).on("pagecontainershow", function(event, data)
{
        /////Home Page
        if (data.toPage[0].id == "splash-page")
        {
                $("#avatar-input").hide();
                $("#name-input").val("SADEEQ HAMZA");
                $("#email-input").val("text@example.com");
                $("#birth-input").val("1992-07-07");
                $("#avatar-input").val("img/socks.png");
                RegisterInputs();
                 if (!localStorage.getItem("Goalindex")) {
      localStorage.setItem("Goalindex", Goal.index = 1);
   }
                $(document).on('click', '#go-register', function(event)
                {
                        mainUser.name = $("#name-input").val();
                        mainUser.email = $("#email-input").val();
                        mainUser.birthdate = $("#birth-input").val();
                        mainUser.pic = $("#avatar-input").val();
                        localStorage.setItem("user", JSON.stringify(mainUser));
                        $.mobile.changePage($("#home-page"));
                });
        }
        //////Home Page
        if (data.toPage[0].id == "home-page")
        {
                displayUser();
                displayMotivation();
                $("#panel-user").on("panelopen", function(event, ui)
                {
                        $("#update-avatar").hide();
                        updateInputs();
                });
        }
        //////My goals Page
        if (data.toPage[0].id == "my-goals")
        {
                loadGoals();
                $(document).on('click', '.usergoal', function()
                {
                        var data = getData($(this).attr("data-name"));
                        updateSessionGoal(data)
                        $.mobile.changePage($("#goal-page"));
                });
                $(document).on('click', '#refresh-btn', function()
                {
                        $("#goal-list").listview("refresh");
                });
        }
        if (data.toPage[0].id == "new-goal-page")
        {
                $(document).on('click', '#icon-one', function()
                {
                        document.getElementById("icon-input").value = "album";
                });
                $(document).on('click', '#icon-two', function()
                {
                        document.getElementById("icon-input").value = "barley";
                });
                $(document).on('click', '#icon-three', function()
                {
                        document.getElementById("icon-input").value = "airballon";
                });
                $(document).on('click', '#save-goal-btn', function()
                {
                        inputGoal = $("#goalInput").val();
                        inputDescription = $("#goalDescription").val();
                        inputIcon = $("#icon-input").val();
                        data = createGoal(inputGoal, inputIcon, inputDescription);
                        saveData(data);
                        $.mobile.changePage($("#my-goals"));
                });
        }
        if (data.toPage[0].id == "goal-page")
        {
                currentGoal = getSessionGoal();
                currentGoal = getData(currentGoal.id);
                displayChart();
                
                $(document).on('click', '#usercheckin', function()
                {
                        var d = new Date();
                        currentGoal.day[d.getDay()]++;
                        updateGoal(currentGoal);
                        updateSessionGoal(currentGoal);
                        currentGoal = getSessionGoal();
                        displayChart();
                        $("#goal-page-pop").popup("open");
                });
                $(document).on('click', '#del-goal-btn', function()
                {
                        removeData(currentGoal.id);
                        $.mobile.changePage($("#my-goals"));
                });
                $(document).on('click', '#notes-btn', function()
                {
                        $.mobile.changePage($("#notes-page"));
                });
        }
        if (data.toPage[0].id == "notes-page")
        {
                // var currentGoal = JSON.parse(sessionStorage.getItem("currentGoal"));
                //    $("#"+currentGoal.tasks[3].id).val('on').slider("refresh");
                displayTasks();
                $(document).on('click', '#back-notes', function()
                {
                        $.mobile.changePage($("#goal-page"));
                });
        }
});