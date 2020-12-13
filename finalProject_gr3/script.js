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

    homePage.style.display = "none";
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

    if (content == "homePage") {
        homePage.style.display = "block";
    }
    if (content == "aboutUs") {
        aboutUs.style.display = "block";
    }
    if (content == "helpCenter") {
        helpCenter.style.display = "block";
    }
    if (content == "admissions") {
        admissions.style.display = "block";
    }
    if (content == "studies") {
        studies.style.display = "block";
    }
    if (content == "research") {
        research.style.display = "block";
    }
    if (content == "myCourses") {
        myCourses.style.display = "block";
    }
    if (content == "myGrades") {
        myGrades.style.display = "block";
    }
    if (content == "forum") {
        forum.style.display = "block";
    }
    if (content == "grades") {
        grades.style.display = "block";
    }
    if (content == "myStudents") {
        myStudents.style.display = "block";
    }
    if (content == "metamor") {
        metamor.style.display = "block";
    }
    if (content == "potionology") {
        potionology.style.display = "block";
    }
    if (content == "selfDefence") {
        selfDefence.style.display = "block";
    }
    if (content == "historyOfMagic") {
        historyOfMagic.style.display = "block";
    }
    if (content == "openForumMessages1") {
        openForumMessages.style.display = "block";
        openForumMessages1.style.display = "block";
    }
    if (content == "openForumMessages2") {
        openForumMessages.style.display = "block";
        openForumMessages2.style.display = "block";
    }
    if (content == "openForumMessages3") {
        openForumMessages.style.display = "block";
        openForumMessages3.style.display = "block";
    }
    if (content == "openForumMessages4") {
        openForumMessages.style.display = "block";
        openForumMessages4.style.display = "block";
    }
    if (content == "openForumMessages5") {
        openForumMessages.style.display = "block";
        openForumMessages5.style.display = "block";
    }
    if (content == "openForumMessages6") {
        openForumMessages.style.display = "block";
        openForumMessages6.style.display = "block";
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

function sendMail(contact) {
    var email = "mailto:" + contact + "@alfea.com"
    window.location.href = email;
}

function sendMessage1() {
    txt = document.getElementById("msg1Send").value;
    document.getElementById("msg1").innerHTML = txt;
    document.getElementById("showingMessage1").style.display = "block";
    forumMessagesPage.style.display = "block";
    forumPage.style.display = "none";
}

function sendMessage2() {
    txt = document.getElementById("msg2Send").value;
    document.getElementById("msg2").innerHTML = txt;
    document.getElementById("showingMessage2").style.display = "block";
}

function sendMessage3() {
    txt = document.getElementById("msg3Send").value;
    document.getElementById("msg3").innerHTML = txt;
    document.getElementById("showingMessage3").style.display = "block";
}

function sendMessage4() {
    txt = document.getElementById("msg4Send").value;
    document.getElementById("msg4").innerHTML = txt;
    document.getElementById("showingMessage4").style.display = "block";
}

function sendMessage5() {
    txt = document.getElementById("msg5Send").value;
    document.getElementById("msg5").innerHTML = txt;
    document.getElementById("showingMessage5").style.display = "block";
}

function sendMessage6() {
    txt = document.getElementById("msg6Send").value;
    document.getElementById("msg6").innerHTML = txt;
    document.getElementById("showingMessage6").style.display = "block";
}