//Synonym to $(document).ready(function() {:
document.addEventListener('DOMContentLoaded', function() {
    //CENTRAL CONTAINER
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
        forum.style.display = "block";
    }  
    else{
        students.style.display= "none";
        home.style.display="block";
        grades.style.display= "none";
        forum.style.display="none";
        homeButton.style.display="none";
    }

}
// Function to export student's grades as Excel file
function exportTableToExcel(tableID, filename = ''){
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    
    // Specify file name
    filename = filename?filename+'.xls':'excel_data.xls';
    
    // Create download link element
    downloadLink = document.createElement("a");
    
    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['\ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob(blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
    
        // Setting the file name
        downloadLink.download = filename;
        
        //triggering the function
        downloadLink.click();
    }
}


// Function to open Alfea's webpage
function openAlfea() {
    var x = document.getElementById("homepage").style.display = "none";
    var y = document.getElementById("container").style.display = "block";
}

// Functions to switch between Login and Register
function register() {
    var x = document.getElementById("login");
    var y = document.getElementById("register")
    var z = document.getElementById("btn");

    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

function login() {
    var x = document.getElementById("login");
    var y = document.getElementById("register")
    var z = document.getElementById("btn");

    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}

// Function to send a message in the forums and reset data
function eraseText() {
    document.getElementById("message").value = "Write a new message...";
}

// Function to switch between forum topics
function changeTopic(topic) {
    var topics = document.getElementById("topics");
    var trix = document.getElementById("trix");
    var specialists = document.getElementById("specialists");
    var newgirl = document.getElementById("newgirl");
    var dark = document.getElementById("dark");
    var guitar = document.getElementById("guitar");

    if(topic == 'forums'){
        topics.style.display = "block";
        trix.style.display="none";
        specialists.style.display= "none";
        newgirl.style.display= "none";
        dark.style.display="none";
        guitar.style.display="none";
    }
    
    else if(topic == 'trix'){
        topics.style.display="none";
        specialists.style.display= "none";
        newgirl.style.display= "none";
        dark.style.display="none";
        guitar.style.display="none";
        trix.style.display = "block";   
    }
    else if(topic == 'specialists'){
        specialists.style.display="block";
        newgirl.style.display= "none";
        dark.style.display="none";
        guitar.style.display="none";
        topics.style.display = "none";
        trix.style.display = "none"
    }
     else if(topic == 'newgirl'){
        specialists.style.display="none";
        newgirl.style.display= "block";
        dark.style.display="none";
        guitar.style.display="none";
        topics.style.display = "none";
        trix.style.display = "none"
    }
     else if(topic == 'dark'){
        specialists.style.display="none";
        newgirl.style.display= "none";
        dark.style.display="block";
        guitar.style.display="none";
        topics.style.display = "none";
        trix.style.display = "none"
    }  
     else if(topic == 'guitar'){
        specialists.style.display="none";
        newgirl.style.display= "none";
        dark.style.display="none";
        guitar.style.display="block";
        topics.style.display = "none";
        trix.style.display = "none"
    }
    else {
        topics.style.display = "block";
        specialists.style.display="none";
        newgirl.style.display= "none";
        dark.style.display="none";
        guitar.style.display="none";
        trix.style.display = "none"
    }
}

//CALENDAR
function showCal() {
    var cal = document.getElementById("myPopup");
    cal.style.display="block";
 }


