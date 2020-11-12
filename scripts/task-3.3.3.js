function calculator (number1, number2, operator) {

var result = '';

switch (operator) {
    case '+':
        result = number1+number2;
        console.log(number1 + ' + ' + number2 + ' = ' + result);
        break;
    //addition
    
    case '-':
        result = number1-number2;
        console.log(number1 + ' - ' - number2 + ' = ' + result);
        break;  
    //subtraction
    
    case '/':
        result = number1/number2;
        console.log(number1 + ' / ' / number2 + ' = ' + result);
        break;
    //division
    
    case '*':
        result = number1*number2;
        console.log(number1 + ' * ' * number2 + ' = ' + result);
        break;
    //multplication
    
    case '%':
        cresult = number1%number2;
        console.log(number1 + ' % ' % number2 + ' = ' + result);
        break;
    //modulus
    
    default:
        console.log('ERROR');
        break;
}





}
