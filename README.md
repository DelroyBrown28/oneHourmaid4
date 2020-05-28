# oneHourmaid
My Second Milestone Project - Interactive Frontend Development

oneHourmaid is a cleaning app designed to have a cleaner at your door with in minutes. You can select from a Basic Clean which consists of a simple house tidy up, washing dishes, vacuuming throughout etc. A Deep Clean, which is more based around cleaning in those hard to reach areas i.e behind Refriderators, Cookers, Dish Washers. But also includes carpet cleaning and wooden/laminant floor polishing. The final option is Property Moving In/Out, here you can book a cleaner to deep clean either the house you're moving in to or the house you are moving out from.

## UX
oneHourmaid was designed for working people or families that may not have the time to focus on basic house chores. oneHourmaid can take care of all your in home cleaning needs quickly and effeciently. The app was made to be simple and straightforward as to remain relevant amongst all audiences. Designed in Figma, oneHourmaid keeps to a clean black and gold theme throughout, although designed for mobile view the app is responsive to iPads and desktop views also.

### Original Mockups/Wireframes

##### Index/Main Page Features

The Index/Main page has 3 options: Basic Clean, Deep Clean and Property Moving In/Out. I used [Ken Wheeler's](http://kenwheeler.github.io/) [Slick Carousel](https://kenwheeler.github.io/slick/) to create the swipe functionality between each service.

![Basic Clean Mockup](https://github.com/DelroyBrown28/oneHourmaid4/blob/master/assets/images/README_images/basic_clean_page.png)
![Deep Clean Mockup](https://github.com/DelroyBrown28/oneHourmaid4/blob/master/assets/images/README_images/deep_clean_page.png)
![Moving In/Out Mockup](https://github.com/DelroyBrown28/oneHourmaid4/blob/master/assets/images/README_images/moving_in_out_page.png)


Originally it was a button tap/click that was needed to go through the 3 services, when adding the design to HTML and CSS I found it more intuitive to have the swipe functionality instead.

A tap or click on the image of each service will store the value of the chosen service in ```LocalStorage``` to be retrived on the final ["maps.html"](https://delroybrown28.github.io/oneHourmaid4/map.html) page. You can also tap the left or right arrows at the bottom of the screen to cycle through each choice.
 *(please note: if you click the 'maps.html' link on this page the displayed info will return 'null')*
 
 ![New basic clean](https://github.com/DelroyBrown28/oneHourmaid4/blob/master/assets/images/README_images/newbasicclean.png)
 ![new deep clean](https://github.com/DelroyBrown28/oneHourmaid4/blob/master/assets/images/README_images/newdeepclean.png)

##### Property Moving In/Out Features
The Property Moving In/Out choice takes the user to a form to be filled out with the information of the location they would like the cleaner to arrive at. Along with a date and time, these choices will also be stored in the ```localStorage``` to be displayed on the next page.

![Moving form](https://github.com/DelroyBrown28/oneHourmaid4/blob/master/assets/images/README_images/movingform.png)
![Cleaner booked](https://github.com/DelroyBrown28/oneHourmaid4/blob/master/assets/images/README_images/cleanerbooked.png)

In a future project update this form will also send an email to oneHourmaid with the details of the user, cleaning location and date. I can only have 1 email function at the moment and decided to use this on the ["location_details.html"](https://delroybrown28.github.io/oneHourmaid4/location_details.html) page. The name and avatar of the cleaner is currently hard coded but will be grabbed from the cleaner side of the app in a future update as well.

##### How Many Rooms Page Features
The [How Many Rooms](https://delroybrown28.github.io/oneHourmaid4/number_of_rooms.html) page originally had 4 options, Bedrooms, Bathrooms, Kitchens and Other. I decided to simplify this by taking away the "Other" option. Each option has an up and down arrow button to increment or decrement the amount of rooms you wish to have cleaned for each. These values will also be stored in ```localStorage``` to be accessed later in the "maps.html" page.

![How many rooms](https://github.com/DelroyBrown28/oneHourmaid4/blob/master/assets/images/README_images/howManyRoomspage.png)

The bottom left and right arrows will either take you back to the index/main page or on to the next page to enter your details. However the user will not be able to proceed on to the next page until at least 1 room has been incremented.


##### Location Details Features
The [Location Details](https://delroybrown28.github.io/oneHourmaid4/location_details.html) page is a form the user must fill in with thieir Name, Address and Cleaning location. Once the "Find me a cleaner" button is clicked/tapped, this information is then sent via [Emailjs](https://www.emailjs.com/) to oneHourmaid (the cleaner) with the details of his/her next job. The User will also receive an email informing them that their cleaner is on the way.

![location details](https://github.com/DelroyBrown28/oneHourmaid4/blob/master/assets/images/README_images/locationdetailspage.png)
![user side email](https://github.com/DelroyBrown28/oneHourmaid4/blob/master/assets/images/README_images/cleanersideemail.png)
![cleaner side email](https://github.com/DelroyBrown28/oneHourmaid4/blob/master/assets/images/README_images/usersideemail.png)

##### Map Page Features
After entering your details and hitting "Find me a cleaner", your cleaner is on the way! The [Maps Page,](https://delroybrown28.github.io/oneHourmaid4/map.html) currently only shows the location of the user, in a future update this page will show both the users location and the location of the cleaner on route. I've used the Google Maps API to generate the map shown and added additional styles to match the theme of the app.

![maps page](https://github.com/DelroyBrown28/oneHourmaid4/blob/master/assets/images/README_images/mapspage.png)
![slide down menu](https://github.com/DelroyBrown28/oneHourmaid4/blob/master/assets/images/README_images/mapspageslidedownmenu.png)

The user can tap the small button at the top right of the map to access a small slide down menu which holds the details of the service the cleaner will carry out. These details include the type of service, basic clean, deep clean etc. and the type of rooms to be cleaned. Also included is the hard coded cleaners name, this will be grabbed from the cleaners side of the app in a future update.

![cancel cleaner pop up](https://github.com/DelroyBrown28/oneHourmaid4/blob/master/assets/images/README_images/cancelcleanerpopup.png)

When the "Cancel Cleaner" button is tapped/clicked, the User will be shown a pop up just to double check they really want to cancel. Clicking "No, i would not like to cancel" will keep you on the Maps page, clicking "Yes, i would like to cancel" will take you back to the Index/Main page.

### Features Left To Implement

Project updates i would like to implement:
- Have the ability to geolocate both the user and cleaner.
- Have a simple "Cleaners account" side of the app where the cleaner can sign in and see bookings and receive cleaning requests.
- Possibly find a way to send a text message to the User to inform them of the Cleaners arrival.
- Find another alternative to the standard HTML ```date-picker```.

## Technologies Used

I used a mixture of pure Javascript and [JQuery](https://jquery.com/) for all of the DOM manipulation eg. animating ```divs``` and storing info in ```localStorage```. As mentioned before I used [Ken Wheeler's](http://kenwheeler.github.io/) [Slick Carousel](https://kenwheeler.github.io/slick/) to create the swipe functionality between each service on the [Index/Main Page.](https://delroybrown28.github.io/oneHourmaid4/)

## Bugs

- Could not go from "index.html" to "moving_in_out_form.html" - **FIXED**<br>
(moving_in_out_form.html was spelt differently in link)


