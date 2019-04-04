'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
let allHoursSemester = 17*5*6;
console.log("If attendee codes only workdays, working hours: " + allHoursSemester + " h");

// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52
let codeHoursAWeek = 5*6;
let workHoursAWeek = 52;
console.log("The percentage of coding hours if the working hours is 52 h " + ((codeHoursAWeek)/workHoursAWeek)*100 + " %");