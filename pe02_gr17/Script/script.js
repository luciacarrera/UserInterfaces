//Synonym to $(document).ready(function() {:
document.addEventListener('DOMContentLoaded', function() {
    //CENTRAL CONTAINER
    document.getElementById("students").style.display = "none";
    document.getElementById("grades").style.display = "none";
    document.getElementById("forum").style.display = "none";
    document.getElementById("homeButton").style.display = "none";
    deleteInfo();
    document.getElementById("login").reset();
    //document.cookie = "user=,nia=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
    $("#login").submit(function(e){
        return false;
    });
    $("#register").submit(function(e){
        return false;
    });
}, false);

//function to send email in Students
function sendMail(user){
    var email = "mailto:"+user+"@alfea.com"
   window.location.href = email;
}
//This function changes the content of the central container
function centralChange(content) {
    var home = document.getElementById("home");
    var students = document.getElementById("students");
    var grades = document.getElementById("grades");
    var forum = document.getElementById("forum");
    var homeButton = document.getElementById("homeButton");
    var role = document.getElementById('role').value;

    homeButton.style.display = "block";
    if(content === 'students'){
        changingRole(role);
        home.style.display="none";
        students.style.display= "block";
        grades.style.display= "none";
        forum.style.display="none";
       
    }
    else if(content === 'grades'){
        students.style.display= "none";
        home.style.display="none";
        grades.style.display= "block";
        forum.style.display="none";
        changingRole(role);
    }
    else if(content === 'forum'){
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
    document.getElementById("homepage").style.display = "none";
    document.getElementById("container").style.display = "block";
}

// Function to close Alfea's webpage
function closeAlfea() {
    document.getElementById("container").style.display = "none";
    document.getElementById("homepage").style.display = "block";
}

// Function to confirm exit when logout
function showConfirmation() {
    var confirmation = confirm("Do you want to exit from Alfea?");
    if (confirmation) {
        closeAlfea();
        //delete login info
        document.getElementById("login").reset();
    }  
}

// Functions to switch between Login and Register
function register() {
    var x = document.getElementById("login");
    var y = document.getElementById("register")
    var z = document.getElementById("btn");
    deleteInfo();

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

// Function to send a message in the forums
function sendMessage(){

}

// Function to switch between forum topics
function changeTopic(topic) {
    var topics = document.getElementById("topics");
    var trix = document.getElementById("trix");
    var specialists = document.getElementById("specialists");
    var newgirl = document.getElementById("newgirl");
    var dark = document.getElementById("dark");
    var guitar = document.getElementById("guitar");
    var unsentMessage = document.getElementById("unsentMessage");

    if(topic === 'forums'){
        topics.style.display = "block";
        trix.style.display="none";
        specialists.style.display= "none";
        newgirl.style.display= "none";
        dark.style.display="none";
        guitar.style.display="none";
        unsentMessage.style.display="none";
    }
    
    else if(topic === 'trix'){
        topics.style.display="none";
        specialists.style.display= "none";
        newgirl.style.display= "none";
        dark.style.display="none";
        guitar.style.display="none";
        trix.style.display = "block";   
        unsentMessage.style.display="block";
    }
    else if(topic === 'specialists'){
        specialists.style.display="block";
        newgirl.style.display= "none";
        dark.style.display="none";
        guitar.style.display="none";
        topics.style.display = "none";
        trix.style.display = "none"
        unsentMessage.style.display="block";
    }
     else if(topic === 'newgirl'){
        specialists.style.display="none";
        newgirl.style.display= "block";
        dark.style.display="none";
        guitar.style.display="none";
        topics.style.display = "none";
        trix.style.display = "none"
        unsentMessage.style.display="block";
    }
     else if(topic === 'dark'){
        specialists.style.display="none";
        newgirl.style.display= "none";
        dark.style.display="block";
        guitar.style.display="none";
        topics.style.display = "none";
        trix.style.display = "none"
        unsentMessage.style.display="block";
    }  
     else if(topic === 'guitar'){
        specialists.style.display="none";
        newgirl.style.display= "none";
        dark.style.display="none";
        guitar.style.display="block";
        topics.style.display = "none";
        trix.style.display = "none"
        unsentMessage.style.display="block";
    }
    else {
        unsentMessage.style.display="none";
        topics.style.display = "block";
        specialists.style.display="none";
        newgirl.style.display= "block";
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

 /*COOKIES*/
 function setCookie(){
    //expiration of cookie
    var d = new Date();
    d.setTime(d.getTime() + (10 * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();

    // register cookie attributes
    var user = document.getElementById("regUser").value;
    var nia= document.getElementById("regNia").value;
    var pass= document.getElementById("regPass").value;
    var name= document.getElementById("regName").value;
    var email= document.getElementById("regEmail").value;
    var bday= document.getElementById("regBday").value;
    var id= document.getElementById("regId").value;
    var role= document.getElementById("role").value;

    // restrictions
    if(document.cookie === "" || emailTaken(email)===false){
            //actual cookie
            var cookieString= " user"+"="+user+","+"nia"+"="+nia+","+"pass"+"="+pass+","+"name"+"="+name+","+"email"+"="+email+","+
            "bday"+"="+bday+","+"id"+"="+id+","+"role"+"="+role+"SameSite=None; Secure"+expires+ ";path=/";
            document.cookie = document.cookie + cookieString;
            loggedInUser(name);
            openAlfea();
    } else{
            alert("Sorry, this email is already associated to another account.")
        }
 }

 function loggedInUser(name){
    document.getElementById("loggedInUser").innerHTML=name;
 }

function checkCookie() {
    var mail = document.getElementById("logEmail").value;
    var word = document.getElementById("logPassword").value;
    if(checkEmailPass(mail,word)===true){
        openAlfea();
    }
    if(document.cookie === "" || checkEmailPass(mail,word)===false || mail===""||word===""){
        alert("Sorry! Your email or password are incorrect.");
    }
}

function checkEmailPass(inputEmail, inputPass){
    var allcookies = document.cookie;
    cookiearray = allcookies.split(' ');
    for(var i=0; i<cookiearray.length; i++) {
        var emailSplit = cookiearray[i].split(',')[4];
        var emailValue = emailSplit.split('=')[1];

        var passSplit = cookiearray[i].split(',')[2];
        var passValue = passSplit.split('=')[1];
        
        //correct email & password
        console.log(emailValue+" // "+ passValue);
        if(emailValue === inputEmail && passValue === inputPass) {
            var nameSplit = cookiearray[i].split(',')[3];
            var name = nameSplit.split('=')[1];
            loggedInUser(name);
            return true;
        } 
        //correct email but wrong password
        else if(emailValue === inputEmail && passValue != inputPass) {
            return false;
        }
    }
    //email not found
    return false;
}


function emailTaken(email){
    var allcookies = document.cookie;   

    // Get all the cookies pairs in an array
    cookiearray = allcookies.split(' ');
    
    // Now take key value pair out of this array
    for(var i=0; i<cookiearray.length; i++) {
        //splits cookie i into all of its attributes & saves the email attribute
        var cookieSplit = cookiearray[i].split(',')[4]; 
        var emailValue = cookieSplit.split('=')[1];

        if(emailValue===email){
            return true;
        }
    }
    return false;
}

function changingRole(role) {
    var mygrades = document.getElementById('mygrades');
    var courses = document.getElementById('mycourses');
    var allstudents = document.getElementById('allstudents');
    var allgrades = document.getElementById('allgrades');
    if(role === 'Student') {
        mygrades.style.display = "block";
        allgrades.style.display = "none";
        courses.style.display = "block";
        allstudents.style.display = "none";
    }
    if(role === 'Teacher') {
        mygrades.style.display = "none";
        allgrades.style.display = "block";
        courses.style.display = "none";
        allstudents.style.display = "block";
    }
}
 
//DELETE COOKIES
//document.cookie = "user=,nia=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";

//DELETE INFO
function deleteInfo(){
    document.getElementById("register").reset();
}
  