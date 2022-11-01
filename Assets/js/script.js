//Variables
var time = $('.list-dates-item');
var date = moment().format('LL');
var day = $('#currentDay');
day.text(date)
var saveButton = document.getElementById("saveOne-btn");

//Function
function generateInput() {
//Variables
var past = $('.list-dates-item');
var present = $('.list-dates-item');
var future = $('.list-dates-item');

// Click event causes alert time color state toggle
time.each(function (i, textarea) {
var hour = (textarea.textContent.split("\n")[0]);
var timeBlockHour = moment(hour, 'h:mma');
var currentHour = moment(moment().format("ha"),"h:mma");
console.log(timeBlockHour)
console.log(currentHour)
console.log(timeBlockHour.isBefore(currentHour)); // true
    if (timeBlockHour.isBefore(currentHour)) {
      $(textarea).css({ 'background-color': 'lightgrey'});
    } 
    else if (timeBlockHour.isAfter(currentHour)) {
        $(textarea).css({ 'background-color': 'green'});
      }
    else {
        $(textarea).css({ 'background-color': 'red'});
      }
  });

}
generateInput()

// Click event causes Save button to function 
function saveDataEvent() {
//Save data form data as an object
var event = {
  time: time.value
};
// Use .setItem() to store object in storage and JSON.stringify to convert it as a string
localStorage.setItem("event", JSON.stringify(event));
}

function renderDataEvent() {
// Use JSON.parse() to convert text to JavaScript object
var dataEvent = JSON.parse(localStorage.getItem("event"));
// Check if data is returned, if not exit out of the function
if (dataEvent !== null) {
  document.getElementById("list-dates-item").innerHTML = dataEvent.time;
} else {
  return;
}
}
$('#dates').on("click", "button", function(){
localStorage.setItem($(this).attr("id"),$("#"+$(this).attr("id")+"-text").val())
})
  
  // The init() function fires when the page is loaded 
  function init() {
    // When the init function is executed, the code inside renderLastGrade function will also execute
    renderDataEvent();
  }
  init();


