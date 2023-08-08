const nav = document.getElementById('nav')
const menu = document.getElementById('menu')
const cancel = document.getElementById('cancel')
const toggle = Array.from(document.getElementsByClassName('toggleNav'))

menu.addEventListener('click', (e)=>{
  nav.classList.toggle('left-0')
})
cancel.addEventListener('click', (e)=>{
  nav.classList.toggle('left-0')
})

toggle.forEach((e)=>e.addEventListener('click', ()=> {
  nav.classList.toggle('left-0')
}))