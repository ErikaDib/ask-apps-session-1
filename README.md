# Ask Apps Tech Classes - Session 1
 
Summary: Video Player

## Pre-requisites:
* Unzip software 
* Chrome browser - [https://www.google.com/chrome/](https://www.google.com/chrome/)
* Visual Studio Code - [https://code.visualstudio.com/Download](https://code.visualstudio.com/Download)
* Visual Studio Code Plugin - Install "Live Server" from Marketplace post installation of Visual Studio Code
* (Optional) Visual Studio Code Javascript (ES6) Code Snippets plugin - [https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)
* (Optional) Git - [https://git-scm.com/book/en/v2/Getting-Started-Installing-Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Setup instructions:
* Download the following zip file: https://github.com/andylu821/tech-classes-session-1/archive/master.zip or use git to checkout this repo
* Open the index.html file in a browser to see your changes
 
## Instructions:

###In this exercise, we will be creating a video player application using the HTML, CSS and Javascript skills that we learnt during the tech session.

####Exercise 1 - HTML
1. Update index.html with the basic HTML shell. For example:- `<html></html>`.
2. Create a main container that will hold all the elements.
3. Add a heading element titled 'My Video Player'
4. Add another element below the heading element to place your main video content. Provide it an id called `video`.
5. Now create a new element that will contain your list of videos

####Exercise 2 - CSS
1. Create a CSS page and link it to your HTML page by adding the file in the href attribute in the link tag
2. Center align your main container.
3. Add a background color `whitesmoke` to your main container.
4. Add styling to your heading and the main video section to make sure that it always remains fixed to the top
5. Your list of videos element should be styled such that each item in the list must have it s own border-box
6. Make your video list scrollable. It should not overlap over or cover the Main Video section.
7. Add hovering effect to your list of videos to enhance the look and feel of your video player. Try changing the border colors and border colors.

####Exercise 3 - JS
1. Link the videoPlayer.js file to the `<script>` tag.
2. Follow the rest of the instructions in videoPlayer.js to complete the exercise.

####Screenshot:
![Exercise Screenshot](https://ak.staticimgfarm.com/images/download/tech-classes/Exercise-1.png)

####Advanced Exercise 1 - HTML
1. Create a new file named index-advanced.html and try using some HTML5 elements rather than the regular <div> for some of the elements
https://developer.mozilla.org/en-US/docs/Glossary/Semantics

####Advanced Exercise 2 - CSS
1. Create a new file named styles-advanced.css and use this file for the below advanced exercises
2. Add css property to enhance the header text like text-shadow
3. Try using 'transform property' in CSS to make your list of videos look interactive
4. Try moving the video playlist/list of videos section to the right side of the page
5. Move the main video container to the left of the page

####Advanced Exercise 3 - JS
1. Create a new file named videoPlayer-advanced.js which is a copy of a completed videoPlayer.js  
2. Fetch an external video feed instead of local data.json file. Try using youtube API. 
https://dev.to/bjhaid_93/beginners-guide-to-fetching-data-with-ajax-fetch-api--asyncawait-3m1l
3. Add a close button when you hover over the video list. Clicking on the close button must delete the video from the list. 

####Screenshot:
![Advanced Exercise Screenshot](https://ak.staticimgfarm.com/images/download/tech-classes/Exercise-1-Advanced.png)

## Contributing 
andy.lu@apps.ask.com 
annamalai.natarajan@apps.ask.com
 
## License 
This is released under the MIT license (https://opensource.org/licenses/MIT)
