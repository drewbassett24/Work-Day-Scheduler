//Declare Vars
var scheduleArea = $(".schedule");
// var timeRow = $(".timeRow");
var timeRow = [];
var currentDate = moment().format("MMM Do YYYY");
var currentHour = parseInt(moment().format("H"));
var toDos = [];

$("#currentDay").text(currentDate);
// console.log("current date: ", currentDate);
// console.log("current hour: ", currentHour);

setRows();

//format rows depending on the time
function setRows() {

    $("textarea").each(function () {
        var thisRow = $(this).attr("id");
        timeRow.push(thisRow);
    });
    // console.log("timeRow Array: ", timeRow);

    //Add colour per time of day
    for (var i = 0; i < timeRow.length; i++) {
        var timeNum = parseInt(timeRow[i])
console.log(timeNum, currentHour)
        if ((timeNum) === currentHour) {
            $("textarea[id=" + timeRow[i] + "]").addClass("present");
        } else if ((timeNum) > currentHour) {
            $("textarea[id=" + timeRow[i] + "]").addClass("future");
            
        } else {
            $("textarea[id=" + timeRow[i] + "]").addClass("past");
        }
    }
}

$(".fa-save").on("click", function (event) {
    // event.preventDefault();

    timeRow.each(function () {
        var thisRow = $(this);
        var thisRowHr = (thisRow.attr("id"));
        var toDoObject = {
            hour: thisRowHr,
            text: "",
        }
        toDoItems.push(toDoObject);
    });

    localStorage.setItem("todos", JSON.stringify(toDoItems));
});




