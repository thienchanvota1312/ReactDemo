const products = [
    { Id: 1, Name: 'Motor1', Category: {_id: 14 , name: "suzuki"}, Stock: 7, Rate: 3.5 , Like: false , Action: '' },
    { Id: 2, Name: 'Motor2', Category: {_id: 73 , name: "honda"}, Stock: 5, Rate: 4.5 , Like: false , Action: '' },
    { Id: 3, Name: 'ECar1', Category: {_id: 12 , name: "vinfast"}, Stock: 8, Rate: 3.5 , Like: false , Action: '' },
    { Id: 4, Name: 'SCar1', Category: {_id: 6 , name: "porsche"}, Stock: 7, Rate: 2.5, Like: true , Action: '' },
    { Id: 5, Name: 'SCar2', Category: {_id: 7 , name: "bugatti"}, Stock: 7, Rate: 4.5, Like: true , Action: '' },
    { Id: 6, Name: 'ECar2', Category: {_id: 12 , name: "vinfast"}, Stock: 7, Rate: 4.0, Like: true , Action: '' },
    { Id: 7, Name: 'SCar3', Category: {_id: 6 , name: "porsche"}, Stock: 3, Rate: 5.0, Like: true , Action: '' },
    { Id: 8, Name: 'SCar4', Category: {_id: 7 , name: "bugatti"}, Stock: 7, Rate: 3.5, Like: false, Action: '' },
    { Id: 9, Name: 'Motor3', Category: {_id: 14 , name: "suzuki"}, Stock: 8, Rate: 1.5, Like: false , Action: '' }
  ];

function getProducts() {
        return products;
  }
 
export {getProducts};



