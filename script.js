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
    document.getElementById('result').innerText = textError;
    document.getElementById('result').classList.add('content_result__error');
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

  document.getElementById('result').innerText = `El resultado es: ${result}`;
  document.getElementById('result').classList.remove('content_result__error');
}