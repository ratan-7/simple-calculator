let startBtn = document.getElementById("startBtn");
let inputFile = document.getElementById("inputFile");
let output = document.getElementById("output");

function inputNumberA() {
    let numberInput = document.createElement("input");
    numberInput.type = "number";
    numberInput.id = "numA";
    numberInput.placeholder = "enter number 1";
    inputFile.appendChild(numberInput);
}

function operator() {
    let select = document.createElement("select");
    select.id = "operator";
    let operators = ["+", "-", "*", "/", "%"];
    operators.forEach(op => {
        let option = document.createElement("option");
        option.value = op;
        option.text = op;
        select.appendChild(option);
    });
    inputFile.appendChild(select);
}

function inputNumberB() {
    let numberInput = document.createElement("input");
    numberInput.type = "number";
    numberInput.id = "numB";
    numberInput.placeholder = "enter number 2";
    inputFile.appendChild(numberInput);
}

function result() {
    let a = parseFloat(document.getElementById("numA").value);
    let b = parseFloat(document.getElementById("numB").value);
    let op = document.getElementById("operator").value;
    let result = 0;

    switch (op) {
        case "+": result = a + b; break;
        case "-": result = a - b; break;
        case "*": result = a * b; break;
        case "/": result = b !== 0 ? a / b : "undefined"; break;
        case "%": result = a % b; break;
    }

    output.innerText = "Result = " + result;
}

function start() {
    inputFile.innerHTML = "";
    inputNumberA();
    operator();
    inputNumberB();
}

startBtn.addEventListener("click", start);                                            