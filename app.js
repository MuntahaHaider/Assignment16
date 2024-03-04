// chap 09-11

// Q1 
var city = prompt("Enter your city name")
alert("“Welcome to city of lights” " + city)

// Q2
var gender = prompt("Enter your gender");
if (gender === "male") {
    alert("Good Morning Sir.");
} 
else if (gender === "female") {
    alert("Good Morning Ma’am.");
} 
else {
    alert("Invalid input. Please enter either 'male' or 'female'.");
}


// Q3
var color = prompt("Enter color of road traffic signal")
if(color === "Red"){
    alert("Message \n Must Stop!") ;
}
else if(color === "yellow"){
    alert("Message \n Ready to move!") ;
} 
else if (color === "Green"){
    alert("Message \n Move now!") ;
}
else {
    alert("Invalid input. Please enter a valid traffic signal color (Red, yellow, or Green).");

} 


// Q4
var fuel = prompt("Enter a remaining fuel in car in litres")
if ( fuel < "0.25litres") {
    alert("“Please refill the fuel in your car!”")
}
else if ( fuel === "0.25litres"){
    alert("Your remaining fuel in car 0.25 litres")
}
else {
    alert("Invalid input. Please enter a valid fuel in car! ")
}


// Q5
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
alert("car is smaller than cat");
}



// Q6



// Q7(
var myNum = +prompt("Guess and Enter my Secret number. (range from 1 to 10)")
var myNum = 5
if (myNum === 5){
    alert("“Bingo! Correct answer”.")
}
else if (myNum !== 5){
    alert("“Close enough to the correct answer”.")
}
else{
    alert("you don't enter any number! range from 1 to 10 ")
}

// Q8
var number = +prompt("Enter any number which is divisible by 3")
if( number % 3 ){
    alert( number + "is divisible by 3")
}
else {
    alert(number + " is not divisible by 3!")
}


// Q9
var number = +prompt("Enter any number.")
if( number % 2 === 0 ){
    alert( number + " is even number.")
}
else{
 alert( number + " is old number.")
}

// Q10
var tem = +prompt("Enter the temperature .")
if(tem > 40 ){
    alert("“It is too hot outside.”")
}
else if(tem > 30 ){
    alert("“The Weather today is Normal.”")
}
else if(tem > 20 ){
    alert("“Today’s Weather is cool.”")
}
else if(tem > 10 ){
    alert("“OMG! Today’s weather is so Cool.”")
}
else{
    alert("Please enter eny temperature!")
}

// Q11 





// chap 12-13



// Q1



// Q2
var num1 = parseInt(prompt("Enter the first integer: "));
var num2 = parseInt(prompt("Enter the second integer: "));
if (num1 > num2) {
    alert("The larger integer is: " + num1);
} else if (num2 > num1) {
    alert("The larger integer is: " + num2);
} else if ( num1 === num2 && num2 === num1 ){
    alert("Both integers are equal.");
}
else {
    alert("please enter any two integer!")
}

// Q3
var a = +prompt("Enter any number.");
if(a > 0 ){
    alert(a + " is positive number!");
}
else if(a < 0 ){
    alert(a + " is negative number!");
}
else if(a === 0){
    alert(a + " is zero!");
}
else {
    alert("Please enter eny number!");
}


// Q4
var a = +prompt("Enter a character: ")
if (a === "a" && a === "e" && a === "i" && a === "o" && a === "u" ){
    alert( a + " True: It is a vowel.")
}
else if (a !== "a" && a !== "e" && a !== "i" && a !== "o" && a !== "u" ){
    alert( a + " false: It is not a vowel.")
}
else{
    alert("you dont enter any character!")
}

// Q5
var passA = +prompt("enter his password")
var passOne = "muntaha0000"
if( passA === passOne ){
    alert("“Correct! The password you entered matches the original password”.");
}
else if( passA !== passOne ){
    alert("“Incorrect password”")
}
else{
    alert("“ Please enter your password”")
}


// Q6
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}


// Q7



// chapter 10-14

// chap 10

// Q1 
var city = "Karachi"; 
if (city === "Karachi") { 
    console.log("The City OF Lights"); 
}

// Q2
if (x === y) {
    var z = prompt("Please enter the value of z:");
}

// Q3
var zipUser = +prompt("Enter my ZipCode.")
if(zipUser === 10010 ){
    alert("Karachi.")
}
else{
    alert("Please write correct city")
}

// Q4
var x = 1;
if (x === 1) {
    console.write(x = 2); 
}








// chap 11

// Q1 
if (x !== y) {
    
}

// Q2
if (x >= y) {

}


// Q3
var myVariable = 5; 
if (myVariable !== 10) {
    myVariable = 10; 
}


// Q4
var number1 = 5;
var number2 = 10;
if (number1 !== number2) {
    alert("Congratulations!");
}

// Q5
var firstName = prompt("Please enter your first name:");
var anotherName = "Faraz"; 
if (firstName !== anotherName) {
    alert("No match");
}

// Q6
var num1 = 10;
var num2 = 5;
if (num1 >= num2) {
    alert("Value of number1 is greater than or equal to the value of number2");
} 
else {
    alert("Value of number1 is less than the value of number2");
}


// Q7
var marks = +prompt("Enter your marks:");
var percentage = (marks/500) * 100
if (marks < 0 && marks > 100){
    alert("please enter valid marks ")
}
else if ( marks >= 80 && marks>= 90  ){
    alert("Marks: " + marks + "\n" + "Percentage: " + percentage + "%\n" + "grades A+")
}
else if ( marks >= 70 && marks>= 80  ){
    alert("Marks: " + marks + "\n" + "Percentage: " + percentage + "%\n" + "grades A")
}
else if ( marks >= 60 && marks>= 70  ){
    alert("Marks: " + marks + "\n" + "Percentage: " + percentage + "%\n" + "grades B")
}
else if ( marks >= 50 && marks>= 40  ){
    alert("Marks: " + marks + "\n" + "Percentage: " + percentage + "%\n" + "grades C")
}
else if ( marks >= 40 && marks>= 30  ){
    alert("Marks: " + marks + "\n" + "Percentage: " + percentage + "%\n" + "grades Fail")
}
else{
    alert("Enter marks")
}


// Q8
var a = 20 ;
var value = +prompt("Pleasae enter value of a.")
if (a === 20) {
    alert("a is 20");
} else {
    alert("The correct value of a is " + a);
}

// Q9
var city = prompt("Please enter a city:");
if (city === "Karachi") {
    alert("Yes, it is Karachi!");
} 
else if (city === "Lahore") {
    alert("Yes, it is Lahore!");
} 
else {
    alert("It's neither Karachi nor Lahore.");
}


// chap 13

// Q1
var a = 2
var b = 2
var c = 2
var d = 2
if (a === b && c === d) {
    
}

// Q2
var a = 2
var b = 2
var c = 5
var d = 6
if (a === b || c !== d) {
    
}
// Q3
if ((name1 === "Hamza" || name2 === "Arsalan") && age < 60) {

}


// Q4
var a = 5;
var b = 10;
if ( a < b || a > b) {
    alert("The first variable is either less than or greater than the second variable.");
}

// Q5
var firstName = "John";
var lastName = "Doe";
var enteredFirstName = prompt("Please enter your first name:");
var enteredLastName = prompt("Please enter your last name:");
if (enteredFirstName === firstName && enteredLastName === lastName) {
    alert("Your first and last names match the stored values.");
}
else{
    alert("Plx Enter correct names ")
}




// chap 14

// Q1 
var password = 10 ;
if (password !== 10 ) {
if (password <= 5) {
    alert("Password must be greater than 5");
} 
else {
        alert("OK");
    }
}

// Q2
if (a === 1) {
    if (c === "Max") {
        alert("OK");
    }
}

// Q3
if (a === 1 && c === "Max") {
    alert("OK");
}


// Q4
var a = 5
var b = 5
if(a === b ){
     if(a <= b ){
        alert("Both conditions are true.")
     }
}






