import projects from "./projects.js"

const btnHabi = document.getElementById("btnHabilities")
const habilities = document.getElementById("habilities")
const btnProj = document.getElementById("btnProjects")
const secProj = document.getElementById("projects")
const btnContact = document.getElementById("btnContact")
const contact = document.getElementById("contact")
const top = document.getElementById("btnUp")
const artProjects = document.getElementById("articleProjects")
const copy = document.getElementById("copy")
const areaMessage = document.getElementById("message")
const characters = document.getElementById("characters")
const inpName = document.getElementById("name")
const inpEmail = document.getElementById("email")
const inpSubj = document.getElementById("subjet")
const inpMessage = document.getElementById("message")
const btnSubmit = document.getElementById("submit")

let name = ""
let email = ""
let subjet = ""
let message = ""

inpName.addEventListener("input", (e)=>{
  name = e.target.value
})
inpEmail.addEventListener("input", (e)=>{
  email = e.target.value
})
inpSubj.addEventListener("input", (e)=>{
  subjet = e.target.value
})
inpMessage.addEventListener("input", (e)=>{
  message = e.target.value
})

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault()
  const data = {
    name: name,
    email: email,
    subjet: subjet,
    message: message
  }
  console.log(data)
})

areaMessage.addEventListener("input", (e) => {
  characters.innerHTML = `<p class="text-end">${e.target.textLength} / 1000</p>`
  if(e.target.textLength === 1000){
    areaMessage.setAttribute('maxlength',"1000")
  }
})

const renderProject = () => {
  let fragment = ""
  fragment += projects.map((p) => {
    return `<div class="w-[250px] bg-[#101628] rounded-b-md">
      <div class="mb-2 relative">
      <a href="${p.deploy}" target="_blank" class="w-full ${p.deploy ? null : "pointer-events-none"} absolute z-1 bg-black h-[123px] bg-opacity-10 md:hover:bg-opacity-0 md:bg-opacity-30 cursor-pointer transition-all duration-300"></a>
      <img class="w-full h-[123px] object-contain bg-white z-0" src="${p.image}" alt="ataraxia" />
      </div>
      <a href="${p.deploy}" target="_blank" class="text-xl font-[500] w-full text-start pl-3 text-[#9cc9f4] ${p.deploy ? null : "pointer-events-none"}">${p.name}</a>
      <p class="text-sm pl-3 mb-2">${p.category}</p>
      <div class="contact-head flex px-3 py-2 mb-2 items-center justify-evenly flex-wrap gap-1">
       ${
        p.technologies.map((t) => {
          return `<p key="${t}" class="px-1 my-1 text-[10px] font-[600] rounded-md text-center ${t}">${t}</p>`
        }).join("")
       }
      </div >
      <div class="w-full flex flex-wrap">
      <p class="pl-3 pb-2">Respositorios:</p>
       <div class="flex justify-around px-3 border-b border-[#2a4ba3] w-full pb-3">
        <a class="font-[500] md:hover:text-[#9cc9f4] transition-all duration-200" target="_blank" href="${p.repositories.front}" >Front</a>
        <a class="font-[500] md:hover:text-[#9cc9f4] transition-all duration-200" target="_blank" href="${p.repositories.back}" >Back</a>
        <a class="font-[500] ${p.repositories.mobile ? null : "pointer-events-none"} md:hover:text-[#9cc9f4] transition-all duration-200" target="_blank" href="${p.repositories.mobile}" >${p.repositories.mobile ? "Mobile" : "-"}</a>
       </div>
       <a class="${p.deploy ? null : "pointer-events-none"} btnDeploy font-[500] w-full text-center py-1 bg-[#1e2f5c] rounded-b-md hover:bg-[#1e356e] transition-all duration-300" href="${p.deploy}" target="_blank">${p.deploy ? "Deploy" : "-"}</a>
      </div>
    </div > `
  }).join("")
  artProjects.innerHTML = fragment
}

renderProject()

const renderCopy = () => {
  let year = new Date()
  copy.innerHTML = `<p class="text-[#99c9f7]">Lázaro Tomás Del Prado © Año ${year.getFullYear()}</p>`
}

renderCopy()

btnHabi.addEventListener("click", (e) => {
  const href = habilities.offsetTop - 68
  window.scroll({ top: href, behavior: "smooth" })
})
btnProj.addEventListener("click", (e) => {
  const href = secProj.offsetTop - 68
  window.scroll({ top: href, behavior: "smooth" })
})
btnContact.addEventListener("click", (e) => {
  const href = contact.offsetTop - 68
  window.scroll({ top: href, behavior: "smooth" })
})
top.addEventListener("click", (e) => {
  window.scroll({
    top: 0,
    behavior: "smooth"
  })
})

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 500) {
    top.classList.add("w-12")
    top.classList.remove("w-0")
  } else {
    top.classList.remove("w-12")
    top.classList.add("w-0")
  }
})
