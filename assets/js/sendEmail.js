function sendMail(contactForm) {
    emailjs.send("gmail", "contact_form", {
            "full_name": contactForm.fullname.value,
            "user_email": contactForm.emailAddress.value,
            "street_address": contactForm.streetAddress.value,
            "town_city": contactForm.townCity.value,
            "user_postcode ": contactForm.postcode.value,
            "clean_request  ": contactForm.cleanRequest.value,
        })
        .then(
            function (response) {
                alert("SUCCESS", response);
                location.href = "mapsAPI.html";
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false;
}