let display = document.getElementById("display");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

function displayF() {
    if (input1.value == "" && input2.value == "") {
        display.value = "Error";
    } else {
        let number = parseFloat(input1.value);
        let power = parseFloat(input2.value);
    
        let result = Math.pow(number, power);
    
        display.value = result;

        input1.value = "";
        input2.value = "";
    }
}

document.getElementById("clear").addEventListener("click", function() {
    window.location.reload();
});
