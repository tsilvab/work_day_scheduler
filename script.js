const today = function () {
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

};

$(document).ready(function () {
    setInterval(today, 1000);
    today();
    $(".saveBtn").on("click", function () {
        let text = $(this).siblings(".description").val();
        let time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    })

    function timeTrack() {
        let currentTime = moment().hour();
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            if (blockTime < currentTime) {
                $(this).removeClass("description");
                // $("textarea").removeClass("present");
                $(this).addClass("present")

            }
            else if (blockTime === currentTime) {
                $(this).removeClass("description");
                // $("textarea").removeClass("future");
                $(this).classList("present")

            }
            else {
                $(this).classList("description");
                // $("textarea").removeClass("past");
                $(this).classList("future")

            }
        })
    }

    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour1 .description").val(localStorage.getItem("hour1"));
    $("#hour2 .description").val(localStorage.getItem("hour2"));
    $("#hour3 .description").val(localStorage.getItem("hour3"));
    $("#hour4 .description").val(localStorage.getItem("hour4"));
    $("#hour5 .description").val(localStorage.getItem("hour5"));

    timeTrack();
})