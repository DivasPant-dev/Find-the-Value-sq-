let display = document.getElementById("display");

function displayF() {
    if (document.getElementById("input1").value == "" && document.getElementById("input2").value == "") {
        display.value = "";
        display.value = "Error";
        display.classList.add("addColor");
    } else {
        display.value = "";
        let input1 = document.getElementById("input1")
        let input2 = document.getElementById("input2")
    
        let number = input1.value;
        let power = input2.value;
    
        let result = Math.pow(number, power);
    
        let display = document.getElementById("display")
    
        display.value += result;
    }
}

document.getElementById("clear").addEventListener("click", function() {
    window.location.reload();
});
