$(document).ready(function() {
    console.log("document is ready!");
    var el = document.getElementById("submitButton");
    var elName = document.getElementById("username");

    $('#btnClear').click(function(){
            clearElement("#username", "input");
            clearElement("#phone", "input");
            clearElement("#birthdate", "input");
            clearElement("#birthdate", "input");
            clearElement("#password", "input");
            clearElement("#username", "input");

      })

    function clearElement(elementId, elementType){
        if(elementType == "html"){
            $(elementId).html("");
        }
        else if(elementType=="input"){
            $(elementId).val(" ");
        }
    }
    // need some form of flow control






});
