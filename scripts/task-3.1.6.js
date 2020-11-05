var pieItem = 'Pie = &pound;7 ';
var cakeItem = 'Cake = &pound;5 ';
var sconeItem = 'Scone = &pound;3 ';
var coffeeItem = 'Coffee = &pound;2 ';
var teaItem = 'Tea = &pound;2 ';

var priceOfPie = 7;
var priceOfCake = 5;
var priceOfScone = 3;
var priceOfCoffee = 2;
var priceOfTea = 2;

document.write(pieItem);
document.write(cakeItem);
document.write(sconeItem);
document.write(coffeeItem);
document.write(teaItem);

var billTotal = priceOfPie + priceOfCake + priceOfScone + priceOfCoffee + priceOfTea;

var tipPercent = 20;
var tipAmount = (billTotal / 100) * tipPercent;


var totalPaid = billTotal + tipAmount;

var message = 'Your bill was &pound;' + billTotal + ', you tipped ' + tipPercent + '%, which comes to &pound;' + tipAmount + ', taking your total paid to &pound;' + totalPaid;

console.log(message);
document.write(message);
