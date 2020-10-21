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

// This function shows a calendar
let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let monthAndYear = document.getElementbyId("monthAndYear");

function showCalendar(month, year) {
    let firstDay = new Date(year, month).getDay();
    let daysinMonth = 32 - new Date(year, month, 32).getDate();
    let tbl = document.getElementbyId("calendar-body");
    tbl.innerHTML = ""
    monthAndYear.innerHTML = months[month] + " " + year
    let date = 1;

    for(let i = 0; i < 6; i++) {
        let row = document.createElement('tr')
        for(let j = 0; j < 7; j++) {
            if(i === 0 && j < firstDay) {
                let cell = document.createElement('td')
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if(date > daysInMonth) {
                break;
            }
            else {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            date++;
        }
        tbl.appendChild(row);
    }
}

function previous() {
    currentYear = (currentMonth === 0)? currentYear: currentYear - 1;
    currentMonth = currentMonth === 0? 11: currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function next() {
    currentYear = (currentMonth === 11)? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}