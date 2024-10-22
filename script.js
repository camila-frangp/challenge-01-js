/**EXERCISE 01 */
let result;
let activeError = false;
let textError = 'Error!!';

function handleError(option) {
  const value01 = parseFloat(document.getElementById('value01').value);
  const value02 = parseFloat(document.getElementById('value02').value);

  if (value01 === value02) {
    textError = 'Los números no pueden ser iguales';
    activeError = true;
    return true;
  }
  if (value01 < 0 || value02 < 0) {
    activeError = true;
    textError = `¡No puedes ${option} con números negativos!`;
    return true;
  }
  return false;
}

function handleOperation(operation) {
  activeError = false;
  if (handleError(operation)) {
    document.getElementById('result01').innerText = textError;
    document.getElementById('result01').classList.add('content_result__error');
    return;
  }

  const value01 = parseFloat(document.getElementById('value01').value);
  const value02 = parseFloat(document.getElementById('value02').value);

  switch (operation) {
    case 'add':
      result = value01 + value02;
      break;
    case 'subtract':
      result = value01 - value02;
      break;
    case 'divide':
      result = value01 / value02;
      break;
    case 'multiply':
      result = value01 * value02;
      break;
    case 'module':
      result = value01 % value02;
      break;
    default:
      break;
  }

  document.getElementById('result01').innerText = `El resultado es: ${result}`;
  document.getElementById('result01').classList.remove('content_result__error');
}

/**EXERCISE 02 */
let value = '0';
let resultKelvin;
let resultFahrenheit;

document.getElementById('temperatureInput').addEventListener('input', (e) => {
    value = e.target.value;
});

function handleTemperature(temp) {
    const celsius = parseInt(value);
    if (temp === 'kelvin') {
        resultFahrenheit = undefined;
        resultKelvin = celsius + 273.15;
    }

    if (temp === 'fahrenheit') {
        resultKelvin = undefined;
        resultFahrenheit = (celsius * 9/5) + 32;
    }

    updateResult();
}

function updateResult() {
    const resultElement = document.getElementById('result02');
    if (resultKelvin !== undefined) {
        resultElement.textContent = `${value}º Celsius equivalen a ${resultKelvin}º Kelvin`;
    } else if (resultFahrenheit !== undefined) {
        resultElement.textContent = `${value}º Celsius equivalen a ${resultFahrenheit}º Fahrenheit`;
    } else {
        resultElement.textContent = '';
    }
}

/**EXERCISE 03 */
function handleResult() {
    const YEAR = 365;
    const WEEK = 7;

    const quantityDays = Number(document.getElementById('daysInput').value);
    const years = Math.floor(quantityDays / YEAR);
    const remainingAfterYears = quantityDays % YEAR;
    const weeks = Math.floor(remainingAfterYears / WEEK);
    const days = remainingAfterYears % WEEK;

    const resultElement = document.getElementById('result03');
    resultElement.textContent = `${quantityDays > 1 ? `${quantityDays} días` : `${quantityDays} día`} equivale a ${years > 1 ? `${years} años` : `${years} año`}, ${weeks > 1 ? `${weeks} semanas` : `${weeks} semana`} y ${days > 1 ? `${days} días` : `${days} día`}`;
}

/**EXERCISE 04 */
function handleSum() {
    const number01 = Number(document.getElementById('number01').value);
    const number02 = Number(document.getElementById('number02').value);
    const number03 = Number(document.getElementById('number03').value);
    const number04 = Number(document.getElementById('number04').value);
    const number05 = Number(document.getElementById('number05').value);

    const sum = number01 + number02 + number03 + number04 + number05;
    document.getElementById('resultSum').innerText = `La suma total de los números es: ${sum}`;
}

function handleAverage() {
    const number01 = Number(document.getElementById('number01').value);
    const number02 = Number(document.getElementById('number02').value);
    const number03 = Number(document.getElementById('number03').value);
    const number04 = Number(document.getElementById('number04').value);
    const number05 = Number(document.getElementById('number05').value);

    const average = (number01 + number02 + number03 + number04 + number05) / 5;
    document.getElementById('resultAverage').innerText = `El promedio de los números es: ${average}`;
}