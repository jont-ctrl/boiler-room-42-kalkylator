function runCalculator() {
  let num1 = Number(prompt('Skriv tal 1'));
  let choseOperation = prompt('Välj mellan: +, -, *, /, %');
  let num2 = Number(prompt('Skriv tal 2'));

  console.log(num1);
  console.log(num2);
  console.log(choseOperation);

  let result = 0;

  if (isNaN(num1) || isNaN(num2)) {
    console.log('Error no number');
  } else {
    console.log('Number input ok');
    switch (choseOperation) {
      case '+':
        console.log('Resultatet av addition: ', num1 + num2);
        result = num1 + num2;
        alert('Resultatet av addition: ' + result);
        break;
      case '-':
        console.log('Resultatet av subtraktion: ', num1 - num2);
        result = num1 - num2;
        alert('Resultatet av subtraktion: ' + result);
        break;
      case '*':
        console.log('Resultatet av multiplikation: ', num1 * num2);
        result = num1 * num2;
        alert('Resultatet av multiplikation: ' + result);
        break;
      case '/':
        console.log('Resultatet av division: ', num1 / num2);
        result = num1 / num2;
        alert('Resultatet av division: ' + result);
        break;
      case '%':
        console.log('Resultatet av modulus: ', num1 % num2);
        result = num1 % num2;
        alert('Resultatet av modulus: ' + result);
        break;
    }
  }
}
