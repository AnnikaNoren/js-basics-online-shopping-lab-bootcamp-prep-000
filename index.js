var cart = [];

function getCart() {

 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var randomNum = Math.floor(Math.random()* 100 + 1);
  cart.push({
    //key: item,
    //value: randomNum
    [item]: randomNum,
  })
  //cart.item = randomNum
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
 if (cart.length = 0 ){
   return(`Your shopping cart is empty.`)
 }

 if (cart.length = 1){
   return('In your cart, you have ${cart.} at $ ${}.')
 }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
