"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Mackenzie Baker
   Date:   3.4.2019
   
   Filename: hg_report.js
	
*/
// Sets the gameReport variable to equal a string of text with several variable emmbedded within.
var gameReport = "<h1>" + itemTitle + "</h1><h2>By: " + itemManufacturer + "</h2><img src='hg_" + itemID + ".png' alt='id' id='gameImg'/><table><tr><th>Product ID</th><td>" + itemID + "</td></tr><tr><th>List Price</th><td>" + itemPrice + "</td></tr><tr><th>Platform</th><td>" + itemPlatform + "</td></tr><tr><th>ESRB Rating</th><td>" + itemESRB + "</td></tr><tr><th>Condition</th><td>" + itemCondition + "</td></tr><tr><th>Release</th><td>" + itemRelease + "</td></tr></table>" + itemSummary;

// Setting the first item in the article element.
document.getElementById()[0].innerHTML = gameReport;

// Setting the initial value of the variable named ratingsSum
var ratingsSum = 0;

// Setting the variable names ratingsCount to equal the length of the ratings array