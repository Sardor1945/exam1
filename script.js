// ИСХОДНЫЕ ДАННЫЕ НЕ ТРОГАТЬ!*

let discount = prompt('Какая скидка?')

let totalSale = Number

let total = Number

let max = Object

let min = Object

let average = Number

let arr = [
  {
    name: 'Milk',
    price: 3.25
  },
  {
    name: 'Coffee',
    price: 1.5
  },
  {
    name: 'Ice Cream',
    price: 7.85
  },
  {
    name: 'Tomatos',
    price: 4.14
  },
  {
    name: 'Onion',
    price: 2.25
  }
]

let arr_sale = []

// 1. Сохранить самый дорогой товар в переменную`max`*

// 2. Сохранить самый дешевый товар в переменную`min`*

// 3. Сохранить общую цену без скидок в переменную`total`*

// 4. Сохранить общую цену со скидкой в переменную`totalSale`*

// 5. Сохранить элементы из массива arr с обновленной ценой (цена со скидкой) в переменную `arr_sale`*

// 6. Сохранить в переменной`average` среднюю цену всех продуктов без скидок*
// * Писать весь код в функции `setup()`*

// ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА*

const setup = () => {
    let max = arr[0];
    let min = arr[0];
    let total = 0;
    let totalSale = 0;
    let arr_sale = [];
  
    for (let i = 0; i < arr.length; i++) {
      let product = arr[i];
  
      total += product.price;
  
      let priceWithDiscount = product.price * (1 - discount / 100);
      totalSale += priceWithDiscount;
  
      arr_sale.push({
        name: product.name,
        price: priceWithDiscount,
      });
  
      if (product.price > max.price) {
        max = product;
      }
      console.log('Самый дорогой продукт:', max.name);
      if (product.price < min.price) {
        min = product;
      }
    }
    console.log('Самый дешевый продукт:', min.name);
    let average = total / arr.length;
  
   

    console.log('Общая цена без скидки:', total);
    console.log('Общая цена со скидкой:', totalSale);
    console.log('Продукты со скидкой:', arr_sale);
    console.log('Средняя цена без скидки:', average);
  }
  
  setup();
