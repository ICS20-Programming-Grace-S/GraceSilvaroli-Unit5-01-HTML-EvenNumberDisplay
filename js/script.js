// Created by: Grace S
// Created on: April 2022
// This file contains the JS functions for index.html


'use strict';

/**
 * This function displays all numbers from user minimum and maximum number input
 */

function displayResults() {

  // Gets Variables from User (Minimum and Maximum Number)
  let minimum = parseInt(document.getElementById("minimum").value);
  let maximum = parseInt(document.getElementById("maximum").value);

	// Initalizing variables
  let counter = minimum;
  let number = "";

	// use a while loop to display the numbers from minimum to maximum

  if (minimum == maximum) {
    number = "Please enter a different numbers for each."
    } else if (minimum <= maximum) {
      while ((counter >= minimum) && (counter <= maximum)) {
      number = number + counter + "<br>";
      counter = counter + 1;
      }
    } else  {
    number = "Please enter a minimum number smaller than maximum."
    } 
  
  // returns the string of numbers back to index.html
  document.getElementById("output").innerHTML = number;
}