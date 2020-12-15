
//This function changes the content of the central container
function centralChange(option) {
    var helpCenter = document.getElementById("helpCenter");
    var aboutUs = document.getElementById("aboutUs");
    var homePage = document.getElementById("homePage");
    var admissions = document.getElementById("admissions");
    var studies = document.getElementById("studies");
    var research = document.getElementById("research");
    var forum = document.getElementById("forum");
    var myCourses = document.getElementById("myCourses");
    var myGrades = document.getElementById("myGrades");
    var myStudents = document.getElementById("myStudents");

    //array of the variables and posible options (THE ORDER IS IMPORTANT)
    var arrayVars = [helpCenter,aboutUs, homePage,admissions,studies,research,forum,myCourses,myStudents,myGrades]
    var arrayOptions = ['helpCenter','aboutUs', 'homePage','admissions','studies','research','forum', 'myCourses', 'myStudents','myGrades']

    for (i=0; i<arrayOptions.length;i++){
        if(option==arrayOptions[i]){
            arrayVars[i].style.display="block";
        }else{
            arrayVars[i].style.display="none";
        }
    }
}

//LOGIN & REGISTER FUNCTIONTS
function showConfirmation(){
    var login = document.getElementById("login");
    var formBox = document.getElementById("form-box");
    
    formBox.style.display = "block";
    login.style.display = "block";
 }

function choose(mode) {
    var centralContainer = document.getElementById("centralContainer");
    var login = document.getElementById("login");
    var register = document.getElementById("register");
    if (mode === "login") {
        login.style.display = "block";
        register.style.display = "none";
    }
    if (mode === "register") {
        register.style.display = "block";
        login.style.display = "none";
    }
}

function exitLogin(){
    var formBox = document.getElementById("form-box");
    var login = document.getElementById("login");
    var register = document.getElementById("register");
    login.style.display = "none"
    register.style.display = "none"
    formBox.style.display = "none"
}

//My Courses Change
function myCoursesChange(option){
    var myCourses = document.getElementById("myCourses");
    var selfDefence = document.getElementById("selfDefence");
    var metamor = document.getElementById("metamor");
    var potionology = document.getElementById("potionology");
    var historyOfMagic = document.getElementById("historyOfMagic");

    var arrayOptions = ['selfDefence', 'metamor', 'potionology', 'historyOfMagic']
    var arrayVars = [selfDefence, metamor, potionology, historyOfMagic]
    
    if(option == 'myCourses'){
        myCourses.style.display="block"
        for (i=0; i<arrayVars.length;i++){
            arrayVars[i].style.display="none";
        }
        
    }else{
        myCourses.style.display="none"
        for (i=0; i<arrayOptions.length;i++){
            if(option==arrayOptions[i]){
                arrayVars[i].style.display="block";
            }
        }
    }
}

//My Forums Change
function forumChange(option){
    var forum = document.getElementById("forum");
    var openForum = document.getElementById("openForum");
    var forum1 = document.getElementById("forum1");
    var forum2 = document.getElementById("forum2");
    var forum3 = document.getElementById("forum3");
    var forum4 = document.getElementById("forum4");
    var forum5 = document.getElementById("forum5");
    var forum6 = document.getElementById("forum6");

    var arrayOptions = ['forum1', 'forum2', 'forum3', 'forum4', 'forum5', 'forum6']
    var arrayVars = [forum1, forum2, forum3, forum4, forum5, forum6]
    
    if(option == 'forum'){
        forum.style.display="block";
        openForum.style.display="none";
        for (i=0; i<arrayOptions.length;i++){
            if(option==arrayOptions[i]){
                arrayVars[i].style.display="none";
            }
        }
        
    }else{
        forum.style.display="none";
        openForum.style.display="block";
        for (i=0; i<arrayOptions.length;i++){
            if(option==arrayOptions[i]){
                arrayVars[i].style.display="block";
            }
        }
    }
}
//This function for the hamburger (phone)
function openHamburger() {
    var x = document.getElementById("myTopNav");
    if (x.className === "topnav") {
      x.className += "responsive";
    } else {
      x.className = "topnav";
    }
}

function sendMail(contact){
    var email = "mailto:"+contact+"@alfea.com"
   window.location.href = email;
}

  function sendMessage1(){
    txt = document.getElementById("msg1Send").value;
    document.getElementById("msg1").innerHTML = txt;
    document.getElementById("showingMessage1").style.display ="block";
    forumMessagesPage.style.display = "block";
    forumPage.style.display = "none";
  }
  function sendMessage2(){
    txt = document.getElementById("msg2Send").value;
    document.getElementById("msg2").innerHTML = txt;
    document.getElementById("showingMessage2").style.display ="block";
  }
  function sendMessage3(){
    txt = document.getElementById("msg3Send").value;
    document.getElementById("msg3").innerHTML = txt;
    document.getElementById("showingMessage3").style.display ="block";
  }
  function sendMessage4(){
    txt = document.getElementById("msg4Send").value;
    document.getElementById("msg4").innerHTML = txt;
    document.getElementById("showingMessage4").style.display ="block";
  }
  function sendMessage5(){
    txt = document.getElementById("msg5Send").value;
    document.getElementById("msg5").innerHTML = txt;
    document.getElementById("showingMessage5").style.display ="block";
  }
  function sendMessage6(){
    txt = document.getElementById("msg6Send").value;
    document.getElementById("msg6").innerHTML = txt;
    document.getElementById("showingMessage6").style.display ="block";
  }

  function changeGrade(context){
    if (context == "Act1Bloom"){
        var changeGrade = document.getElementById("numberGradeChangesAct1Bloom");
        changeGrade.style.display = "block";
    }
    if (context == "Act2Bloom"){
        var changeGrade = document.getElementById("numberGradeChangesAct2Bloom");
        changeGrade.style.display = "block";
    }
    if (context == "Act3Bloom"){
        var changeGrade = document.getElementById("numberGradeChangesAct3Bloom");
        changeGrade.style.display = "block";
    }
    if (context == "Act4Bloom"){
        var changeGrade = document.getElementById("numberGradeChangesAct4Bloom");
        changeGrade.style.display = "block";
    }

    if (context == "Act1Tecna"){
        var changeGrade = document.getElementById("numberGradeChangesAct1Tecna");
        changeGrade.style.display = "block";
    }
    if (context == "Act2Tecna"){
        var changeGrade = document.getElementById("numberGradeChangesAct2Tecna");
        changeGrade.style.display = "block";
    }
    if (context == "Act3Tecna"){
        var changeGrade = document.getElementById("numberGradeChangesAct3Tecna");
        changeGrade.style.display = "block";
    }
    if (context == "Act4Tecna"){
        var changeGrade = document.getElementById("numberGradeChangesAct4Tecna");
        changeGrade.style.display = "block";
    }
    

    if (context == "Act1Stella"){
        var changeGrade = document.getElementById("numberGradeChangesAct1Stella");
        changeGrade.style.display = "block";
    }
    if (context == "Act2Stella"){
        var changeGrade = document.getElementById("numberGradeChangesAct2Stella");
        changeGrade.style.display = "block";
    }
    if (context == "Act3Stella"){
        var changeGrade = document.getElementById("numberGradeChangesAct3Stella");
        changeGrade.style.display = "block";
    }
    if (context == "Act4Stella"){
        var changeGrade = document.getElementById("numberGradeChangesAct4Stella");
        changeGrade.style.display = "block";
    }

    
  }

 function finishEditingGrade(context){ 

    if (context == "Act1Bloom"){
        txt = document.getElementById("gradesAct1Bloom").value;
        document.getElementById("numberGradeNoChangesAct1Bloom").innerHTML = txt;
        var changeGrade = document.getElementById("numberGradeChangesAct1Bloom");
        changeGrade.style.display = "none"
    }

    if (context == "Act2Bloom"){
        txt = document.getElementById("gradesAct2Bloom").value;
        document.getElementById("numberGradeNoChangesAct2Bloom").innerHTML = txt;
        var changeGrade = document.getElementById("numberGradeChangesAct2Bloom");
        changeGrade.style.display = "none"
    }
    if (context == "Act3Bloom"){
        txt = document.getElementById("gradesAct3Bloom").value;
        document.getElementById("numberGradeNoChangesAct3Bloom").innerHTML = txt;
        var changeGrade = document.getElementById("numberGradeChangesAct3Bloom");
        changeGrade.style.display = "none"
    }

    if (context == "Act4Bloom"){
        txt = document.getElementById("gradesAct4Bloom").value;
        document.getElementById("numberGradeNoChangesAct4Bloom").innerHTML = txt;
        var changeGrade = document.getElementById("numberGradeChangesAct4Bloom");
        changeGrade.style.display = "none"
    }

    if (context == "Act1Tecna"){
        txt = document.getElementById("gradesAct1Tecna").value;
        document.getElementById("numberGradeNoChangesAct1Tecna").innerHTML = txt;
        var changeGrade = document.getElementById("numberGradeChangesAct1Tecna");
        changeGrade.style.display = "none"
    }

    if (context == "Act2Tecna"){
        txt = document.getElementById("gradesAct2Tecna").value;
        document.getElementById("numberGradeNoChangesAct2Tecna").innerHTML = txt;
        var changeGrade = document.getElementById("numberGradeChangesAct2Tecna");
        changeGrade.style.display = "none"
    }
    if (context == "Act3Tecna"){
        txt = document.getElementById("gradesAct3Tecna").value;
        document.getElementById("numberGradeNoChangesAct3Tecna").innerHTML = txt;
        var changeGrade = document.getElementById("numberGradeChangesAct3Tecna");
        changeGrade.style.display = "none"
    }

    if (context == "Act4Tecna"){
        txt = document.getElementById("gradesAct4Tecna").value;
        document.getElementById("numberGradeNoChangesAct4Tecna").innerHTML = txt;
        var changeGrade = document.getElementById("numberGradeChangesAct4Tecna");
        changeGrade.style.display = "none"
    }

    
    if (context == "Act1Stella"){
        txt = document.getElementById("gradesAct1Stella").value;
        document.getElementById("numberGradeNoChangesAct1Stella").innerHTML = txt;
        var changeGrade = document.getElementById("numberGradeChangesAct1Stella");
        changeGrade.style.display = "none"
    }

    if (context == "Act2Stella"){
        txt = document.getElementById("gradesAct2Stella").value;
        document.getElementById("numberGradeNoChangesAct2Tecna").innerHTML = txt;
        var changeGrade = document.getElementById("numberGradeChangesAct2Tecna");
        changeGrade.style.display = "none"
    }
    if (context == "Act3Stella"){
        txt = document.getElementById("gradesAct3Stella").value;
        document.getElementById("numberGradeNoChangesAct3Stella").innerHTML = txt;
        var changeGrade = document.getElementById("numberGradeChangesAct3Stella");
        changeGrade.style.display = "none"
    }

    if (context == "Act4Stella"){
        txt = document.getElementById("gradesAct4Stella").value;
        document.getElementById("numberGradeNoChangesAct4Stella").innerHTML = txt;
        var changeGrade = document.getElementById("numberGradeChangesAct4Stella");
        changeGrade.style.display = "none"
    }
 }

 
  