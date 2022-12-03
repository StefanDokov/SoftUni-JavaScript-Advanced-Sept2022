function calc() {
    let numone = document.getElementById(`num1`).value;
    let numtwo = document.getElementById(`num2`).value;

    let sum = Number(numone) + Number(numtwo);
    document.getElementById(`sum`).value = sum;
}
