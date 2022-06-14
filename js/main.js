const humburger = document.querySelector('.humburger')
const menu = document.querySelector('.menu')
const card = document.querySelector('.cart-popUp')
const btnCard = document.querySelector('.btnCard')

// remove hidden menu by click at humburger img
humburger.addEventListener('click', removeHidden)

function removeHidden(){
    menu.classList.remove('hidden')
}
// add hidden while closeing menu
menu.addEventListener('click', addHidden)

function addHidden(){
    menu.classList.add('hidden')
}
// popup orders whille click at card numbers to show prices
btnCard.addEventListener('click', popCart)

function popCart(){
    card.classList.toggle('hidden')
}


