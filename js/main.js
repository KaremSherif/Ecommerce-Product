const humburger = document.querySelector('.humburger')
const menu = document.querySelector('.menu')

humburger.addEventListener('click', removeHidden)
menu.addEventListener('click', addHidden)

function removeHidden(){
    menu.classList.remove('hidden')
}
function addHidden(){
    menu.classList.add('hidden')
}

