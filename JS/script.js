$(document).ready(function () {



    // DELAYS APPEARANCE IN DESKTOP VIEW

    function fadeInOnload() {
        $(".moving_details_title, .basic_clean_wrap__desktop, .button_wrap__ipad, .next_prev_button_wrap, .how_many_rooms_title, .location_details_title, .counter_opacity1").animate({
            opacity: "1",
        }, 1000);
        $(".cleaning_location_title__movingform, .deep_clean_wrap__desktop, .cleaning_location_title, .counter_opacity2").animate({
            opacity: "1",
        }, 2000);
        $(".submit_button__movingform, .submit_form_button, .moving_in_out_wrap__desktop, .counter_opacity3").animate({
            opacity: "1",
        }, 3000);
        $(".bottom_wrap__desktop").animate({
            opacity: "1",
        }, 5000);
    }
    window.onload = fadeInOnload();

    function locationDetailsFadeIn() {
    }
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

//GOOGLE MAPS API
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        disableDefaultUI: true, //DISABLES GOOGLE MAPS DEFAULT FUNCTIONS
        center: {
            lat: 51.630770,
            lng: -0.735230,
        }
    });


    var labels = "S"
    var locations = [{
        lat: 51.630770,
        lng: -0.735230,
    }, ];


    var marker = new google.maps.Marker({
        position: map.getCenter(),
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 6.5,
        },
        draggable: true,
        map: map
    });

}

