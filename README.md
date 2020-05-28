# oneHourmaid
My Second Milestone Project - Interactive Frontend Development

oneHourmaid is a cleaning app designed to have a cleaner at your door with in minutes. You can select from a Basic Clean which consists of a simple house tidy up, washing dishes, vacuuming throughout etc. A Deep Clean, which is more based around cleaning in those hard to reach areas i.e behind Refriderators, Cookers, Dish Washers. But also includes carpet cleaning and wooden/laminant floor polishing. The final option is Property Moving In/Out, here you can book a cleaner to deep clean either the house you're moving in to or the house you are moving out from.

## UX
oneHourmaid was designed for working people or families that may not have the time to focus on basic house chores. oneHourmaid can take care of all your in home cleaning needs quickly and effeciently. The app was made to be simple and straightforward as to remain relevant amongst all audiences. 

### Original Mockups/Wireframes
Designed in Figma, oneHourmaid keeps to a clean black and gold theme throughout.

#### Features
##### Index/Main Pages

The Index/Main page has 3 options: Basic Clean, Deep Clean and Property Moving In/Out. I used [Ken Wheeler's](http://kenwheeler.github.io/) [Slick Carousel](https://kenwheeler.github.io/slick/) to create the swipe functionality between each service.

![Basic Clean Mockup](https://github.com/DelroyBrown28/oneHourmaid4/blob/master/assets/images/README_images/basic_clean_page.png)
![Deep Clean Mockup](https://github.com/DelroyBrown28/oneHourmaid4/blob/master/assets/images/README_images/deep_clean_page.png)
![Moving In/Out Mockup](https://github.com/DelroyBrown28/oneHourmaid4/blob/master/assets/images/README_images/moving_in_out_page.png)


Originally it was a button tap/click that was needed to go through the 3 services, when adding the design to HTML and CSS I found it more intuitive to have the swipe functionality instead.

A tap or click on the image of each service will store the value of the chosen service in ```LocalStorage``` to be retrived on the final ["maps.html"](https://delroybrown28.github.io/oneHourmaid4/map.html) page. You can also tap the left or right arrows at the bottom of the screen to cycle through each choice.
 *(please note: if you click the 'maps.html' link on this page the displayed info will return 'null')*
 
 ![New basic clean](https://github.com/DelroyBrown28/oneHourmaid4/blob/master/assets/images/README_images/newbasicclean.png)
 ![new deep clean](https://github.com/DelroyBrown28/oneHourmaid4/blob/master/assets/images/README_images/newdeepclean.png)

The Property Moving/InOut choice takes the user to a form to be filled out with the information of the location they would like the cleaner to arrive at. Along with a date and time, these choices will also be stored in the ```localStorage``` to be displayed on the next page.

![Moving form](https://github.com/DelroyBrown28/oneHourmaid4/blob/master/assets/images/README_images/movingform.png)
![Cleaner booked](https://github.com/DelroyBrown28/oneHourmaid4/blob/master/assets/images/README_images/cleanerbooked.png)

In a future project update this form will also send an email to oneHourmaid with the details of the user, cleaning location and date. I can only have 1 email function at the moment and decided to use this on the ["location_details.html"](https://delroybrown28.github.io/oneHourmaid4/location_details.html) page. The name and avatar of the cleaner is currently hard coded but will be grabbed from the cleaner side of the app in a future update as well.

##### How Many Rooms Page
The [How Many Rooms](https://delroybrown28.github.io/oneHourmaid4/number_of_rooms.html) page originally had 4 options, Bedrooms, Bathrooms, Kitchens and Other. I decided to simplify this by taking away the "Other" option. Each option has an up and down arrow button to increment or decrement the amount of rooms you wish to have cleaned for each. These values will also be stored in ```localStorage``` to be accessed later in the "maps.html" page.

![How many rooms](https://github.com/DelroyBrown28/oneHourmaid4/blob/master/assets/images/README_images/howManyRoomspage.png)

The bottom left and right arrows will either take you back to the index/main page or on to the next page to enter your details. However the user will not be able to proceed on to the next page until at least 1 room as been incremented.


##### Location Details
The [Location Details](https://delroybrown28.github.io/oneHourmaid4/location_details.html) page is a form the user must fill in with thieir Name, Address and Cleaning location. Once the "Find me a cleaner" button is clicked/tapped, this information is then sent via [Emailjs](https://www.emailjs.com/) to oneHourmaid (the cleaner) with the details of his/her next job. The User will also receive an email informing them that their cleaner is on the way.

![location details](https://github.com/DelroyBrown28/oneHourmaid4/blob/master/assets/images/README_images/locationdetailspage.png)
![user side email](https://github.com/DelroyBrown28/oneHourmaid4/blob/master/assets/images/README_images/cleanersideemail.png)
![cleaner side email](https://github.com/DelroyBrown28/oneHourmaid4/blob/master/assets/images/README_images/usersideemail.png)

##### Map Page
After entering your details and hitting "Find me a cleaner", your cleaner is on the way! The [Maps Page,](https://delroybrown28.github.io/oneHourmaid4/map.html) currently only shows the location of the user, in a future update this page will show both the users location and the location of the cleaner on route. I've used the Google Maps API to generate the map shown and added additional styles to match the theme of the app.

![maps page](https://github.com/DelroyBrown28/oneHourmaid4/blob/master/assets/images/README_images/mapspage.png)
