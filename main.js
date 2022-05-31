//     //  Exercise 1  //

// var myArray=[];
// if(!myArray.length){
// 	// I am empty
// }else{
// 	// I am not empty
// }

//     //  Exercise 2  //

// var emptyArray = {};
// var emptyArray1 = new Object();

//     //  Exercise 3  //

// var stringArr = ["Ali","Asad","Imran"];
// console.log(stringArr);

//     //  Exercise 4  //

// var NumberArr =[3,5,2,4];
// console.log(NumberArr);

//     //  Exercise 5  //

// var booleanArr = [ false,true, true, false];
// console.log(booleanArr);

//     // Exercise # 6 //

// var mixArr = [0, "Mixed", 1, "Array", 2, true, 3, false,4,"string"];
// console.log(mixArr);

// // Exercise # 7

// var mobileNetworksPakistan = ["SCOM","Ufone","Jazz", "Telenor",  "Zong"];
// console.log(mobileNetworksPakistan);

// // Exercise # 8

// var qualificationsInPakistan = ["SSC", "HSC","BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.write("<h1>Qualifications:</h1>");

// for (var i = 0; i < qualificationsInPakistan.length; i++ ){
//     document.write(i + 1 + ") " + qualificationsInPakistan[i] + "<br />");
// }



//     // Exercise # 9 //

// var topMovies2015 = [];

// topMovies2015.push("Avengers: Age Of Ultron");
// topMovies2015.push("Spectre");
// topMovies2015.push("Jurrasic World");
// topMovies2015.push("Inside Out");

// document.write("<h1>Top movies of 2015:</h1>");

// for (var i = 0; i < topMovies2015.length; i++ ){
//     document.write(i + 1 + ") " + topMovies2015[i] + "<br />");
// }

// document.write("<br /><h2>Length of the array: " + topMovies2015.length + "</h2>");

//     // Exercise # 11 //

// studentName = ["Michael", "John", "Tony"];
// obtainMarks = [320, 230, 480]

// document.write("<h1>Student Marks:</h1>");

// for (var i = 0; i < studentName.length; i++ ){
//         document.write("Score of " + studentName[i] + " is " + obtainMarks[i] + ". Percentage: " + Math.round(((obtainMarks[i] / 500)*100)) + "%<br />");
// }


// Exercise # 13 //

var studentScores = [320, 230, 480, 120];

document.write("<br />Scores of Students: " + studentScores);
document.write("<br />Ordered Scores of Students: " + studentScores.sort());

// Exercise # 14 //

var fruits = ["strawberry", "apple", "orange", "banana"];
document.write("<h4>Fruits list:</h4>" + fruits);
document.write("<h4>Ordered fruits list:</h4>" + fruits.sort());

// Exercise # 15 //

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(2,4);

document.write("<h4>Cities list:</h4>" + cities);
document.write("<h4>Selected cities list:</h4>" + selectedCities);


// Exercise # 16

var animals = ["This ", " is ", " my ", " cat"];

document.write("<h4>Array:</h4>" + animals);
document.write("<h4>String:</h4>" + animals.join(""));

// Exercise # 17

var computerDevices = [];

computerDevices.push("keyboard");
computerDevices.push("mouse");
computerDevices.push("printer");
computerDevices.push("monitor");

document.write("<h2>Devices:</h2> " + computerDevices + "<br/>" );

for (var i = 0; i < computerDevices.length; i++){
    document.write("<br/>Out:<br />" + computerDevices[i]);
}

// Exercise # 18
document.write("<h2>Devices:</h2> " + computerDevices + "<br/>" );

for (var i = computerDevices.length - 1; i >= 0; i--){
    document.write("<br/>Out:<br />" + computerDevices[i]);
}


// Exercise # 20

var multiDimArr = [
    [,,,,],
    [,,,,],
    [,,,,]
];
console.log(multiDimArr);


// Exercise # 21

var multiDimArr1 = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

for (var i = 0; i < multiDimArr1.length; i++){
    document.write("<br /><br />" + multiDimArr1[i].join(" "));
}