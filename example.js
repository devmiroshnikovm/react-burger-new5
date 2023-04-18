const selectedIngredients = [
  {
    board: "burgerConstructor",
    calories: 14,
    carbohydrates: 11,
    count: "1",
    dropUniqID: "dc57ff79-8ed7-47da-b91d-d37d5d3de2f3",
    fat: 22,
    image: "https://code.s3.yandex.net/react/code/sauce-04.png",
    image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
    name: "Соус фирменный Space Sauce",
    price: 80,
    proteins: 50,
    type: "sauce",
    __v: 0,
    _id: "643d69a5c3f7b9001cfa0943",
  },
  {
    board: "burgerConstructor",
    calories: 14,
    carbohydrates: 11,
    count: "1",
    dropUniqID: "dc57ff79-8ed7-47da-b91d-d37d5d3de2f4",
    fat: 22,
    image: "https://code.s3.yandex.net/react/code/sauce-04.png",
    image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
    name: "Соус фирменный Space Sauce",
    price: 80,
    proteins: 50,
    type: "sauce",
    __v: 0,
    _id: "643d69a5c3f7b9001cfa0943",
  },
  {
    board: "burgerConstructor",
    calories: 14,
    carbohydrates: 11,
    count: "1",
    dropUniqID: "dc57ff79-8ed7-47da-b91d-d37d5d3de2f5",
    fat: 22,
    image: "https://code.s3.yandex.net/react/code/sauce-04.png",
    image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
    name: "Соус фирменный Space Sauce",
    price: 80,
    proteins: 50,
    type: "sauce",
    __v: 0,
    _id: "643d69a5c3f7b9001cfa0943",
  },
  {
    board: "burgerConstructor",
    calories: 14,
    carbohydrates: 11,
    count: "1",
    dropUniqID: "dc57ff79-8ed7-47da-b91d-d37d5d3de2f12",
    fat: 22,
    image: "https://code.s3.yandex.net/react/code/sauce-04.png",
    image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
    name: "Соус фирменный Space Sauce",
    price: 80,
    proteins: 50,
    type: "sauce",
    __v: 0,
    _id: "643d69a5c3f7b9001cfa09412",
  },
  {
    board: "burgerConstructor",
    calories: 14,
    carbohydrates: 11,
    count: "1",
    dropUniqID: "dc57ff79-8ed7-47da-b91d-d37d5d3de2fwer",
    fat: 22,
    image: "https://code.s3.yandex.net/react/code/sauce-04.png",
    image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
    name: "Соус фирменный Space Sauce",
    price: 80,
    proteins: 50,
    type: "sauce",
    __v: 0,
    _id: "643d69a5c3f7b9001cfa09412",
  },
];

function countDropUniqID(array, property) {
  return array.reduce((acc, ingredient) => {
    if (acc[ingredient[property]]) {
      acc[ingredient[property]].count += 1;
    } else {
      acc[ingredient[property]] = { count: 1 };
    }
    return acc;
  }, {});
}

const result = countDropUniqID(selectedIngredients, "_id");
console.log(result);
