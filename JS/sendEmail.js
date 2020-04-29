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
                location.href='mapsAPI.html,
                console.log("success", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
        )
}