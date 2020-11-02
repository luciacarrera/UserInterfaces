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

// Function to close Alfea's webpage
function closeAlfea() {
    var x = document.getElementById("container").style.display = "none";
    var y = document.getElementById("homepage").style.display = "block";
}

// Function to confirm exit when logout
function showConfirmation() {
    var confirmation = confirm("Do you want to exit from Alfea?");
    if (confirmation) {
        closeAlfea();
    }  
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
    if(document.cookie == "" || !emailTaken(email)){
            //actual cookie
            var cookieString= " user"+"="+user+","+"nia"+"="+nia+","+"pass"+"="+pass+","+"name"+"="+name+","+"email"+"="+email+","+
            "bday"+"="+bday+","+"id"+"="+id+","+"role"+"="+role+';'+expires+ ";path=/";
            //""+"="++","+
            document.cookie = document.cookie + cookieString;
            openAlfea();
    } else{
            alert("Sorry, this email is already associated to another account.")
        }
 }

function lookCookie() {
    var d = new Date();
    d.setTime(d.getTime() + (10 * 24 * 60 * 60 * 1000));
    var expires = "expires = "+d.toUTCString();

    var mail = document.getElementById("logEmail").value;
    var word = document.getElementById("logPassword").value;
    if(document.cookie == ""){
        alert("Sorry! Your email or password are incorrect.");
    }
    var allcookies = document.cookie;
    cookiearray = allcookies.split(';');
    for(var i=0; i<cookiearray.length; i++) {
        var emailSplit = cookiearray[i].split(',')[4];
        var emailValue = emailSplit.split('=')[1];
        var passSplit = cookiearray[i].split(',')[2];
        var passValue = passSplit.split('=')[1];
        
        if(emailValue == mail && passValue == word) {
            openAlfea();
        } else {
            alert("Sorry! Your email or password are incorrect.");
        }
    }
}
    function emailTaken(email){
        var allcookies = document.cookie;        
        // Get all the cookies pairs in an array
        cookiearray = allcookies.split(';');
        
        // Now take key value pair out of this array
        for(var i=0; i<cookiearray.length; i++) {
           var emailSplit = cookiearray[i].split(',')[4];
           var emailValue = emailSplit.split('=')[1];
           //console.log(emailSplit+"//"+emailValue +"//"+ email);

           if(emailValue==email){
               return true;
           }
        }
        return false;
    }
 
//DELETE COOKIES
//document.cookie = "user=,nia=;expires=Thu, 01 Jan 1970 00:00:00 UTC;";

//DELETE INFO
function deleteInfo(){
    document.getElementById("register").reset();
}
  