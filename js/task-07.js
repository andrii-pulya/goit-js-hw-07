const rangeLink = document.querySelector('#font-size-control');
const textLink = document.querySelector('#text');

console.log(rangeLink.value);
console.log(textLink);

rangeLink.addEventListener('input', () => {
    textLink.style.fontSize = `${rangeLink.value * 2}%`;
    // textLink.style.fontSize = `${rangeLink.value}px`;
    // textLink.style.fontSize = rangeLink.value + 'px';
});