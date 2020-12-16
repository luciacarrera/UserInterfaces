//Synonym to $(document).ready(function() {:
document.addEventListener('DOMContentLoaded', function() {
    //CENTRAL CONTAINER
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

    var selfDefence = document.getElementById("selfDefence");
    var metamor = document.getElementById("metamor");
    var potionology = document.getElementById("potionology");
    var historyOfMagic = document.getElementById("historyOfMagic");

    var gradesBloom = document.getElementById("gradesBloom");
    var gradesTecna = document.getElementById("gradesTecna");
    var gradesStella = document.getElementById("gradesStella");
    var gradesKimmy = document.getElementById("gradesKimmy");
    var gradesLayla = document.getElementById("gradesLayla");
    var gradesFlora = document.getElementById("gradesFlora");
    var gradesMusa = document.getElementById("gradesMusa");
    var gradesRoxy = document.getElementById("gradesRoxy");
    var gradesDaphne = document.getElementById("gradesDaphne");
    var gradesAisha = document.getElementById("gradesAisha");

    var openForum = document.getElementById("openForum");
    var forum1 = document.getElementById("forum1");
    var forum2 = document.getElementById("forum2");
    var forum3 = document.getElementById("forum3");
    var forum4 = document.getElementById("forum4");
    var forum5 = document.getElementById("forum5");
    var forum6 = document.getElementById("forum6");


    //Can disturb disturb
    var openForum = document.getElementById("openForum");
    openForum.style.display="none";
    //array of the variables and posible options (THE ORDER IS IMPORTANT)
    var arrayVars = [helpCenter,aboutUs, homePage,admissions,studies,research,forum,myCourses,myStudents,myGrades];
    var arrayOptions = ['helpCenter','aboutUs', 'homePage','admissions','studies','research','forum', 'myCourses', 'myStudents','myGrades'];

    for (i=0; i<arrayOptions.length;i++){
        if(option==arrayOptions[i]){
            arrayVars[i].style.display="block";
        }else{
            arrayVars[i].style.display="none";
        }

    }

    //If, we are inside a course and click on any other site, all the courses must close
    var arrayCourses = [selfDefence, metamor, potionology, historyOfMagic];
    var arrayCoursesOptions = ['selfDefence','metamor', 'potionology','historyOfMagic'];

    for (i=0; i<arrayCoursesOptions.length;i++){
        if (arrayCourses[i].style.display = "block"){
            arrayCourses[i].style.display = "none";
        }
    }

    //If, we are inside grades of my students and click on any other site, the grades of the student that we are in must close
    var arrayGradesStudentsOptions = ['gradesBloom', 'gradesTecna', 'gradesStella', 'gradesKimmy', 'gradesLayla', 'gradesFlora', 'gradesMusa', 'gradesRoxy', 'gradesDaphne', 'gradesAisha']
    var arrayGradesStudents = [gradesBloom, gradesTecna, gradesStella, gradesKimmy,gradesLayla ,gradesFlora ,gradesMusa ,gradesRoxy ,gradesDaphne ,gradesAisha ]
    
    for (i=0; i<arrayGradesStudentsOptions.length;i++){
        if (arrayGradesStudents[i].style.display = "block"){
            arrayGradesStudents[i].style.display = "none";
        }
    }    
    var arrayForumOptions = ['forum1', 'forum2', 'forum3', 'forum4', 'forum5', 'forum6']
    var arrayForum = [forum1, forum2, forum3, forum4, forum5, forum6]
    for (i=0; i<arrayForumOptions.length;i++){
        if (arrayForum[i].style.display = "block"){
            arrayForum[i].style.display = "none";
        }
    } 
}

//LOGIN & REGISTER FUNCTIONTS
function openForm(){
    var login = document.getElementById("login");
    var formBox = document.getElementById("form-box");
    
    formBox.style.display = "block";
    login.style.display = "block";
 }

function choose(mode) {
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

//My Students Change
function myStudentsChangeGrade(option){

    var gradesBloom = document.getElementById("gradesBloom");
    var gradesTecna = document.getElementById("gradesTecna");
    var gradesStella = document.getElementById("gradesStella");
    var gradesKimmy = document.getElementById("gradesKimmy");
    var gradesLayla = document.getElementById("gradesLayla");
    var gradesFlora = document.getElementById("gradesFlora");
    var gradesMusa = document.getElementById("gradesMusa");
    var gradesRoxy = document.getElementById("gradesRoxy");
    var gradesDaphne = document.getElementById("gradesDaphne");
    var gradesAisha = document.getElementById("gradesAisha");

    var arrayOptions = ['gradesBloom', 'gradesTecna', 'gradesStella', 'gradesKimmy', 'gradesLayla', 'gradesFlora', 'gradesMusa', 'gradesRoxy', 'gradesDaphne', 'gradesAisha']
    var arrayVars = [gradesBloom, gradesTecna, gradesStella, gradesKimmy,gradesLayla ,gradesFlora ,gradesMusa ,gradesRoxy ,gradesDaphne ,gradesAisha ]
    
    if(option == 'myStudents'){
        myStudents.style.display="block";
        for (i=0; i<arrayVars.length;i++){
            arrayVars[i].style.display="none";
        }
        
    }else{
        myStudents.style.display="none"
        for (i=0; i<arrayOptions.length;i++){
            if(option==arrayOptions[i]){
                arrayVars[i].style.display="block";
            }
        }
    }
}

//My students Grades Change
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
      for (i=0; i<arrayOptions.length;i++){
        if (arrayVars[i].style.display = "block"){
            arrayVars[i].style.display = "none";
        }
        forum.style.display = "block"
        openForum.style.display = "none"
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
    if (context == "Act1Kimmy"){
        var changeGrade = document.getElementById("numberGradeChangesAct1Kimmy");
        changeGrade.style.display = "block";
    }
    if (context == "Act2Kimmy"){
        var changeGrade = document.getElementById("numberGradeChangesAct2Kimmy");
        changeGrade.style.display = "block";
    }
    if (context == "Act3Kimmy"){
        var changeGrade = document.getElementById("numberGradeChangesAct3Kimmy");
        changeGrade.style.display = "block";
    }
    if (context == "Act4Kimmy"){
        var changeGrade = document.getElementById("numberGradeChangesAct4Kimmy");
        changeGrade.style.display = "block";
    }
    if (context == "Act1Layla"){
        var changeGrade = document.getElementById("numberGradeChangesAct1Layla");
        changeGrade.style.display = "block";
    }
    if (context == "Act2Layla"){
        var changeGrade = document.getElementById("numberGradeChangesAct2Layla");
        changeGrade.style.display = "block";
    }
    if (context == "Act3Layla"){
        var changeGrade = document.getElementById("numberGradeChangesAct3Layla");
        changeGrade.style.display = "block";
    }
    if (context == "Act4Layla"){
        var changeGrade = document.getElementById("numberGradeChangesAct4Layla");
        changeGrade.style.display = "block";
    }
    if (context == "Act1Flora"){
        var changeGrade = document.getElementById("numberGradeChangesAct1Flora");
        changeGrade.style.display = "block";
    }

    if (context == "Act2Flora"){
        var changeGrade = document.getElementById("numberGradeChangesAct2Flora");
        changeGrade.style.display = "block";
    }

    if (context == "Act3Flora"){
        var changeGrade = document.getElementById("numberGradeChangesAct3Flora");
        changeGrade.style.display = "block";
    }

    if (context == "Act4Flora"){
        var changeGrade = document.getElementById("numberGradeChangesAct4Flora");
        changeGrade.style.display = "block";
    }

    if (context == "Act1Musa"){
        var changeGrade = document.getElementById("numberGradeChangesAct1Musa");
        changeGrade.style.display = "block";
    }
    if (context == "Act2Musa"){
        var changeGrade = document.getElementById("numberGradeChangesAct2Musa");
        changeGrade.style.display = "block";
    }
    if (context == "Act3Musa"){
        var changeGrade = document.getElementById("numberGradeChangesAct3Musa");
        changeGrade.style.display = "block";
    }
    if (context == "Act4Musa"){
        var changeGrade = document.getElementById("numberGradeChangesAct4Musa");
        changeGrade.style.display = "block";
    }
    if (context == "Act1Roxy"){
        var changeGrade = document.getElementById("numberGradeChangesAct1Roxy");
        changeGrade.style.display = "block";
    }
    if (context == "Act2Roxy"){
        var changeGrade = document.getElementById("numberGradeChangesAct2Roxy");
        changeGrade.style.display = "block";
    }
    if (context == "Act3Roxy"){
        var changeGrade = document.getElementById("numberGradeChangesAct3Roxy");
        changeGrade.style.display = "block";
    }
    if (context == "Act4Roxy"){
        var changeGrade = document.getElementById("numberGradeChangesAct4Roxy");
        changeGrade.style.display = "block";
    }

    if (context == "Act1Daphne"){
        var changeGrade = document.getElementById("numberGradeChangesAct1Daphne");
        changeGrade.style.display = "block";
    }
    if (context == "Act2Daphne"){
        var changeGrade = document.getElementById("numberGradeChangesAct2Daphne");
        changeGrade.style.display = "block";
    }
    if (context == "Act3Daphne"){
        var changeGrade = document.getElementById("numberGradeChangesAct3Daphne");
        changeGrade.style.display = "block";
    }
    if (context == "Act4Daphne"){
        var changeGrade = document.getElementById("numberGradeChangesAct4Daphne");
        changeGrade.style.display = "block";
    }
    if (context == "Act1Aisha"){
        var changeGrade = document.getElementById("numberGradeChangesAct1Aisha");
        changeGrade.style.display = "block";
    }
    if (context == "Act2Aisha"){
        var changeGrade = document.getElementById("numberGradeChangesAct2Aisha");
        changeGrade.style.display = "block";
    }
    if (context == "Act3Aisha"){
        var changeGrade = document.getElementById("numberGradeChangesAct3Aisha");
        changeGrade.style.display = "block";
    }
    if (context == "Act4Aisha"){
        var changeGrade = document.getElementById("numberGradeChangesAct4Aisha");
        changeGrade.style.display = "block";
    }

    
  }
  function noChangeGrade(context){
    if (context == "Act1Bloom"){
        var changeGrade = document.getElementById("numberGradeChangesAct1Bloom");
        changeGrade.style.display = "none";
    }
    if (context == "Act2Bloom"){
        var changeGrade = document.getElementById("numberGradeChangesAct2Bloom");
        changeGrade.style.display = "none";
    }
    if (context == "Act3Bloom"){
        var changeGrade = document.getElementById("numberGradeChangesAct3Bloom");
        changeGrade.style.display = "none";
    }
    if (context == "Act4Bloom"){
        var changeGrade = document.getElementById("numberGradeChangesAct4Bloom");
        changeGrade.style.display = "none";
    }

    if (context == "Act1Tecna"){
        var changeGrade = document.getElementById("numberGradeChangesAct1Tecna");
        changeGrade.style.display = "none";
    }
    if (context == "Act2Tecna"){
        var changeGrade = document.getElementById("numberGradeChangesAct2Tecna");
        changeGrade.style.display = "none";
    }
    if (context == "Act3Tecna"){
        var changeGrade = document.getElementById("numberGradeChangesAct3Tecna");
        changeGrade.style.display = "none";
    }
    if (context == "Act4Tecna"){
        var changeGrade = document.getElementById("numberGradeChangesAct4Tecna");
        changeGrade.style.display = "none";
    }
    

    if (context == "Act1Stella"){
        var changeGrade = document.getElementById("numberGradeChangesAct1Stella");
        changeGrade.style.display = "none";
    }
    if (context == "Act2Stella"){
        var changeGrade = document.getElementById("numberGradeChangesAct2Stella");
        changeGrade.style.display = "none";
    }
    if (context == "Act3Stella"){
        var changeGrade = document.getElementById("numberGradeChangesAct3Stella");
        changeGrade.style.display = "none";
    }
    if (context == "Act4Stella"){
        var changeGrade = document.getElementById("numberGradeChangesAct4Stella");
        changeGrade.style.display = "none";
    }

    if (context == "Act1Kimmy"){
        var changeGrade = document.getElementById("numberGradeChangesAct1Kimmy");
        changeGrade.style.display = "none";
    }
    if (context == "Act2Kimmy"){
        var changeGrade = document.getElementById("numberGradeChangesAct2Kimmy");
        changeGrade.style.display = "none";
    }
    if (context == "Act3Kimmy"){
        var changeGrade = document.getElementById("numberGradeChangesAct3Kimmy");
        changeGrade.style.display = "none";
    }
    if (context == "Act4Kimmy"){
        var changeGrade = document.getElementById("numberGradeChangesAct4Kimmy");
        changeGrade.style.display = "none";
    }
    if (context == "Act1Layla"){
        var changeGrade = document.getElementById("numberGradeChangesAct1Layla");
        changeGrade.style.display = "none";
    }
    if (context == "Act2Layla"){
        var changeGrade = document.getElementById("numberGradeChangesAct2Layla");
        changeGrade.style.display = "none";
    }
    if (context == "Act3Layla"){
        var changeGrade = document.getElementById("numberGradeChangesAct3Layla");
        changeGrade.style.display = "none";
    }
    if (context == "Act4Layla"){
        var changeGrade = document.getElementById("numberGradeChangesAct4Layla");
        changeGrade.style.display = "none";
    }
    if (context == "Act1Flora"){
        var changeGrade = document.getElementById("numberGradeChangesAct1Flora");
        changeGrade.style.display = "block";
    }

    if (context == "Act2Flora"){
        var changeGrade = document.getElementById("numberGradeChangesAct2Flora");
        changeGrade.style.display = "none";
    }

    if (context == "Act3Flora"){
        var changeGrade = document.getElementById("numberGradeChangesAct3Flora");
        changeGrade.style.display = "none";
    }

    if (context == "Act4Flora"){
        var changeGrade = document.getElementById("numberGradeChangesAct4Flora");
        changeGrade.style.display = "none";
    }
    if (context == "Act1Musa"){
        var changeGrade = document.getElementById("numberGradeChangesAct1Musa");
        changeGrade.style.display = "none";
    }
    if (context == "Act2Musa"){
        var changeGrade = document.getElementById("numberGradeChangesAct2Musa");
        changeGrade.style.display = "none";
    }
    if (context == "Act3Musa"){
        var changeGrade = document.getElementById("numberGradeChangesAct3Musa");
        changeGrade.style.display = "none";
    }
    if (context == "Act4Musa"){
        var changeGrade = document.getElementById("numberGradeChangesAct4Musa");
        changeGrade.style.display = "none";
    }
    if (context == "Act1Roxy"){
        var changeGrade = document.getElementById("numberGradeChangesAct1Roxy");
        changeGrade.style.display = "none";
    }
    if (context == "Act2Roxy"){
        var changeGrade = document.getElementById("numberGradeChangesAct2Roxy");
        changeGrade.style.display = "none";
    }
    if (context == "Act3Roxy"){
        var changeGrade = document.getElementById("numberGradeChangesAct3Roxy");
        changeGrade.style.display = "none";
    }
    if (context == "Act4Roxy"){
        var changeGrade = document.getElementById("numberGradeChangesAct4Roxy");
        changeGrade.style.display = "none";
    }
    if (context == "Act1Daphne"){
        var changeGrade = document.getElementById("numberGradeChangesAct1Daphne");
        changeGrade.style.display = "none";
    }
    if (context == "Act2Daphne"){
        var changeGrade = document.getElementById("numberGradeChangesAct2Daphne");
        changeGrade.style.display = "none";
    }
    if (context == "Act3Daphne"){
        var changeGrade = document.getElementById("numberGradeChangesAct3Daphne");
        changeGrade.style.display = "none";
    }
    if (context == "Act4Daphne"){
        var changeGrade = document.getElementById("numberGradeChangesAct4Daphne");
        changeGrade.style.display = "none";
    }
    if (context == "Act1Aisha"){
        var changeGrade = document.getElementById("numberGradeChangesAct1Aisha");
        changeGrade.style.display = "none";
    }
    if (context == "Act2Aisha"){
        var changeGrade = document.getElementById("numberGradeChangesAct2Aisha");
        changeGrade.style.display = "none";
    }
    if (context == "Act3Aisha"){
        var changeGrade = document.getElementById("numberGradeChangesAct3Aisha");
        changeGrade.style.display = "none";
    }
    if (context == "Act4Aisha"){
        var changeGrade = document.getElementById("numberGradeChangesAct4Aisha");
        changeGrade.style.display = "none";
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
        document.getElementById("numberGradeNoChangesAct2Stella").innerHTML = txt;
        var changeGrade = document.getElementById("numberGradeChangesAct2Stella");
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
    if (context == "Act1Musa"){
        txt = document.getElementById("gradesAct1Musa").value;
        document.getElementById("numberGradeNoChangesAct1Musa").innerHTML = txt;
        var changeGrade = document.getElementById("numberGradeChangesAct1Musa");
        changeGrade.style.display = "none"
    }

    if (context == "Act2Musa"){
        txt = document.getElementById("gradesAct2Musa").value;
        document.getElementById("numberGradeNoChangesAct2Musa").innerHTML = txt;
        var changeGrade = document.getElementById("numberGradeChangesAct2Musa");
        changeGrade.style.display = "none"
    }
    if (context == "Act3Musa"){
        txt = document.getElementById("gradesAct3Musa").value;
        document.getElementById("numberGradeNoChangesAct3Musa").innerHTML = txt;
        var changeGrade = document.getElementById("numberGradeChangesAct3Musa");
        changeGrade.style.display = "none"
    }

    if (context == "Act4Musa"){
        txt = document.getElementById("gradesAct4Musa").value;
        document.getElementById("numberGradeNoChangesAct4Musa").innerHTML = txt;
        var changeGrade = document.getElementById("numberGradeChangesAct4Musa");
        changeGrade.style.display = "none"
    }
    if (context == "Act1Roxy"){
        txt = document.getElementById("gradesAct1Roxy").value;
        document.getElementById("numberGradeNoChangesAct1Roxy").innerHTML = txt;
        var changeGrade = document.getElementById("numberGradeChangesAct1Roxy");
        changeGrade.style.display = "none"
    }
    if (context == "Act2Roxy"){
        txt = document.getElementById("gradesAct2Roxy").value;
        document.getElementById("numberGradeNoChangesAct2Roxy").innerHTML = txt;
        var changeGrade = document.getElementById("numberGradeChangesAct2Roxy");
        changeGrade.style.display = "none"
    }
    if (context == "Act3Roxy"){
        txt = document.getElementById("gradesAct3Roxy").value;
        document.getElementById("numberGradeNoChangesAct3Roxy").innerHTML = txt;
        var changeGrade = document.getElementById("numberGradeChangesAct3Roxy");
        changeGrade.style.display = "none"
    }
    if (context == "Act4Roxy"){
        txt = document.getElementById("gradesAct4Roxy").value;
        document.getElementById("numberGradeNoChangesAct4Roxy").innerHTML = txt;
        var changeGrade = document.getElementById("numberGradeChangesAct4Roxy");
        changeGrade.style.display = "none"
    }

    if (context == "Act1Daphne"){
        txt = document.getElementById("gradesAct1Daphne").value;
        document.getElementById("numberGradeNoChangesAct1Daphne").innerHTML = txt;
        var changeGrade = document.getElementById("numberGradeChangesAct1Daphne");
        changeGrade.style.display = "none"
    }
    if (context == "Act2Daphne"){
        txt = document.getElementById("gradesAct2Daphne").value;
        document.getElementById("numberGradeNoChangesAct2Daphne").innerHTML = txt;
        var changeGrade = document.getElementById("numberGradeChangesAct2Daphne");
        changeGrade.style.display = "none"
    }
    if (context == "Act3Daphne"){
        txt = document.getElementById("gradesAct3Daphne").value;
        document.getElementById("numberGradeNoChangesAct3Daphne").innerHTML = txt;
        var changeGrade = document.getElementById("numberGradeChangesAct3Daphne");
        changeGrade.style.display = "none"
    }
    if (context == "Act4Daphne"){
        txt = document.getElementById("gradesAct4Daphne").value;
        document.getElementById("numberGradeNoChangesAct4Daphne").innerHTML = txt;
        var changeGrade = document.getElementById("numberGradeChangesAct4Daphne");
        changeGrade.style.display = "none"
    }


    if (context == "Act1Aisha"){
        txt = document.getElementById("gradesAct1Aisha").value;
        document.getElementById("numberGradeNoChangesAct1Aisha").innerHTML = txt;
        var changeGrade = document.getElementById("numberGradeChangesAct1Aisha");
        changeGrade.style.display = "none"
    }
    if (context == "Act2Aisha"){
        txt = document.getElementById("gradesAct2Aisha").value;
        document.getElementById("numberGradeNoChangesAct2Aisha").innerHTML = txt;
        var changeGrade = document.getElementById("numberGradeChangesAct2Aisha");
        changeGrade.style.display = "none"
    }
    if (context == "Act3Aisha"){
        txt = document.getElementById("gradesAct3Aisha").value;
        document.getElementById("numberGradeNoChangesAct3Aisha").innerHTML = txt;
        var changeGrade = document.getElementById("numberGradeChangesAct3Aisha");
        changeGrade.style.display = "none"
    }
    if (context == "Act4Aisha"){
        txt = document.getElementById("gradesAct4Aisha").value;
        document.getElementById("numberGradeNoChangesAct4Aisha").innerHTML = txt;
        var changeGrade = document.getElementById("numberGradeChangesAct4Aisha");
        changeGrade.style.display = "none"
    }

 }
/*COOKIES*/
function setCookie(){
    //expiration of cookie
    var d = new Date();
    d.setTime(d.getTime() + (10 * 24 * 60 * 60 * 10000));
    var expires = "expires="+d.toUTCString();

    // register cookie attributes
    var user = document.getElementById("regUser").value;
    var pass= document.getElementById("regPass").value;
    var name= document.getElementById("regName").value;
    var email= document.getElementById("regEmail").value;
    var bday= document.getElementById("regBday").value;
    var id= document.getElementById("regId").value;
    var role= document.getElementById("role").value;

    // restrictions
    if(document.cookie == "" || emailTaken(email)==false){
            //actual cookie
            var cookieString= " user"+"="+user+","+"pass"+"="+pass+","+"name"+"="+name+","+"email"+"="+email+","+
            "bday"+"="+bday+","+"id"+"="+id+","+"role"+"="+role+"SameSite=None; Secure"+expires+ ";path=/";
            document.cookie = document.cookie + cookieString;
            loggedInUser(name);
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
    }
    else if(document.cookie === "" || checkEmailPass(mail,word)===false || mail===""||word===""){
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
    var sideBarNotLogin = document.getElementById("sideBarNotLogin");
    var sideBarStudent = document.getElementById("sideBarLoginStudent");
    var sideBarTeacher = document.getElementById("sideBarLoginTeacher");

    if(role === 'Student') {
        sideBarStudent.style.display = "block";
        sideBarTeacher.style.display = "none";
        sideBarNotLogin.style.display = "none";
    }
    if(role === 'Teacher' || role === 'Administrator') {
        sideBarStudent.style.display = "none";
        sideBarTeacher.style.display = "block";
        sideBarNotLogin.style.display = "none";
    }
}

function roleOptions(role){
    if(role == 'student'){
        document.getElementById("studentOptions").style.display  = "block";
        document.getElementById("degree").style.display  = "block";
    }else{
        document.getElementById("studentOptions").style.display  = "none";
        document.getElementById("degree").style.display  = "none";
    }
}
//DELETE COOKIES
//document.cookie = "user=,nia=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";

 
  