const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

ingredients.forEach(ingredient => {
    const ulList = document.querySelector('#ingredients');

    const newItemLi = document.createElement("li");
    newItemLi.textContent = ingredient;

    ulList.appendChild(newItemLi);
}
);

