function RegisterInputs()
{
  $(document).on('click', '#chess-icon', function()
  {
    document.getElementById("avatar-input").value = "img/chess.png";
  });
  $(document).on('click', '#documents-icon', function()
  {
    document.getElementById("avatar-input").value = "img/documents.png";
  });
  $(document).on('click', '#spray-icon', function()
  {
    document.getElementById("avatar-input").value = "img/spray.png";
  });
  $(document).on('click', '#monkey-icon', function()
  {
    document.getElementById("avatar-input").value = "img/monkey.png";
  });
  $(document).on('click', '#christmas-icon', function()
  {
    document.getElementById("avatar-input").value = "img/christmas.png";
  });
  $(document).on('click', '#socks-icon', function()
  {
    document.getElementById("avatar-input").value = "img/socks.png";
  });
}

function updateInputs()
{
  $(document).on('click', '#chess-icon', function()
  {
    document.getElementById("update-avatar").value = "img/chess.png";
  });
  $(document).on('click', '#documents-icon', function()
  {
    document.getElementById("update-avatar").value = "img/documents.png";
  });
  $(document).on('click', '#spray-icon', function()
  {
    document.getElementById("update-avatar").value = "img/spray.png";
  });
  $(document).on('click', '#monkey-icon', function()
  {
    document.getElementById("update-avatar").value = "img/monkey.png";
  });
  $(document).on('click', '#christmas-icon', function()
  {
    document.getElementById("update-avatar").value = "img/christmas.png";
  });
  $(document).on('click', '#socks-icon', function()
  {
    document.getElementById("update-avatar").value = "img/socks.png";
  });
  $(document).on('click', '#update-user', function()
  {
    userAccount.name = document.getElementById("update-name").value;
    userAccount.email = document.getElementById("update-email").value;
    userAccount.pic = document.getElementById("update-avatar").value;
    userAccount.birthdate = document.getElementById("update-birth").value;
    localStorage.setItem("user", JSON.stringify(userAccount));
    displayUser();
  });
}
$(document).on('click', '#add-note-btn', function()
{
  var currentGoal = getSessionGoal();
  temptask = document.getElementById("note-input").value;
  addTask(currentGoal, temptask);
  displayTasks();
});
$(document).on('click', '#save-note-btn', function()
{
  saveAllTasks();
});