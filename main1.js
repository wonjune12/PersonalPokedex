"use strict";

var clickEvent = document.querySelector("button");
var showRow = document.querySelector(".row");
var typeBackground = document.getElementById("page*");


clickEvent.addEventListener("click",(event)=>{
    localStorage.setItem("key",document.getElementById("trainer-name").value); 
    var getType = localStorage.getItem["types"];
    showRow.classList.add("slideDown")
})

