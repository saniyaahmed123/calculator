var input = document.getElementById('input')
var firstValue = 0
var operator = ""
var secondValue = 0
function append(value) {
    if (value === '.' && input.value.includes('.')) return;
    input.value = input.value + value
    if (input.value[0] == '0' && input.value[1] != '.') {
        input.value = input.value.slice(1)
    }

}
function setOperator(oper) {
    if (input.value === "") return;
    firstValue = input.value;
    operator = oper;
    input.value = ""
}
function calculate() {
    if (operator === "" || input.value === "") return;
        secondValue = input.value
    
     var res = 0;
     var v1 = parseFloat(firstValue);
     var v2 = parseFloat(secondValue);
    secondValue = input.value


    if (operator == '+') {
        res = v1 + v2;
    }
    else if (operator == '-') {
        res = v1 - v2
    }
    else if (operator == '*') {
        res = v1 * v2;
    }
    else if (operator == '/') {
        if(parseFloat(secondValue) === 0){
            input.value = "Error: Division by zero";
            return;
        }
        res= v1 / v2;
    }
    else if (operator == '%') {
        res = v1 % v2;
    }
    input.value = res 
    operator = "";
    firstValue = res;

} 
function name(params) {
    
}
function clearDisplay(){
    input.value = "";
    firstValue = 0;
    secondValue = 0;
    operator = "";
}
function backSpace(){
    input.value = input.value.slice(0, -1);
}
function toggleSign(){
    if(input.value === ""||input.value === '0') return;
    input.value = parseFloat(input.value)*-1;
}