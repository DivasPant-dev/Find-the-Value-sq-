function display() {
    let input1 = document.getElementById("input1")
    let input2 = document.getElementById("input2")

    let number = input1.value;
    let power = input2.value;

    let result = Math.pow(number, power);

    document.getElementById("result").innerHTML = result;
}

document.getElementById("clear").addEventListener("click", function() {
    window.location.reload();
});