//Nicholas Lai - ACIT 1620 - script.js

const courseList = [

    {code:"1620", name:"Web Fundamental Technologies"},

    {code:"2420", name:"Linux System Administration"},

    {code:"2515", name:"Object Oriented Programming"} ];

var input = prompt("Enter the 4 digit course ID: ");
if (input.length != 4) 
var input = prompt("Re-enter the 4 digit course ID: ");


for(i=0; i<courseList.length; i++){
    if(courseList[i].code == input){
        console.log("Yes I am taking the course:" + " " + `ACIT ${courseList[i].code} - ${courseList[i].name}` ); break;
    }
    else if(i == courseList.length-1){
        var addCourse = {code: input, name: null};
        (courseList.push(addCourse));
        console.log("Success!"); break;
    }
}