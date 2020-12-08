

//variables for central container
var centralContainer = document.getElementById("centralContainer");
var helpCenter = document.getElementById("helpCenter");
var aboutUs = document.getElementById("aboutUs");
var homePage = document.getElementById("homePage");
var admissions = document.getElementById("admissions");
var studies = document.getElementById("studies");
var research = document.getElementById("research");
var myCourses = document.getElementById("myCourses");
var myGrades = document.getElementById("myGrades");
var forum = document.getElementById("forum");
var grades = document.getElementById("grades");
var myStudents = document.getElementById("myStudents");
 


//This function changes the content of the central container
function centralChange(content) {

    var centralContainer = document.getElementById("centralContainer");
    var helpCenter = document.getElementById("helpCenter");
    var aboutUs = document.getElementById("aboutUs");
    var homePage = document.getElementById("homePage");
    var admissions = document.getElementById("admissions");
    var studies = document.getElementById("studies");
    var research = document.getElementById("research");
    var myCourses = document.getElementById("myCourses");
    var myGrades = document.getElementById("myGrades");
    var forum = document.getElementById("forum");
    var grades = document.getElementById("grades");
    var myStudents = document.getElementById("myStudents");

    homePage.style.display ="none";
    aboutUs.style.display = "none";
    helpCenter.style.display = "none";
    admissions.style.display = "none";
    studies.style.display = "none";
    research.style.display = "none";
    myCourses.style.display = "none";
    myGrades.style.display = "none";
    forum.style.display = "none";
    grades.style.display = "none";
    myStudents.style.display = "none";

    if (content == "homePage"){
        homePage.style.display ="block";
    }
    if (content == "aboutUs"){
        aboutUs.style.display = "block";
    }
    if (content == "helpCenter"){
        helpCenter.style.display = "block";
    }
    if (content == "admissions"){
        admissions.style.display = "block";
    }
    if (content == "studies"){
        studies.style.display = "block";
    }
    if (content == "research"){
        research.style.display = "block";
    }
    if (content == "myCourses"){
        myCourses.style.display = "block";
    }
    if (content == "myGrades"){
        myGrades.style.display = "block";
    }
    if (content == "forum"){
        forum.style.display = "block";
    }
    if (content == "grades"){
        grades.style.display = "block";
    }
    if (content == "myStudents"){
        myStudents.style.display = "block";
    }
}
//This function for the humburger (phone)
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }