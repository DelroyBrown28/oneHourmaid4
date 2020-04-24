$(document).ready(function () {

    //KEEPS CONTENTS HIDDEN UNTIL CALLED FOR
    document.getElementById("deepcleanslider_contents_wrapper").style.visibility = "hidden";
    document.getElementById("deepClean_top_contents_wrapper").style.visibility = "hidden";
    document.getElementById("movingInOut_top_contents_wrapper").style.visibility = "hidden";
    document.getElementById("movingInOutslider_contents_wrapper").style.visibility = "hidden";


    $("#toBasicClean_button").click(toBasicClean);

    function toBasicClean() {
        $("#deepcleanslider_contents_wrapper").css("visibility", "hidden");
        $("#deepClean_top_contents_wrapper").css("visibility", "hidden");
        $("#movingInOutslider_contents_wrapper").css("visibility", "hidden");
        $("#movingInOut_top_contents_wrapper").css("visibility", "hidden");


        $("#basicleanslider_contents_wrapper").css("visibility", "visible");
        $("#top_contents_wrapper").css("visibility", "visible");


    }

    $("#toDeepClean_button").click(toDeepClean);


    function toDeepClean() {
        $("#basicleanslider_contents_wrapper").css("visibility", "hidden");
        $("#top_contents_wrapper").css("visibility", "hidden");
        $("#movingInOutslider_contents_wrapper").css("visibility", "hidden");
        $("#movingInOut_top_contents_wrapper").css("visibility", "hidden");


        $("#deepcleanslider_contents_wrapper").css("visibility", "visible");
        $("#deepClean_top_contents_wrapper").css("visibility", "visible");


    }


    $("#toMovingInOut_button").click(toMovingInOut);

    function toMovingInOut() {
        $("#basicleanslider_contents_wrapper").css("visibility", "hidden");
        $("#top_contents_wrapper").css("visibility", "hidden");
        $("#deepcleanslider_contents_wrapper").css("visibility", "hidden");
        $("#deepClean_top_contents_wrapper").css("visibility", "hidden");

        $("#movingInOutslider_contents_wrapper").css("visibility", "visible");
        $("#movingInOut_top_contents_wrapper").css("visibility", "visible");


    }



})

