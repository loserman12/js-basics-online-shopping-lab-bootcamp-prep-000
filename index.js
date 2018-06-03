
var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here

  var price = Math.floor(Math.random() * 100)+1 ;
  var items = {itemName: item, itemPrice: price};
  cart.push(items);
  return `${item} has been added to your cart.`
}


function viewCart() {

  // write your code here
  if (cart.length === 0) {
 return 'Your shopping cart is empty.'
  } 
  else {
 let cartier = [];
 // cartier is an empty array that we store our new values
 
  for (let i = 0; i < cart.length; i++)
  // for loop becuase we dont know how many times or items will be added
  {
    cartier.push(cart[i].itemName + ' at $' + cart[i].itemPrice)
    // we are going to push *add* to new array ${cartier} key itemName and  key itemPrice from ${cart}. the [i] tells us we are increasing through the index i++ tells us we are increasing manually value by value.
  }
  if (cart.length === 1 ) {
 // if the cart length is eqaul to 1 
  return `In your cart, you have ${cartier}.`
  }
  else {
    
    let lastItem = cartier.pop();
    // var lastItem will  *.pop* remove the last element in the the cartier array and return the element taken.
    return `In your cart, you have ${cartier.join(', ')}, and ${lastItem}.`
     //  returning "In your car, you have (cartier.join returns our array to a string with a separator in the  parentheses example  cartier.join(separator)* and (the var lastItem removes the last element in the cartier array and returns it. 
     // example  var num = [1,2,3] 
     // number.pop is 3 and now var num = [1,2]
      
  }
  }
 
}


function total() {
  var cost = 0;
  for (var i = 0; i < cart.length; i++) {
  cost = cost + cart[i].itemPrice;
  }
  
  
  return cost;
}




function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
     
      cart.splice(i, 1)
      return cart
    }
  }
  return "That item is not in your cart."
}
  
function placeOrder(cardNumber) {
   if (cardNumber === undefined) {
    // if ${cardnumber} has not been assigned a value  equaling *undefined*  return statement below
    return ("Sorry, we don't have a credit card on file for you.")
    
  } 
  
  else {
    var totalCost = total();
    // var totalCost = total function 
    cart = []; 
   // code above clears the cart array
    
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
    //  returns string "Your total cost is (var totalCost *which is a function that adds cost of items in cart), which will be charged to the card 
    //(var cardNumber * cardNumber is our parameter the variable we are passing arguemnt through*  .  )
  }
}