username="TromoSM"
icotheme="000"
var description
var GITHUB="https://github.com/tromoSM" 
var LINKTREE="https://linkTr.ee/TromoSM" 
var INSTAGRAM="https://instagram.com/tromoSM" 
var X="https://x.com/tromoSM"
var THREADS="https://www.threads.com/tromoSM"
var GMAIL="mailto:tromosm.business@gmail.com"
var LINKEDIN="https://www.linkedin.com/in/tromoSM"
var BUYMEACOFFEE="https://buymeacoffee.com/tromosm"

fetch(`https://api.github.com/users/${username}`).then(yo => yo.json()).then(dih =>{
   description= dih.bio
  document.querySelectorAll(`[tromoSM=fill-des]`).forEach(des=>{
    des.textContent=description
    des.title=description
})
})

document.querySelectorAll(`[tromoSM=fill-prof]`).forEach(prof=>{
prof.setAttribute(`src`,`https://github.com/${username}.png`)
})
document.querySelectorAll(`[tromoSM=fill-ussr]`).forEach(usr=>{
    usr.textContent=username
})


// SOCIAL

document.querySelectorAll(`[link]`).forEach(ic=>{
  const ico=document.createElement("img")
  ico.setAttribute("tromoSM",'ico')
  ic.appendChild(ico)
  ico.setAttribute("src",`https://cdn.simpleicons.org/${ic.getAttribute(`link`)}/${icotheme}`)
  if(ic.getAttribute(`sz`)=="large"||ic.getAttribute(`sz`)=="l"){
    ico.style.width="30px"
    ico.style.height="30px"
  }
  ic.title=ic.getAttribute(`link`)
  ic.onclick=()=>window.open(window[ic.getAttribute(`link`).toUpperCase()])
  ico.onerror = () => ico.setAttribute("src",`https://api.iconify.design/mdi:${ic.getAttribute(`link`)}.svg`)
})
