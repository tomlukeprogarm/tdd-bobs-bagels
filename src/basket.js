class Basket {
  constructor() {
    this.items = [];
  }
  
  addItemsToBasket(items) {
    if (items.length > 0) {
      this.items.push(...items);
      return true;
    } else {
      return false;
    }
  }
  removeBasketItem(itemToRemove) {
    const indexToRemove = this.items.findIndex(item => item.sku === itemToRemove.sku); 
    
    if (indexToRemove !== -1) {
      this.items.splice(indexToRemove, 1);
    
  }
  
}
isBasketFull() {
  if (this.items.length === 5) {
    return 'basket is now full';
  } else if (this.items.length > 5) {
    return 'you cannot add another item';
  } else if (this.items.length < 5){
    return 'basket is not yet full';
  }
}
}
class Item {
  constructor(item) {
    this.sku = item.sku;
    this.price = item.price;
    this.name = item.name;
    this.variant = item.variant; 
  }
}

class BobsBasket{
  
}

module.exports = { Basket, BobsBasket, Item };
