var clickedGoal;
var dataAdded;
var weekday = [];
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var User = function(name, email, birthdate, pic)
{
  this.name = name;
  this.email = email;
  this.birthdate = birthdate;
  this.pic = pic;
  this.goalStored = countGoals();
  this.goalComplete = 0;
};
var mainUser = new User("Sadeeq Hamza", "sid0793@googlemail.com", "21-July-1992", "img/shirt.png");
var motivateMessage = function(message)
{
  this.message = [];
  this.message.push(message);
  return this;
};
//Goal class
var Goal = function(theName, icon, details)
{
  var d = new Date();
  this.progress = 0;
  this.id = 0;
  this.name = theName;
  this.details = details;
  this.day = [0, 0, 0, 0, 0, 0, 0];
  this.location = L.latLng(50.5, 30.5);
  this.tasks = [];
  this.icon = icon;
  this.date = d.toDateString();
  this.checkIn = [];


};

/////Note/////////
var Task = function(description)
{
  this.id = 0;
  this.description = description;
  this.complete = "off";
  this.getName = function()
  {
    return this.description;
  };
};
/////
function createGoal(theName, theIcon, theDetails)
{
  var goal;
  goal = new Goal(theName, theIcon, theDetails);
  return goal;
}

function goalCheckIn(goal)
{
  var d = new Date();
  temp = new checkin(d.getDay());
  thegoal = goal;
  thegoal.checkIn.push(temp);
  localStorage.setItem(thegoal.id, JSON.stringify(thegoal));
  console.log("goalCheckIn()");
}

function addTask(goal, theTask)
{
  //index = localStorage.getItem("TaskIndex");
  theTask = new Task(theTask);
  theTask.id = goal.tasks.length+1;
  goal.tasks.push(theTask);
updateGoal(goal)
  updateSessionGoal(goal)

  console.log("addTask()");
}

function saveAllTasks()
{
 // index = localStorage.getItem("TaskIndex");
  var currentGoal = getSessionGoal();
  for (var i = 0; i < currentGoal.tasks.length; i++)
  {
    currentGoal.tasks[i].complete=$("#" + currentGoal.tasks[i].id).val();
    alert($("#" + currentGoal.tasks[i].id).val());

  }
  updateGoal(currentGoal);
  updateSessionGoal(currentGoal);
}

function saveData(theData)
{
  index = localStorage.getItem("Goalindex");
  theData.id = index;
  localStorage.setItem(index, JSON.stringify(theData));
  localStorage.setItem("Goalindex", ++index);
  console.log("saveData()");
}

function getData(theKey)
{
  var data;
  data = JSON.parse(localStorage.getItem(theKey));
  console.log(data);
  return data;
}

function removeData(theKey)
{
  localStorage.removeItem(theKey);
  console.log("removeData()");
}

function updateGoal(goal)
{
  localStorage.setItem(goal.id, JSON.stringify(goal));
  return goal;
}

function updateSessionGoal(goal)
{

  sessionStorage.setItem("currentGoal", JSON.stringify(goal));
}

function getSessionGoal()
{
  goal = JSON.parse(sessionStorage.getItem("currentGoal"));
  return goal;
}

function getProgess(goal)
{

  for (var j = 0; j < goal.tasks.length; j++)
  {
    if (goal.tasks[j].complete == "off" || goal.tasks.length < 0)
    {
      goal.progress += 0;
    }
    else if (goal.tasks[j].complete == "on")
    {
      goal.progress +=1;
    }
    else{
        goal.progress = 0;
    }
  }
  console.log(goal.progress);
  per = (goal.progress / goal.tasks.length) * 100;
  goal.progress = per;
  updateGoal(goal);
  console.log(per);
}


function countGoals()
{
  var goals = 0;
  if (localStorage)
  {
    goals = localStorage.length - 2;
    console.log(goals);
  }
  return goals;
}