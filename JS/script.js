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