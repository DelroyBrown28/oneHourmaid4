$(document).ready(function () {

    $(".nextbutton").click(slideNextDiv);

    function slideNextDiv() {
        
        $("#basicleanslider_contents_wrapper").animate({
            right: "500px",
        });
        $("#deepcleanslider_contents_wrapper").animate({
            left: "0",
        });
    }

    $(".previousbutton").click(slidePreviousDiv);

    function slidePreviousDiv() {
        $("#basicleanslider_contents_wrapper").animate({
            left: "0",
        });
        $("#deepcleanslider_contents_wrapper").animate({
            left: "500px",
        });
        

    }
})