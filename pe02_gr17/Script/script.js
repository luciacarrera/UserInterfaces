/*function myfunction() {
    document.getElementById("students").style.display = "none";
}*/
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("students").style.display = "none";
    document.getElementById("grades").style.display = "none";
    document.getElementById("forum").style.display = "none";
    document.getElementById("homeButton").style.display = "none";
}, false);

//This function changes the content of the central container
function centralChange(content) {
    var home = document.getElementById("home");
    var students = document.getElementById("students");
    var grades = document.getElementById("grades");
    var forum = document.getElementById("forum");
    var homeButton = document.getElementById("homeButton");

    homeButton.style.display = "block";
    if(content == 'students'){
        home.style.display="none";
        students.style.display= "block";
        grades.style.display= "none";
        forum.style.display="none";
    }
    else if(content == 'grades'){
        students.style.display= "none";
        home.style.display="none";
        grades.style.display= "block";
        forum.style.display="none";
    }
    else if(content == 'forum'){
        students.style.display= "none";
        home.style.display="none";
        grades.style.display= "none";
        forum.style.display="block";
    }  
    else{
        students.style.display= "none";
        home.style.display="block";
        grades.style.display= "none";
        forum.style.display="none";
        homeButton.style.display="none";
    }

}

