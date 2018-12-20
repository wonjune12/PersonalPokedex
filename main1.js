"use strict";

var clickEvent = document.querySelector("button");
var showMain = document.querySelector("#main");
// var typeBackground = document.getElementById("page*");


clickEvent.addEventListener("click",(event)=>{
    localStorage.setItem("key",document.getElementById("trainer-name").value); 
    var getType = localStorage.getItem["types"];
    showRow.classList.add("slideDown")
})

