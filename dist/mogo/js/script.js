const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const item = document.querySelector('#itemmenu');

burger.addEventListener('click' , () =>{
    menu.classList.toggle('disp');
});
item.addEventListener('click' , () => {
    menu.classList.toggle('disp');
});
