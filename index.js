import projects from "./projects.js"

const btnHabi = document.getElementById("btnHabilities")
const habilities = document.getElementById("habilities")
const top = document.getElementById("btnUp")
const artProjects = document.getElementById("articleProjects")

const renderProject = () => {
  let fragment = ""
  fragment += projects.map((p) => {
    return `<div class="w-[250px] bg-[#101628] rounded-b-md">
      <div class="relative z-0">
      <a href="${p.deploy}" target="_blank" class="w-full absolute bg-black z-0 h-[123px] bg-opacity-30 md:hover:bg-opacity-0 cursor-pointer transition-all duration-300"></a>
      <img class="w-full h-[123px] object-contain bg-white z-0" src="${p.image}" alt="ataraxia" />
      </div>
      <h2 class="text-xl w-full text-start pl-3 mt-2 text-[#9cc9f4]">${p.name}</h2>
      <p class="text-sm pl-3 mb-2">${p.category}</p>
      <div class="contact-head flex px-3 py-2 mb-2 items-center justify-evenly flex-wrap gap-1">
       ${
        p.technologies.map((t) => {
          return `<p key="${t}" class="px-1 text-[10px] bg-[#1c2a4f] text-[#9cc9f4] border border-[#9cc9f4] rounded-md text-center">${t}</p>`
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
