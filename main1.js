"use strict";

var clickEvent = document.querySelector("button");
var showMain = document.querySelector("#main");
// var typeBackground = document.getElementById("page*");


clickEvent.addEventListener("click",(event)=>{
    localStorage.setItem("key",document.getElementById("trainer-name").value); 
    showMain.classList.add("slideDown");
})

