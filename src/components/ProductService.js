const products = [
    { id: 1, name: 'vinfast', category: 'car1', stock: 7, rate: 3.5 , like: false , action: '' },
    { id: 2, name: 'bmw', category: 'car2', stock: 5, rate: 4.5 , like: false , action: '' },
    { id: 3, name: 'kia', category: 'car3', stock: 8, rate: 3.5 , like: false , action: '' },
    { id: 4, name: 'porsche', category: 'car4', stock: 7, rate: 2.5, like: true , action: '' },
    { id: 5, name: 'bugatti', category: 'car5', stock: 7, rate: 4.5, like: true , action: '' }
  ];

function getProducts() {
        return products;
  }
 
export {getProducts};



