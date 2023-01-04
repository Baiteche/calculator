// clear all the values when clicking the button'C'
function clearScreen() {
        document.getElementById("result").value = "";
    }
     
    //  display values in result field
    function display(value) {
        document.getElementById("result").value += value;
    }
     
    // calculate the input and  returns result
    function calculate() {
        var p = document.getElementById("result").value;
        var q = eval(p);
        document.getElementById("result").value = q;
    }
    


