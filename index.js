const btnHabi = document.getElementById("btnHabilities")
const habilities = document.getElementById("habilities")
const top = document.getElementById("btnUp")


btnHabi.addEventListener("click", (e)=> {
  const href = habilities.offsetTop
  window.scroll({top: href, behavior: "smooth"})
})
top.addEventListener("click", (e)=> {
  window.scroll({
    top:0,
    behavior: "smooth"
  })
})

window.addEventListener("scroll", (e)=> {
  if(window.scrollY > 500){
    top.classList.add("w-12")
    top.classList.remove("w-0")
  }else{
    top.classList.remove("w-12")
    top.classList.add("w-0")
  }
  console.log(window.scrollY)
})