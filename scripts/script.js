$(document).ready(function() {
    console.log("document is ready!");
    // Get element info
    var el = document.getElementById("submitButton");
    var elName = document.getElementById("username");

// clear button function calls
    $('#btnClear').click(function(){
            clearElement("#username", "input");
            clearElement("#phone", "input");
            clearElement("#checkIn", "input");
            clearElement("#checkOut", "input");
            clearElement("#password", "input");
            clearElement("#username", "input");

      })
// Clear element by type
    function clearElement(elementId, elementType){
        if(elementType == "html"){
            $(elementId).html("");
        }
        else if(elementType=="input"){
            $(elementId).val(" ");
        }
        else {
          $(elementId).val(" ");
        }
    }
  






});
