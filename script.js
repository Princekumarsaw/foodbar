const themeswitch = document.getElementById('theme-switch');
const body = document.body;

themeswitch.addEventListener('change',function(){
    body.classList.toggle('dark-mode');
});
const footerImage = document.querySelectorAll('.footer .images img');
const foodbarImage = document.querySelector('.foodbar img');

footerImage.forEach(image => {
    image.addEventListener('click', () => {
        foodbarImage.src =image.src;
    });
});

const itemImage = document.querySelectorAll('.item-img');

itemImage.forEach(img => {
    img.addEventListener('click', () => {
        itemImage.forEach(img => img.classList.remove('animated'));
        img.classList.add('animated');
    });
});

const addtoacrtButtons = document.querySelectorAll('.images a');
const cartIcon =document.querySelector('.top-navber .icons a i');

let cartcount = 0;
addtoacrtButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartcount++;
        cartIcon.textContent = cartcount;
    });
});