$(document).on("pagecontainershow", function(event, data)
{
  console.log("pagecontainershow");
  if (data.toPage[0].id == "splash-page")
  {
    console.log("pagecontainershow = splash-page");

    $("#avatar-input").hide();
    $("#name-input").val("SADEEQ HAMZA");
    $("#email-input").val("text@example.com");
    $("#birth-input").val("1992-07-07");
    $("#avatar-input").val("img/socks.png");

    RegisterInputs();

    $(document).on('click', '#go-register', function(event)
    {
      mainUser.name = document.getElementById("name-input").value;
      mainUser.email = document.getElementById("email-input").value;
      mainUser.birthdate = document.getElementById("birth-input").value;
      mainUser.pic = document.getElementById("avatar-input").value;
      console.log(mainUser + "registered");
      $.mobile.pageContainer.pagecontainer('change', '#home-page');
    });

  }
  if (data.toPage[0].id == "home-page")
  {
    displayMotivation();
    console.log("pagecontainershow = home-page");


    $("#panel-user").on("panelopen", function(event, ui)
    {
      $("#update-avatar").hide();
      updateInputs();
    });

   
  }
  if (data.toPage[0].id == "my-goals")
  {
     $(document).on('click', '.usergoal', function()
   {
      console.log("clicked");
      var data = getData($(this).attr("data-name"));
      $.mobile.pageContainer.pagecontainer('change', '#goal-page',
      {
         myd: data,
         transition: 'slide'
      });
   });
  }
});