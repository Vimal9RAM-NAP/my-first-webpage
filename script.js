
const button = document.getElementById('colorBtn');
const heading = document.querySelector('h1');


const colors = ['#4da6ff', '#ff6666', '#2ecc71', '#f1c40f', '#9b59b6'];
let colorIndex = 0;


button.addEventListener('click', () => {
    
    colorIndex = (colorIndex + 1) % colors.length;
    heading.style.color = colors[colorIndex];
    button.style.backgroundColor = colors[colorIndex];
});