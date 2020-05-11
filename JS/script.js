$(document).ready(function () {


    // SHOWS AND HIDES INFO ON MAPS API PAGE
    $(".open_close_info_button").click(openSideInfo);

    function openSideInfo() {
        $(".slide_info").animate({
            height: "85%",
        }, 200);
        $(".chosen_service_wrap").css("visibility", "visible");
        $(".tap_for_map").animate({
            opacity: "1",
        }, 2000);
        $(".open_close_info_button").fadeOut("fast");

    }

    $(".tap_for_map").click(closeSideInfo);

    function closeSideInfo() {
        $(".slide_info").animate({
            height: "5%",
        });
        $(".chosen_service_wrap").css("visibility", "hidden");
        $(".open_close_info_button").fadeIn("fast");


    }

    // DELAYS APPEARANCE IN DESKTOP VIEW

    function fadeInOnload() {
        $(".user_name_input,.cleaner_will_be_wrap, .moving_details_title, .basic_clean_wrap__desktop, .button_wrap__ipad, .next_prev_button_wrap, .how_many_rooms_title, .location_details_title, .counter_opacity1").animate({
            opacity: "1",
        }, 1000);
        $("#users_street_address, .your_service_wrap,.cleaning_location_title__movingform, .deep_clean_wrap__desktop, .cleaning_location_title, .counter_opacity2").animate({
            opacity: "1",
        }, 2000);
        $("#users_town_city, .your_service_rooms_wrap,.submit_button__movingform, .submit_form_button, .moving_in_out_wrap__desktop, .counter_opacity3").animate({
            opacity: "1",
        }, 3000);
        $("#users_booked_date").animate({
            opacity: "1",
        }, 4000);
        $("#users_booked_date,.bottom_wrap__desktop").animate({
            opacity: "1",
        }, 5000);
    }
    window.onload = fadeInOnload();

    function addBorders() {
        $(".left_border, .right_border").delay(500).animate({
            width: "50px",
        }, 1000);
        $(".chosen_cleaner__wrap").animate({
            borderLeftWidth: "8px",
            borderRightWidth: "8px",
        }, 1000)
    }
    window.onload = addBorders();


    function locationDetailsFadeIn() {}
    window.onload = locationDetailsFadeIn();


    // SLICK CAROUSEL FOR SWIPING THROUGH SERVICES
    $(".slick_wrap").slick({
        dots: false,
        nextArrow: $('.next_button'),
        prevArrow: $('.previous_button'),
    });



});


//INCREMENTS/DECREMENTS BEDROOMS BY 1
function plusOneBedrooms() {
    var addRoom = document.getElementById('rooms_amount_bedroom');
    value = parseInt(addRoom.getAttribute('value'), 10) + 1;
    addRoom.setAttribute('value', value);
    addRoom.innerHTML = value;

}

function minusOneBedrooms() {
    var subtractRoom = document.getElementById('rooms_amount_bedroom');
    value = parseInt(subtractRoom.getAttribute('value'), 10) - 1;
    subtractRoom.setAttribute('value', value);
    subtractRoom.innerHTML = value;

}

//INCREMENTS/DECREMENTS BATHROOMS BY 1
function plusOneBathrooms() { //make sure onclick goes to this function
    var addRoom = document.getElementById('rooms_amount_bathrooms'); //make sure input ID has this name
    value = parseInt(addRoom.getAttribute('value'), 10) + 1;
    addRoom.setAttribute('value', value);
    addRoom.innerHTML = value;

}

function minusOneBathrooms() {
    var subtractRoom = document.getElementById('rooms_amount_bathrooms');
    value = parseInt(subtractRoom.getAttribute('value'), 10) - 1;
    subtractRoom.setAttribute('value', value);
    subtractRoom.innerHTML = value;

}
//INCREMENTS/DECREMENTS KITCHENS BY 1
function plusOneKitchens() {
    var addRoom = document.getElementById('rooms_amount_kitchens');
    value = parseInt(addRoom.getAttribute('value'), 10) + 1;
    addRoom.setAttribute('value', value);
    addRoom.innerHTML = value;

}

function minusOneKitchens() {
    var subtractRoom = document.getElementById('rooms_amount_kitchens');
    value = parseInt(subtractRoom.getAttribute('value'), 10) - 1;
    subtractRoom.setAttribute('value', value);
    subtractRoom.innerHTML = value;

}