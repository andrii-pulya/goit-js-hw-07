const categories = document.querySelectorAll('.item');
console.log(`В списке ${categories.length} категории.`);

categories.forEach(category => {
    const title = category.querySelector('h2').textContent;
    console.log(title);
    const count = category.querySelectorAll('li').length;
    console.log(`Категория: ${title}`);
    console.log(`Количество элементов: ${count}`);
});