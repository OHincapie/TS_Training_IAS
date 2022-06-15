interface Product {
  productId: number,
  name: string,
  category: number,
  price: number
}

interface ProductResult {
  value: Product,
  index: number
}

const products: Product[] = [
  {
    productId: 1,
    name: "headphones",
    category: 1,
    price: 100,
  },
  {
    productId: 2,
    name: "Shoes Nike",
    category: 2,
    price: 300,
  },
  {
    productId: 3,
    name: "hamburger",
    category: 3,
    price: 10,
  },
  {
    productId: 4,
    name: "Fries",
    category: 3,
    price: 5,
  },
  {
    productId: 5,
    name: "Sandwich",
    category: 3,
    price: 10,
  },
  {
    productId: 6,
    name: "laptop",
    category: 1,
    price: 100,
  },
  {
    productId: 7,
    name: "keyboard",
    category: 1,
    price: 50,
  },
  {
    productId: 8,
    name: "t-shirt",
    category: 2,
    price: 16,
  },
];

const categories = [
  { id: 1, name: "Electronic" },
  { id: 2, name: "Clothes" },
  { id: 3, name: "Food" }
];

export const discountsHolyDays = [
  { category: 1, discountApply: true, value: 10 },
  { category: 2, discountApply: false, value: 0 },
  { category: 3, discountApply: true, value: 30 },
];

//// Activity

// cada solución debe de crearse con metodo que retorne el resultado esperado de cada punto
// y su llamda del metodo con un console.log donde muestre la información

/// 1 - ¿Cuál es el promedio de valor de cada tipo de producto?

/// 2 - ¿Cuál es el producto más costoso de cada categoria?

/// 3 - ¿Exite algún producto de tipo Electronico que cueste $100?

/// 4 - Obtener todos los productos que en nombre tengan las letra S. 

/// 5 - Crear un arreglo de objetos con la siguiente información: { productId: 7 ,nameProduct: 'keyboard', category: 'Electronic', discount: '10', applyDiscount: true}

/// 6. Crear un arreglo de objetos con la siguiente información: { productId: 7, priceWithDiscount: 45}

// 7. Agregar los siguientes productos, y crear un arreglo con el resultado, ejemplo: [{id: 9, status: 'succes', id:10: status: 'error': message: 'error message'}];
// errors: duplicated key

const newProducts = [
  {
    id: 9,
    name: 'Tucson',
    typeOfProcuct: 'Car',
    discount: 10,
  }, {
    id: 10,
    name: 'Jeep',
    typeOfProcuct: 'Car',
    discount: 10,
  }, {
    id: 10,
    name: 'Screen',
    typeOfProcuct: 'Electronic'
  }, {
    id: 1,
    name: 'Mouse',
    typeOfProcuct: 'Electronic'
  }
]

//Ejercicio 1
function sumProductsByCategory(pro: Product[]): number {
  const sumProducts: number = pro.reduce((prev, act) => {
    return prev + act.price;
  }, 0)
  return sumProducts / pro.length;
}


const products1: Product[] = products.filter((value: Product) => value.category == 1);
const products2: Product[] = products.filter((value: Product) => value.category == 2);
const products3: Product[] = products.filter((value: Product) => value.category == 3);

console.log("The average of products category 1 is: " + sumProductsByCategory(products1));
console.log("The average of products category 2 is: " + sumProductsByCategory(products2));
console.log("The average of products category 3 is: " + sumProductsByCategory(products3));

//Ejercicio 2
function expensiveProductByCategory(product: Product[]): ProductResult {
  let miniumValue = 0;
  let objForEach: ProductResult = {} as ProductResult;
  product.forEach(async (value, index, array) => {
    if (value.price > miniumValue) {
      miniumValue = value.price;
      objForEach = { value, index }
    }
  });
  return objForEach;
}

console.log(`The more expensive product of the category 1 is: ${expensiveProductByCategory(products1).value.name} with value of: ${expensiveProductByCategory(products1).value.price}`);
console.log(`The more expensive product of the category 2 is: ${expensiveProductByCategory(products2).value.name} with value of: ${expensiveProductByCategory(products1).value.price}`);
console.log(`The more expensive product of the category 3 is: ${expensiveProductByCategory(products3).value.name} with value of: ${expensiveProductByCategory(products1).value.price}`);

//Ejercicio 3
const electronicProductWithValueOf100 = products.filter(value => value.category === 1 && value.price === 100);
console.log(`There are ${electronicProductWithValueOf100.length} electronics products with value of 100, are : \n
   ${electronicProductWithValueOf100.map(value => {
  return ` Name: ${value.name}\n Price: ${value.price}\n`
})}`);

//Ejercicio 4
const productThatStartsWithS = products.filter(value => value.name.startsWith('S' || 's'));
console.log(`The products that starts with 's' are: ${productThatStartsWithS.map(value => {
  return ` Name: ${value.name}\n`
})
  }`);

//Ejercicio 5
const newProducts1 = [{
  productId: 7,
  nameProduct: 'keyboard',
  category: 'Electronic',
  discount: '10',
  applyDiscount: true
},
{
  productId: 8,
  nameProduct: 'Screen',
  category: 'Electronic',
  discount: '15',
  applyDiscount: true
},
{
  productId: 9,
  nameProduct: 'Ford',
  category: 'Car',
  discount: '5',
  applyDiscount: true
}]

console.log(newProducts1);


//Ejercicio 6
const newProducts2 = [{
  productId: 7,
  priceWithDiscount: 45
},
{
  productId: 8,
  priceWithDiscount: 55
},
{
  productId: 9,
  priceWithDiscount: 25
},
{
  productId: 10,
  priceWithDiscount: 10
}]

console.log(newProducts2);

//Ejercicio 7
const unionProducts = [products, newProducts, newProducts1, newProducts2];
console.log(unionProducts);


