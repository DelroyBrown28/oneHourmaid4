$(document).ready(function () {


    $(".nextbutton").click(slideNextDiv);

    function slideNextDiv() {
        $("#basicleanslider_contents_wrapper").animate({
            left: "400px",
        });
        $("#top_contents_wrapper").animate({
            left: "400px"
        })
        $("#deepcleanslider_contents_wrapper").animate({
            left: "0",
        })
        $("#deepClean_top_contents_wrapper").animate({
            left: "0"
        })
        $(".previousbutton").fadeIn();


    }

    $(".previousbutton").click(previousDiv);

    function previousDiv() {
        $("#basicleanslider_contents_wrapper").animate({
            left: "0",
        });
        $("#top_contents_wrapper").animate({
            left: "0"
        })
        $("#deepcleanslider_contents_wrapper").animate({
            left: "400px",
        })
        $("#deepClean_top_contents_wrapper").animate({
            left: "400px"
        })
        $(".previousbutton").fadeOut();


    }


})