$(document).ready(function () {

    //KEEPS DEEP CLEAN CONTENTS HIDDEN UNTIL CALLED FOR
    document.getElementById("deepcleanslider_contents_wrapper").style.visibility = "hidden";


    $("#toDeepClean_button").click(toDeepClean);
    function toDeepClean() {
        $("#basicleanslider_contents_wrapper").addClass("houdini");
        $("#deepcleanslider_contents_wrapper").css("visibility", "visible");

    }

    $("#toBasicClean_button").click(toBasicClean);
    function toBasicClean() {
        $("#deepcleanslider_contents_wrapper").css("visibility", "hidden");
        $("#basicleanslider_contents_wrapper").css("visibility", "visible");

    }

})