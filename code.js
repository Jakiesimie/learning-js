function changeImage() {
	var image = document.getElementById('myImage');
	if (image.src.match("bulbon")) {
		image.src = "images/pic_bulboff.gif";
	} else {
		image.src = "images/pic_bulbon.gif";
	}

}

function chooseNumber() {
	var x, text;

	x = document.getElementById("numb").value;

	// isNaN - is Not a Number
	if(isNaN(x) || x < 1 || x > 10) {
		text = "Input not valid";
	} else {
		text = "Input OK";
	}
	document.getElementById("demo").innerHTML = text;
}

function showDate() {
	var x = document.getElementById("demo2").innerHTML;

	if (x) {
		x = ''
	} else {
		x = new Date()
	}
	document.getElementById("demo2").innerHTML = x
}

function grow() {
	var x = document.getElementById("demo2");
	y = parseInt(x.style.fontSize.slice(0,-2));
	x.style.fontSize = y + y/10 + "px";
}

function shrink() {
	var x = document.getElementById("demo2");
	y = parseInt(x.style.fontSize.slice(0,-2));
	x.style.fontSize = y - y/10 + "px";

	var myWindow = window.open("", "MsgWindow", "width=200, height=100");
	myWindow.document.write("color:mediumblue">"<p>Test</p>");
}

function changeColor() {
	var x = document.getElementById("demo3");
	var y = Math.floor(Math.random() * 10 + 1);
	var c;

	switch(y) {
		case(4):
			c = "red";
			break;
		case(3):
			c = "blue";
			break;
		case(2):
			c = "green";
			break;
		case(1):
			c = "yellow";
			break;
		default:
			c = "black";
	}
	x.style.color = c;

	console.log(document.getElementById("demo3").style.color);
	document.getElementById("demo4").innerHTML = "[ "  + document.getElementById("demo3").style.color + " ]";
}

function count() {
	var x = document.getElementById("factorial");
	var y = x.value;
	console.log(y);
	console.log(fact(y));
	x.value = fact(y);
}

function fact(x) {
	if (x > 1) {
		return x * fact(x-1);
	} else {
		return 1
	}
}

for(var i = 0; i < 20; i++) {
	var num = Math.floor(Math.random() * 10 + 1);
		document.writeln(num + " ");
}

console.log(10 == '10');
console.log(10 === '10');

var x = 3, y = 4, z;

console.log(x + ' ' + y + ' ' + z);
console.log("typeof x: " + typeof x);
console.log("typeof arr: " + typeof null);
console.log("isinstance arr: " + [1,2,3] instanceof Array);
console.log("instanceof: " + x instanceof Object);
console.log("Shift x right: " + x >> 2);
console.log("Shift x left: " + x << 2);

// prompt("What is your name?");
// confirm("Is your name Neevor?");


/*
	=========
	Functions
	=========
*/

function cel2fahr () {
	var x = document.getElementById("c2f").value;
	var result = document.getElementById("c2f_result");
	// document.getElementById("c2f_result").value = "Test";
	console.log(parseInt(x), isNaN(x));
	if (isNaN(x)) {
		result.value = "Invalid input";
	} else if (x == "") {
		result.value = "";
	} else {
		result.value = x * 9/5 + 32;
	}
}

function calculate () {
	var formula = document.getElementById("calc").value;
	var result = document.getElementById("calc_result").value = eval(formula);
	// document.getElementById("calc_result").value;
}

function changeBg (bg) {
    console.log(document.getElementsByTagName("body"));
    if (bg == 1) {
        document.getElementsByTagName("body")[0].style.backgroundColor = "green";
    } else if (bg == 2) {
        document.getElementsByTagName("body")[0].style.backgroundColor = "orange";
    } else {
        document.getElementsByTagName("body")[0].style.backgroundColor = "white";
    }
}

/*
 =========
 Objects
 =========
 */

var programmer1 = {
        "name": "Adam",
        "lastname": "Jurkiewicz",
        "age": 32,
        "language": "ActionScript",
        "fullName": function() {return this.name + " " + this.lastname;}
};

console.log(programmer1.name , programmer1.lastname, "is an ", programmer1["language"], "programmer.");
console.log(programmer1.fullName());
console.log(programmer1.fullName);
console.log(programmer1);

// var Programmer = new

// String methods
var str = "Test string";
console.log("-------------- String Test ------------------------");
console.log(str, str.length)
console.log(str.indexOf("Test"), str.lastIndexOf("string"));
console.log("---------------------------------------------------");