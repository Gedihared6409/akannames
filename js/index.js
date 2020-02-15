
// var maleNames = ["Kwasi", "Kwandwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
// var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
// var dayOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"]
// function giveAkanName (e) {
//     e.preventDefault();
//     var year =parseInt(document.getElementById("year").value);
//     var month=parseInt(document.getElementById("month").value);
//     var day=parseInt(document.getElementById("day").value);
//     var gender=getGender();
//     console.log(gender,"mygender");

//     var date = new Date(year +"/" + month + "/"+day);
//     var dayBorn = date.getDay();
//     // var akanName;
//     if(gender ==="male"){
//          akanName = maleNames[dayBorn];
//     alert("You were born on "+dayOfTheWeek[dayBorn]+ " and your Akan name is "+akanMaleName);
//     }
//     else if (gender === "female"){
//         let akanName = femaleNames[dayborn];
//     alert("You were born on "+dayOfTheWeek[dayBorn]+ " and your Akan name is "+akanFemaleName);
//     }
// }
// function validateGender(gender){
//     if(gender !== "male" && gender !== "female")
//         alert ("Gender should either be male or female");   
// }

// function validateDate(day,month,year){
//     if (year <= 0 ) {
//         alert("Invalid year");
//     }
//     else if (month <= 0 || month > 12) {
//         alert("Month is between 1 and 12");
//     }
//     else if (day <= 0 || day > 31){
//         alert("Date is between 1 and 31");
//     }
//     else if (validate == false) {
//         alert("Invalid Input!!");

// }


// function getGender(){
//     var genderType = document.getElementsByName("gender").value;
//     console.log(genderType,".......................");
//         // for(i = 0; i < genderType.length; i++){
//         //     if(genderType[i].checked){ 
//         //         && month > 0 && month < 13 && day > 0 && day < 32)&& month > 0 && month < 13 && day > 0 && day < 32)eturn(genderType[i].value)
//         // }
//     // }
//     if(document.getElementById('g1').checked){
//         my_gender=document.getElementById('g1').value
//         console.log(my_gender,"my_gender")
//     }


// } 
// var maleNames = ["Kwasi", "Kwandwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
// var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
// var dayOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"]
// function giveAkanName () {
//     var year =parseInt(document.getElementById("year").value);
//     var month=parseInt(document.getElementById("month").value);
//     var day=parseInt(document.getElementById("day").value);
//     var gender=getGender();
//     var date = new Date(year +"/" + month + "/"+day);
//     var dayBorn = date.getDay();
//     var akanName;
//     if(gender ==="male"){
//         akanName = maleNames[dayBorn];
//     alert("You were born on "+dayOfTheWeek[dayBorn]+ " and your Akan name is "+akanName);
//     }
//     else if (gender === "female" ){
//         akanName = femaleNames[dayborn];
//     alert("You were born on "+dayOfTheWeek[dayBorn]+ " and your Akan name is "+akanName);
//     }
// }

// function validateDate(day,month,year){
//     if (year <= 0 ) {
//         alert("Invalid year");
//     }
//     else if (month <= 0 || month > 12) {
//         alert("Month is between 1 and 12");
//     }
//     else if (day <= 0 || day > 31){
//         alert("Date is between 1 and 31");
//     }
//     else if (validate == false) {
//         alert("Invalid Input!!");

//     }
// }
// function getGender(){
//         var gender = document.getElementsByN("gender");
//         for(var i = 0; i < gender.length; i++){
//             if(gender[i].checked){
//                 return(gender[i].value);
//         }
//     }
// }giveAkanName();
// var submission = function() {
//     var daysOfTheWeek = [
//       "Sunday",
//       "Monday",
//       "Tuesday",
//       "Wednesday",
//       "Thursday",
//       "Friday",
//       "Saturday"
//     ];
//     var maleNames = [
//       "Kwasi",
//       "Kwadwo",
//       "Kwabena",
//       "Kwaku",
//       "Yaw",
//       "Kofi",
//       "Kwame"
//     ];
//     var femaleNames = [
//       "Akosua",
//        " Adwoa",
//       "Abenaa",
//       "Akua",
//       "Yaa",
//       "Afua",
//       "Ama"
//     ];
  
//   var month = parseInt(document.getElementById("month").value);
//     var year = parseInt(document.getElementById("year").value);
//     var day = parseInt(document.getElementById("day").value);
//     var name =(document.getElementById("name").value);
//     var date0fbirth = new Date(year + "/" + month + "/" + day);
//     var results = date0fbirth.getDay();
//     var output = document.getElementById("output");
//     var male = document.getElementById("male")
//     var female = document.getElementById("female")
  
//   if(male.checked && year > 0 && month > 0 && month < 12 && day > 0 && day < 32) {
//         output.innerHTML = "Hey! " + name + " you were born on a " + daysOfTheWeek[results] + " and your name is " + maleNames[results];
//     }
//      else if(female.checked && year > 0 && month > 0 && month < 12 && day > 0 && day < 32) {
//       output.innerHTML = "Hey! " + name + " you were born on a " + daysOfTheWeek[results] + " and your name is " + femaleNames[results];
//   }
//   };
var maleNames = ["Kwasi", "Kwandwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
var dayOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"]
function giveAkanName () {
    var year =parseInt(document.getElementById("year").value);
    var month=parseInt(document.getElementById("month").value);
    var day=parseInt(document.getElementById("day").value);
    var gender=getGender();
    var date = new Date(year +"/" + month + "/"+day);
    var dayBorn = date.getDay();
    // var akanName;
    var validate = (year > 0 && (month >0 && month <=12) && (day > 0 && day <= 31));
    var validateGender = (gender !== "male" && gender !== "female");
    if (year <= 0 ) {
        alert("Invalid year");
    }
    else if (month <= 0 || month > 12) {
        alert("Month is between 1 and 12");
    }
    else if (day <= 0 || day > 31){
        alert("Date is between 1 and 31");
    }
    else if (validate == false) {
        alert("Invalid Input!!");
    }
    if(gender ==="male" ){
       var akanName = maleNames[dayBorn];
    alert("You were born on "+dayOfTheWeek[dayBorn]+ " and your Akan name is "+akanName);
    }
    else if (gender === "female" ){
       var akanName = femaleNames[dayborn];
    alert("You were born on "+dayOfTheWeek[dayBorn]+ " and your Akan name is "+akanName);
    }
}
    function getGender(){
        var gender = document.getElementsByName("gender");
        for(var i = 0; i < gender.length; i++){
            if(gender[i].checked){
                return(gender[i].value)
        }
    }
}