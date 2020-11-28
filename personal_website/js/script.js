//Nicholas Lai - ACIT 1620 - script.js

const courseList = [


    {code:"2515", name:"Object Oriented Programming", date:"Fall 2020"},

    {code:"1620", name:"Web Fundamental Technologies", date:"Fall 2020"},

    {code:"2420", name:"Linux System Administration", date:"Fall 2020"}, ];


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

function createCourseArray() {
    if ((courseList[i].code).includes(input)){
        console.log(`ACIT ${courseList[i].code} - ${courseList[i].name}, Date: ${courseList[i].date}` );
    }
}
createCourseArray()

function findCourse(courseList) {
    for( i = 0; i < courseList.length; i++) {
        if (input == courseList[0].code){
            var course1 = document.getElementById("course1");
            course1.style.backgroundColor = "green";
        }
        else if (input == courseList[1].code){
            var course2 = document.getElementById("course2");
            course2.style.backgroundColor = "green";
        }
        else if (input == courseList[2].code){
            var course3 = document.getElementById("course3");
            course3.style.backgroundColor = "green"; 
        } 
        else if (i == courseList.length-1){
            var tag = document.createElement("p");
            var nullcourse = {code: input, name: "N/A", date: "Fall 2020"}
            var text = document.createTextNode(`ACIT ${nullcourse.code} - ${nullcourse.name}, ${nullcourse.date}`);
            tag.appendChild(text);
            var element = document.getElementById("courses");
            element.appendChild(tag);
        }
    }
}       
findCourse(courseList)

// function changebackground(){
//     document.getElementById('id').style.backgroundColor = 'green' ; 
// }
// Thought I had to take elements from the html to make an array
// function createCourseArray() {
//     courseList = [];
//         var courseinfo1 = document.getElementById("Courseinfo").innerHTML;
//         var coursedate1 = document.getElementById("semester").innerHTML;
//         var courseinfo2 = document.getElementById("Courseinfo2").innerHTML;
//         var coursedate2 = document.getElementById("semester2").innerHTML;
//         var courseinfo3 = document.getElementById("Courseinfo3").innerHTML;
//         var coursedate3 = document.getElementById("semester3").innerHTML;
//         (courseList.push(courseinfo1));
//         (courseList.push(coursedate1));
//         (courseList.push(courseinfo2));
//         (courseList.push(coursedate2));
//         (courseList.push(courseinfo3));
//         (courseList.push(coursedate3));
//         courseList = (`{code: ${courseinfo} ,date: ${coursedate}},{code: ${courseinfo2} ,date: ${coursedate2}},{code: ${courseinfo3} ,date: ${coursedate3}}`);
//     console.log(courseList);
// }
