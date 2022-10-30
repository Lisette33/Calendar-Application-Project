//Variable for Past, Present, or Future 
var time = $('.list-dates-item');

var date = moment().format('LL');

var day = $('#currentDay');
day.text(date)

//save - storage??

// Save button variables
var amAndpmButtonEl = $('#saveOne-btn', '#saveTwo-btn', '#saveThree-btn', '#saveFour-btn', '#saveFive-btn', '#saveSix-btn', '#saveSeven-btn', '#saveEight-btn', '#saveNine-btn');
 
// //Input event into the time block
// // function inputEvent() {
//     var input = generateInput();
//     var inputText = document.querySelector(".list-dates-item");

//     inputText.value = input;
// }

// //Add event listener to generate input button
// generateBtn.addEventListener("click", inputEvent);

//Function
function generateInput() {
//Variables
var past = $('.list-dates-item');
var present = $('.list-dates-item');
var future = $('.list-dates-item');

// Click event causes alert time color state toggle


time.each(function (i, timeBlock) {
var hour = (timeBlock.textContent.split("\n")[0]);
var timeBlockHour = moment(hour, 'h:mma');
var currentHour = moment(moment().format("ha"),"h:mma");
console.log(timeBlockHour)
console.log(currentHour)
console.log(timeBlockHour.isBefore(currentHour)); // true
    if (timeBlockHour.isBefore(currentHour)) {
      $(timeBlock).css({ 'background-color': '#d9e9e8', color: 'grey' });
    } 
    else if (timeBlockHour.isAfter(currentHour)) {
        $(timeBlock).css({ 'background-color': '#1a1a1a', color: 'green' });
      }
    else {
        $(timeBlock).css({ 'background-color': '#1a1a1a', color: 'red' });
      }
  });


}
generateInput()

// Click event causes Save button to function 
// Vanilla JS equivalent: `addEventListener`
amAndpmButtonEl.on('click', function () {
  location.save();
})


