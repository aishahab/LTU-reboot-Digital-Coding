function drinkOrder(drink, size) {


var drinkToLowerCase = drink.toLowerCase();


switch (drinkToLowerCase) {
    case 'cola':
        console.log('You have ordered a ' + size + ' ' + drinkToLowerCase);
        break;

    case 'lemonade':
        console.log('You have ordered a ' + size + ' ' + drinkToLowerCase);
        break;

    case 'orangeade':
        console.log('You have ordered a ' + size + ' ' + drinkToLowerCase);
        break;

    default:
        console.log('The drink that you have tried to order does not exist');
        break;
}





}
