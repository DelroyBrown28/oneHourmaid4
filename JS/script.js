$(document).ready(function () {


    // DELAYS CARD APPEARANCE IN DESKTOP VIEW
    function cardsOnLoad() {
        $(".basic_clean_wrap__desktop").animate({
            opacity: "1",
        }, 1000);
        $(".deep_clean_wrap__desktop").animate({
            opacity: "1",
        }, 2000);
        $(".moving_in_out_wrap__desktop").animate({
            opacity: "1",
        }, 3000);
    }
    window.onload = cardsOnLoad();


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
function plusOneBathrooms() {
    var addRoom = document.getElementById('rooms_amount_bathrooms');
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