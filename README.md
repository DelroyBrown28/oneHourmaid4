# oneHourmaid
My Second Milestone Project - Interactive Frontend Development

oneHourmaid is a cleaning app designed to have a cleaner at your door with in minutes. You can select from a #Basic Clean which consists of a simple house tidy up, washing dishes, vacuuming throughout etc. A #Deep Clean, which is more based around cleaning in those hard to reach areas i.e behind Refriderators, Cookers, Dish Washers. But also includes carpet cleaning and wooden/laminant floor polishing. The final option is Moving In/Out, here you can book a cleaner to deep clean either the house you're moving in to or the house you are moving out from.

## UX
oneHourmaid was designed for working people or families that may not have the time to focus on basic house chores. oneHourmaid can take care of all your in home cleaning needs quickly and effeciently. The app was made to be simple and straightforward as to remain relevant amongst all audiences. 

### Original Mockups/Project Skeleton
Designed in Figma, oneHourmaid keeps to a clean black and gold theme throughout.

#### Wireframes
##### Index/Main Pages

The Index/Main page has 3 options: Basic Clean, Deep Clean and Property Moving In/Out. I used [Ken Wheeler's](http://kenwheeler.github.io/) [Slick Carousel](https://kenwheeler.github.io/slick/) to create the swipe functionality between each service.

![Basic Clean Mockup](https://github.com/DelroyBrown28/oneHourmaid4/blob/master/assets/images/README_images/basic_clean_page.png)
![Deep Clean Mockup](https://github.com/DelroyBrown28/oneHourmaid4/blob/master/assets/images/README_images/deep_clean_page.png)
![Moving In/Out Mockup](https://github.com/DelroyBrown28/oneHourmaid4/blob/master/assets/images/README_images/moving_in_out_page.png)


Originally it was a button tap/click that was needed to go through the 3 services, when adding the design to HTML and CSS I found it more intuitive to have the swipe functionality instead.

A tap or click on the image of each service will store the value of the chosen service in ```LocalStorage``` to be retrived on the final ["maps.html"](https://delroybrown28.github.io/oneHourmaid4/map.html) page. You can also tap the left or right arrows at the bottom of the screen the cycle through each choice.
 *(please note: if you click the 'maps.html' link on this page the displayed info will return 'null')*
 
 ![New basic clean](https://github.com/DelroyBrown28/oneHourmaid4/blob/master/assets/images/README_images/newbasicclean.png)
 ![new deep clean](https://github.com/DelroyBrown28/oneHourmaid4/blob/master/assets/images/README_images/newdeepclean.png)

The Property Moving/InOut choice takes the user to a form to be filled out with the information of the location they would like the cleaner to arrive at. Along with a date and time, these choices will also be stored in the ```localStorage``` to be displayed on the next page.


### Features

