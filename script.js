const DIGIT_REGEX = /^\d$/;
const DECIMAL_REGEX = /^[.]$/;
const precision = 3;

function isDigit(character) {
  return DIGIT_REGEX.test(character) || character === '0';
}

function calculate(value) {
  const calculatedValue = eval(value || null);
  if(calculatedValue.toString().length > 10) {
    display.innerHTML = calculatedValue.toString().substring(0,11);
    console.log(calculatedValue);
  }

   else {
    display.innerHTML = calculatedValue;
  }
}

const display = document.querySelector('.display');
function displayUpdate(value) {
  if (display.innerHTML.length < 10) {
    if (value !== '=') {
      display.innerHTML += value;
    }
  }

  if (value === 'c') {
    display.innerHTML = "";
  } 
  else if (value === '=') {
    calculate(display.innerHTML);
  }
  else if (value === 'Backspace') {
    
  }
}

document.addEventListener('keydown', keyboardInputHandler);
function keyboardInputHandler(e) {
  e.preventDefault();

  if (e.key === '0' || isDigit(e.key)) {
    display.innerHTML += e.key;
  }

  if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
    display.innerHTML += e.key;
  }

  if (e.key === '.') {
    displayUpdate('.');
  }

  if (e.key === 'Enter') {
    calculate(display.innerHTML);
  }

  if(e.key === 'Backspace') {
    display.innerHTML = display.innerHTML.substring(0,display.innerHTML.length-1)
  }

  if (e.key === 'c') {
    displayUpdate('c');
  }
}
