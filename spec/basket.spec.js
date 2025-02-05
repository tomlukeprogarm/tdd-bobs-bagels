const inventory = require('../inventory.json');
const { Basket, BobsBasket, Item } = require('../src/basket.js');

describe('Basket', () => {
  // PUBLIC
  it('can have a feature added to it and returns true', () => {
    const basket = new Basket();
    const itemObjects = inventory.inventory.map(item => new Item(item));

    const result = basket.addItemsToBasket(itemObjects);
    expect(result).toEqual(true);
  });

  it('return false if feature is invalid and does not add to basket', () => {
    const basket = new Basket();
    const invalidFeature = [];

    const result = basket.addItemsToBasket(invalidFeature);
    expect(result).toEqual(false);
    expect(basket.items.length).toEqual(0);
  });

  it('can have a feature removed', () => {
    const basket = new Basket();
    const itemToRemove = inventory.inventory[1];
    expect(basket.items).not.toContain(itemToRemove);
  });
  it(`returns 'item not found' when item not in basket`, () =>{
    const basket = new Basket();
    const itemToRemove = {sku:`nonexistent`}

    const result = basket.removeBasketItem(itemToRemove);
    expect(result).toEqual(`item not found`)
  })

    it(`can have a basket with a max of 5 bagels and returns 'basket is now full'`, () => {
      const basket = new Basket();
      basket.items.push({}, {}, {}, {}, {});
      expect(basket.isBasketFull()).toEqual('basket is now full');
    });
  
    it(`return 'you cannot add another item' when basket is full`, () => {
      const basket = new Basket();
      basket.items.push({}, {}, {}, {}, {}, {});
      expect(basket.isBasketFull()).toEqual('you cannot add another item');
    });
  
    it(`return 'basket is not yet full' when basket is not full`, () => {
      const basket = new Basket();
      basket.items.push({}, {});
      expect(basket.isBasketFull()).toEqual('basket is not yet full');
    });
  });

  // BOB
  it(`make a basket for bob to access to make larger orders`, () => {
    const bobsBasket = new BobsBasket();
    const itemObjects = inventory.inventory.map(item => new Item(item));
    bobsBasket.addItemsToBasket(itemObjects);

    const result = bobsBasket.isItBob('Bob');
    expect(result).toEqual(`access granted`);

  })
  it(`returns 'access denied if not bob`, () => {
    const bobsBasket = new BobsBasket();
    const result = bobsBasket.isItBob('');
    expect(result).toEqual(`access denied`);
  })
  it('should record sales correctly', () => {
    const bobsBasket = new BobsBasket();
    const soldItems = [
      {
        sku: "BGLO",
        price: 0.49,
        name: "Bagel",
        variant: "Onion"
      },
      {
        sku: "BGLP",
        price: 0.39,
        name: "Bagel",
        variant: "Everything"
      }
    ]
   const recordSale = bobsBasket.recordSale(soldItems)

    expect(recordSale.length).toEqual(soldItems.length)
});
