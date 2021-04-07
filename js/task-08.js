const createCollection = document.querySelector('[data-action="render"]');
const destroyCollection = document.querySelector('[data-action="destroy"]');
const inputAmount = document.querySelector('input');
const boxesCollection = document.querySelector('#boxes');

const amount = inputAmount.value;
// const randomizer = max => {
//   return Math.floor(Math.random() * max);
// };

createCollection.addEventListener('click', createBoxes);
    
function createBoxes(amount) {
    const elements = [];
    const firstDiv = document.createElement('div');
    firstDiv.style.width = '30px';
    firstDiv.style.height = '30px';
    elements.push(firstDiv);

    // for (let i = 0; i = amount; i += 1){
    //     const newDiv = document.createElement('div');
    //     newDiv.style.width = Number(firstDiv.style.width) + 10 + 'px';
    //     newDiv.style.height = Number(firstDiv.style.height) + 10 + 'px';

    //     elements.push(newDiv);
    // }
    boxesCollection.insertAdjacentElement('afterbegin', elements);
};

// destroyCollection.addEventListener('click', destroyBoxes() => {
    
// });