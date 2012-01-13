// JavaScript Document
/*
JavaScript multi-line comment
*/

// alert pops up a little window with an OK button
alert("What time is it?");

// prompt is for user input, has a text field for the user to enter some text
//prompt("What is your name");
//
//var name;
//while(!name) {
//name = prompt("no really, what is your name?");
//}
//console.log(name);
//
//document.write("Hello ", name + "<br>");
//
//for (var i = 0; i < 5; i++) {
//document.write("<br>" + i);
//document.write("<strong>" + i + "</strong>");
//}
var name;
function isNameCool() {
	while(name !== "Pat") {
	name = prompt("What is your name?");
	
	if (name == "Pat") {
		document.write("That is an awesome name");
	} else {
		document.write("I don't like that name. Try again");
	}
	}
}

isNameCool();

//var writeNameMultipleTimes = function() {
//	for (var i = 0; i<5; i++) {
//		document.write('<strong>Pat</strong><br>')
//	}
//};
//
//writeNameMultipleTimes();




