var navBar = document.createElement("div");
document.body.style.margin = "0";
navBar.style.height = "30px";
navBar.style.fontFamily = "Roboto";
navBar.style.textAlign = "center";
navBar.style.backgroundColor = "black";
navBar.style.padding = "10px 0px 0px 0px";

var homeLink = document.createElement("a");
homeLink.href = "https://4xc.com/";
homeLink.innerHTML = "Click to go to 4XC.com";
homeLink.style.color = "white";

navBar.appendChild(homeLink);
document.body.appendChild(navBar);
