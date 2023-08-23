import projects from "./projects.js"

const btnHabi = document.getElementById("btnHabilities")
const habilities = document.getElementById("habilities")
const top = document.getElementById("btnUp")
const artProjects = document.getElementById("articleProjects")
const tec = document.getElementById("tec")

const renderProject = () => {
  let fragment = ""
  fragment += `<div class="w-[250px] bg-slate-500">
    <img class="w-full" src="./assets/images/ataraxia.png" alt="ataraxia" />
      <h2>${projects[0].name}</h2>
      <p>${projects[0].category}</p>
      <div id="tec" class="flex items-center justify-center flex-wrap gap-2">
       ${
        projects[0].technologies.map((t) => {
          return `<p class="px-1 text-[10px] bg-[#1c2a4f] text-[#9cc9f4] border border-[#9cc9f4] rounded-md text-center">${t}</p>`
        }).join("")
       }
      </div >
  </div > `
  artProjects.innerHTML = fragment
}

renderProject()

btnHabi.addEventListener("click", (e) => {
  const href = habilities.offsetTop
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
