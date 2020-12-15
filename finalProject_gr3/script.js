
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
    var metamor = document.getElementById("metamor");
    var potionology = document.getElementById("potionology");
    var selfDefence = document.getElementById("selfDefence");
    var historyOfMagic = document.getElementById("historyOfMagic");
    var openForumMessages = document.getElementById("openForumMessages");
    var openForumMessages1 = document.getElementById("openForumMessages1");
    var openForumMessages2 = document.getElementById("openForumMessages2");
    var openForumMessages3 = document.getElementById("openForumMessages3");
    var openForumMessages4 = document.getElementById("openForumMessages4");
    var openForumMessages5 = document.getElementById("openForumMessages5");
    var openForumMessages6 = document.getElementById("openForumMessages6");
    var gradesBloom = document.getElementById("gradesBloom");
    var gradesTecna = document.getElementById("gradesTecna");
    var gradesStella = document.getElementById("gradesTecna");

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
    metamor.style.display = "none";
    potionology.style.display = "none";
    selfDefence.style.display = "none";
    historyOfMagic.style.display = "none";
    openForumMessages.style.display = "none";
    openForumMessages1.style.display = "none";
    openForumMessages2.style.display = "none";
    openForumMessages3.style.display = "none";
    openForumMessages4.style.display = "none";
    openForumMessages4.style.display = "none";
    openForumMessages5.style.display = "none";
    openForumMessages6.style.display = "none";

    gradesBloom.style.display = "none";
    gradesTecna.style.display = "none";
    gradesStella.style.display = "none";

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
    if (content == "metamor"){
        metamor.style.display = "block";
    }
    if (content == "potionology"){
        potionology.style.display = "block";
    }
    if (content == "selfDefence"){
        selfDefence.style.display = "block";
    }
    if (content == "historyOfMagic"){
        historyOfMagic.style.display = "block";
    }

    if (content == "gradesBloom"){
        gradesBloom.style.display = "block";
    }
    if (content == "gradesTecna"){
        gradesTecna.style.display = "block";
    }
    if (content == "gradesStella"){
        gradesStella.style.display = "block";
    }

    if (content == "openForumMessages1"){
        openForumMessages.style.display = "block";
        openForumMessages1.style.display = "block";
    }
    if (content == "openForumMessages2"){
        openForumMessages.style.display = "block";
        openForumMessages2.style.display = "block";
    }
    if (content == "openForumMessages3"){
        openForumMessages.style.display = "block";
        openForumMessages3.style.display = "block";
    }
    if (content == "openForumMessages4"){
        openForumMessages.style.display = "block";
        openForumMessages4.style.display = "block";
    }
    if (content == "openForumMessages5"){
        openForumMessages.style.display = "block";
        openForumMessages5.style.display = "block";
    }
    if (content == "openForumMessages6"){
        openForumMessages.style.display = "block";
        openForumMessages6.style.display = "block";
    }

}
//This function for the humburger (phone)
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
  