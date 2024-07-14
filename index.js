const textBox = document.getElementById('textBox');
const toF = document.getElementById('toF');
const toC = document.getElementById('toC');
const result = document.getElementById('result');
let temp;

function converter() {

    if (toF.checked){
        temp = textBox.value * 9/5 + 32;
        result.textContent = `${textBox.value}°C is ${temp.toFixed(1)}°F`;
    }else if (toC.checked){
        temp = (textBox.value - 32) * 5/9;
        result.textContent = `${textBox.value}°F is ${temp.toFixed(1)}°C`;
    }else{
        result.textContent = 'Please select a conversion type';
    }

}