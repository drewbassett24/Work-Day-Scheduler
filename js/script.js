//Declare Vars
var currentDay = $("#currentDay");
var scheduleArea = $(".schedule");
var timeRow = $(".timeRow");
var currentDate = moment().format("ddd, MMM Do");
var currenthour = moment ().format("H");
var toDos = [];

function startSchedule(){
    timeRow.each(function(){
        var thisRow = $(this);
        var thisRowHr = parseInt(thisRow.attr("data-hour"));
        var toDoObject = {
            hour: thisRowHr,
            text: "",
        }        
        toDoItems.push(toDoObj);
    });

    localStorage.setItem("todos", JSON.stringify(toDoItems));
};

function saveIt(){
    var hourToUpdate = $(this).parent().attr("data-hour");
    var itemToHold = (($(this).parent()).children("textarea")).val();
    for (var j = 0; j < toDoItems.length; j++){
        if (toDoItems[j].hour == hourToUpdate){
            toDoItems[j].text = itemToAdd;
    }
}







// var dateTimeNow = moment().format("MMMM do YYY, h:mm:ss a");

// var nineAM = $("#9AM");
// var tenAM = $("#10AM");
// var elevenAM = $("#11AM");
// var twelveAM = $("#12AM");
// var onePM = $("#1PM");
// var twoPM = $("#2PM");
// var threePM = $("#3PM");
// var fourPM = $("#4PM");
// var fivePM = $("#5PM");
// var sixPM = $("6PM");

// var hour = moment ().hours();
// var userInput;
// var hourSpan;

// var interval = setInterval(function() {
//     var momentNow = moment();
//     $
// }, 100)
