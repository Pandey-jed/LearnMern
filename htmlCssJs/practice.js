document.getElementById("myButton").addEventListener("click", function() {
    alert("Button was clicked!");
});
window.onload = function() {
    console.log("Page has loaded");
};

document.getElementById("myButton").addEventListener("mouseover", function() {
    console.log("Mouse is hovering over the button");
});
document.getElementById("myButton").addEventListener("mouseout", function() {
    console.log("Mouse has left the button");
});
document.getElementById("myButton").addEventListener("dblclick", function() {
    console.log("Button was double clicked");
}
);
document.getElementById("myButton").addEventListener("contextmenu", function(event) {
    console.log("Button was right clicked");
    event.preventDefault();
});
document.getElementById("myButton").addEventListener("focus", function() {
    console.log("Button is focused");
});
document.getElementById("myButton").addEventListener("blur", function() {
    console.log("Button has lost focus");
});
document.getElementById("myButton").addEventListener("mousedown", function() {

    console.log("Button is pressed");
}
);

document.getElementById("myButton").addEventListener("mouseup", function() {

    console.log("Button is released");
});

document.getElementById("myButton").addEventListener("click", function(event) {

    console.log("Button is clicked and held");

    event.preventDefault();
});

document.getElementById("myButton").addEventListener("mousemove", function(event) { 

    console.log("Button is clicked and mouse is moving");

    event.preventDefault();
});

document.getElementById("myButton").addEventListener("mouseleave", function(event) {    

    console.log("Button is clicked and mouse has left");

    event.preventDefault();
});

document.getElementById("myButton").addEventListener("mouseenter", function(event) {

    console.log("Button is clicked and mouse has entered");

    event.preventDefault();
});

document.getElementById("myButton").addEventListener("mousemove", function(event) {

    console.log("Button is clicked and mouse is moving over it");

    event.preventDefault();
});

document.getElementById("myButton").addEventListener("mouseout", function(event) {

    console.log("Button is clicked and mouse has moved out");

    event.preventDefault();
});

document.getElementById("myButton").addEventListener("mouseover", function(event) {

    console.log("Button is clicked and mouse has moved in");

    event.preventDefault();
}
);

document.getElementById("myButton").addEventListener("mouseout", function(event) {

    console.log("Button is clicked and mouse has moved out of it");

    event.preventDefault();
});

document.getElementById("myButton").addEventListener("mouseover", function(event) { 

    console.log("Button is clicked and mouse is moving over it");

    event.preventDefault();
});

document.getElementById("myButton").addEventListener("mouseout", function(event) {

    console.log("Button is clicked and mouse has moved out of it");

    event.preventDefault();
});

document.getElementById("myButton").addEventListener("mouseover", function(event) {

    console.log("Button is clicked and mouse has moved in");

    event.preventDefault();
});

document.getElementById("myButton").addEventListener("mouseout", function(event) {

    console.log("Button is clicked and mouse has moved out");

    event.preventDefault();
});

document.getElementById("myButton").addEventListener("mouseover", function(event) { 

    console.log("Button is clicked and mouse is moving over it");

    event.preventDefault();
});

document.getElementById("myButton").addEventListener("mouseout", function(event) {
    
    console.log("Button is clicked and mouse has moved out of it");
    
    event.preventDefault();
}