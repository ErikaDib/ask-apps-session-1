
const loadVideoData = (path, error) => {
    const xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function()
    {
        
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let jsonString = JSON.parse(this.response);
                let data = jsonString.data; 
                loadVideo(data);
            /*
            * console.log(xhr) to see the available properties on your XMLHttpRequest object
            * XMLHttpRequest -> https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
            * Make sure to parse your data.json (function argument) JSON string input to convert it to a javascript object.
            * */

            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET",path, true);
    xhr.send();
};


/*
https://raw.githubusercontent.com/andylu821/tech-classes-session-1/master/data.json
* This function will be a helper function that will help with event delegation in Javascript. Look up event delegation if you would like to learn more.
* What is event delegation -> https://medium.com/@bretdoucette/part-4-what-is-event-delegation-in-javascript-f5c8c0de2983
* */

const eventDelegator = (element, evt) => {
 
    element.addEventListener(evt, (event) => {
        let currentElement = event.target;
            if(currentElement.hasAttribute("iframeHtml")){
                currentElement.getAttribute("iframeHtml");
                mainVideo(currentElement.getAttribute("iframeHtml"));
            } else if(currentElement.hasAttribute("closeB")) {
                document.getElementById(currentElement.getAttribute("closeB")).style.display = "none";
            }
       
        // while (currentElement && currentElement !== this) {
        //     if (currentElement.className === selector) {
        //         handler.call(currentElement, event, currentElement.getAttribute('data-key'));
        //     }
        //     currentElement = currentElement.parentNode;
        // }
    });
};
/*
* Invoke the loadVideoData function here based on the arguments that you can pass into it. This function is the starting function to run your application
* */
loadVideoData("https://raw.githubusercontent.com/andylu821/tech-classes-session-1/master/data.json");
/*
* The loadVideo function will take in the data from the data.json file.
* Your function will take in the argument that will be one of the properties of the XMLHttpRequest Object. This object will contain the data input.
* */
const loadVideo = jsonObject => {
    /* Create a variable called data. It will be an object formed by destructuring the passed argument*/
    let htmlObject = jsonObject[0].embed.html 
        mainVideo(htmlObject);
        subVideos(jsonObject);
    /*
    * View the data.json file. We are looking to access the embed iframe element to load the video on your page.
    * Have a look at all the iframe elements. They will look similar. Your job is to identify the string in the iframe that is unique to each iframe element
    * Now that you have figured out the unique part of the string, look in the data.json file to see if you can access it from another key-value pair in your data object
    * Make use of string manipulation to get that unique part of the string that you can pass as input to the mainVideo() function
    * Invoke your mainVideo(arg) function here.
    * Invoke your subVideo(arg) function here
    * Clicking on one of the videos in the list should change the main video to the clicked video. You can make use of the event delegator function to help you in achieving this end.
    * */
};
//
// /*
// *  The mainVideo function will take input from the data object and load the main video to the screen. Pass in the required argument
// *  Make use of the HTML DOM getElementById() and innerHTML property to write the video <iframe> to the screen
// * */
const mainVideo = (htmlObject) => {
    document.getElementById("video").innerHTML = htmlObject;
};
// /*
// * The event delegator function is invoked here. This function will enable changing the main video when you click on any of the video in the playlist.
// * Pass in the correct arguments to achieve this functionality.
// * */
let elem = document.getElementById("list");
eventDelegator(elem, "click","iframehtml");
// /*
// * The subVideos() function that will load the list of videos in the data object below your main video. Pass in the entire data object as input
// * The list of videos should include the video title, thumbnail image and a brief video description. Use proper string methods to get these values from the data object.
// * Create a div element using javascript. You can use the HTML DOM createElement property for this.
// * Set an attribute of 'data-key' and pass it the unique string value from the iframe element found in the data object. Make use of string manipulation to get the unique string
// * Make use of the HTML DOM innerHTML property to add in thumbnail image, title and description for each item in the video list.
// * Append the article element to the element with id 'main'
// * */
const myfunction =() => {
   // console.log("yheuuuuuuuuu");
}
const subVideos  = (listOfVideos) => {
    for(var i = 0; i< listOfVideos.length; i++){
        var numVideo = i.toString();
        var title = "<h1>" + listOfVideos[i].name + "</h1>";
        var description = "<p>" + listOfVideos[i].description + "</p>" ;
        var picOfvideoToPlay = "<img "+" "+"id=vid-"+i+" "+"src=" + listOfVideos[i].pictures.sizes[1].link + ">";
        var picHtml = listOfVideos[i].embed.html;
        var closeButton = "<button closeB="+i+" "+">"+"x"+"</button>";
            document.getElementById(numVideo).innerHTML = closeButton + picOfvideoToPlay + "<br>" + title + description;
            document.getElementById("vid-"+i).setAttribute("iframeHtml", picHtml);
    }
    
};
