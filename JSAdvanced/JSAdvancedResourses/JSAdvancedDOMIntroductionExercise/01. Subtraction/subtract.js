function subtract() {
    let first = document.getElementById(`firstNumber`).value;
    let second = document.getElementById(`secondNumber`).value;
    let res = document.getElementById(`result`).textContent = Number(first) - Number(second);
    console.log(res);
}