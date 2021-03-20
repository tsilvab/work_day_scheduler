const today = function () {
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
};
$(document).ready(function () {
    today();
    setInterval(today, 1000);
});


$(".saveBtn").on("click", function () {
    const text = $.trim($(This).siblings("textarea").val());
    const time = $(this).parent().attr("id");
    localStorage.setItem(text, time);
})

// let workDay=[]
$("#hour9.text").val(localStorage.getItem("hour9"));
$("#hour10.text").val(localStorage.getItem("hour10"));
$("#hour11.text").val(localStorage.getItem("hour11"));
$("#hour12.text").val(localStorage.getItem("hour12"));
$("#hour1.text").val(localStorage.getItem("hour1"));
$("#hour2.text").val(localStorage.getItem("hour2"));
$("#hour3.text").val(localStorage.getItem("hour2"));
$("#hour4.text").val(localStorage.getItem("hour4"));
$("#hour5.text").val(localStorage.getItem("hour5"));
// const array = localStorage.getItem("workDay");
// const planner = JSON.parse(array);

// workDay[time].event = text;
// localStorage.setItem("workDay", JSON.stringify(workDay));
function timeLapse() {
    const currentTime = moment().hour();

    $(".timeBlock").forEach(function () {
        const timeBlock = parseInt($(this).attr("id").split("hour")[1]);

        if (timeBlock < currentTime) {
            $(this).addClass("past");
        }
        else if (timeBlock === currentTime) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("future");
        }
    })

    timeLapse();
}




