//Synonym to $(document).ready(function() {:
document.addEventListener('DOMContentLoaded', function() {
    //CENTRAL CONTAINER
    document.getElementById("students").style.display = "none";
    document.getElementById("grades").style.display = "none";
    document.getElementById("forum").style.display = "none";
    document.getElementById("homeButton").style.display = "none";
    //CALENDAR

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
function showCal(){
    $('#dd').calendar({
        trigger:null
    });
}
