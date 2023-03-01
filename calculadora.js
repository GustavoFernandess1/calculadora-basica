let resultado = document.getElementById('resultado');

function addToResult(value) {
  resultado.value += value;
}

function clearResult() {
  resultado.value = '';
}

function calculate() {
  try {
    resultado.value = eval(resultado.value);
  } catch (error) {
    alert('Erro na expressão matemática!');
    resultado.value = '';
  }
}
const sqrtButton = document.querySelector("#sqrt");
const powerButton = document.querySelector("#power");

sqrtButton.addEventListener("click", calculateSqrt);
powerButton.addEventListener("click", calculatePower);

function calculateSqrt() {
  const result = Math.sqrt(parseFloat(display.value));
  display.value = result.toLocaleString("en");
}

function calculatePower() {
  const result = Math.pow(parseFloat(display.value), 2);
  display.value = result.toLocaleString("en");
}