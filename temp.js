// Temperature Conversion :

const num = document.getElementById("num");
const toFehrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

let temp;

function convert(){

    if(toFehrenheit.checked){
       temp = Number(textBox.value);
       temp = temp * 9 / 5 + 32;
       result.textContent = temp.toFixed(1) + "°F";
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C";
    }
    else{
        result.textContent = "Select a Unit";
    }
}
