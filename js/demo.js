// JavaScript Document
/*
JavaScript multi-line comment
*/

// alert pops up a little window with an OK button
//alert("What time is it?");

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
//var name;
//function isNameCool() {
//	while(name !== "Pat") {
	var name = prompt("Please enter a letter");
//	
//	if (name == "Pat") {
//		document.write("That is an awesome name");
//	} else {
//		document.write("I don't like that name. Try again");
//	}
//	}
//}
//
//isNameCool();
//
//var writeNameMultipleTimes = function() {
//	for (var i = 0; i<10; i++) {
//		var c = i+1;
//		while (c > 0) {
//		document.write(name)
//		c = c -1;
//		}
//		document.write('<br>');
//	}
//};
//
//writeNameMultipleTimes();
var writeNameMultipleTimes = function() {
	for (var i = 1; i<11; i++) {
		var c = 0;
		while (c != i) {
		document.write(name)
		c++;
		}
		document.write('<br>');
	}
};

writeNameMultipleTimes();




