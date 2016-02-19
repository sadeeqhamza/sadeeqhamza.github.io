$(document).on("pageinit", "#home-page", function() {
   mainUser = new User("Sadeeq Hamza", "sid0793@googlemail.com", "21-July-1992");

   document.getElementById("user-name").innerHTML = mainUser.name;
   document.getElementById("email-name").innerHTML = mainUser.email;
   document.getElementById("birth-date").innerHTML = mainUser.birthdate;
 displayMotivation()

  function displayMotivation() {
      temp = new motivateMessage(
        "I’ve missed more than 9000 shots in my career.
       I’ve lost almost 300 games.
       26 times I’ve been trusted to take the game winning shot and missed.
       I’ve failed over and over and over again in my life.
       And that is why I succeed. –Michael Jordan","Inspire"
       );

      document.getElementById("message-p").innerHTML = temp.message;
   }

});
