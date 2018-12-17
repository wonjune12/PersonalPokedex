"use strict";

var clickEvent = document.querySelector("button");
var showRow = document.querySelector(".row");
var typeBackground = document.getElementById("page*");


clickEvent.addEventListener("click",(event)=>{
    localStorage.setItem("key",document.getElementById("trainer-name").value); 
    var getType = localStorage.getItem["types"];
    if (getType == "grass"){
        document.querySelector("#page1").classList.add("page1");
    }
    if (getType == "fire"){
        document.querySelector("#page2").classList.add("page2");
    }
    if (getType == "water"){
        document.querySelector("#page3").classList.add("page3");
    }
})

