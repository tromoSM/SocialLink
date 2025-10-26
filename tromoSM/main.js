username="tromoSM"
icotheme="ffffff"
tromoSM_icotheme="white" //blank = default  light=light

var PROFILE_LINK = "https://github.com/tromoSM"
var description
var GITHUB="https://github.com/tromoSM" 
var LINKTREE="https://linkTr.ee/TromoSM" 
var INSTAGRAM="https://instagram.com/tromoSM" 
var X="https://x.com/tromoSM"
var THREADS="https://www.threads.com/tromoSM"
var GMAIL="mailto:tromosm.business@gmail.com"
var LINKEDIN="https://www.linkedin.com/in/tromoSM"
var BUYMEACOFFEE="https://buymeacoffee.com/tromosm"
var PONTOON="https://pontoon.mozilla.org/contributors/czwiZRZhsQKfq6_a1Dy2r_PnkUM"
var SM$PY="https://github.com/tromoSM/SM.S-PY"

document.querySelector(`img`).addEventListener(`load`,function(){
 document.querySelector(`[tromoSM=ui-bann]`).style.display="block"
 document.querySelector(`[tromoSM="full-l"]`).style.display="none"
})

fetch(`https://api.github.com/users/${username}`).then(yo => yo.json()).then(dih =>{
   description= dih.bio
  document.querySelectorAll(`[tromoSM=fill-des]`).forEach(des=>{
    des.textContent=description
    des.title=description
})
})


//accent color ahh bann
fuhnaw=document.documentElement
const ballballball=document.createElement(`img`)
ballballball.setAttribute(`tromoSM`,`accentgrab-color`)
ballballball.src=`https://images.weserv.nl/?url=raw.githubusercontent.com/tromoSM/SocialLink/main/User-resources/${username}/banner.png&w=10`
ballballball.crossOrigin="anonymous"
ballballball.onload=()=>{
  let lilblanketahh=document.createElement(`canvas`)
  let publicahhexecution=lilblanketahh.getContext(`2d`)
  lilblanketahh.width=ballballball.width
  lilblanketahh.height=ballballball.height
  publicahhexecution.drawImage(ballballball,0,0)
  lilfucker=publicahhexecution.getImageData(0,0,1,1).data
  let bigahhnih=`rgb(${lilfucker[0]},${lilfucker[1]},${lilfucker[2]})`
  fuhnaw.style.setProperty(`--accent`,bigahhnih)
  console.log(bigahhnih)
}


document.querySelectorAll(`[tromoSM=fill-prof]`).forEach(prof=>{
prof.setAttribute(`src`,`https://github.com/${username}.png`)
})
document.querySelectorAll(`[tromoSM=fill-ussr]`).forEach(usr=>{
    usr.textContent=username
})


// SOCIAL
document.querySelectorAll(`[tromoSM=prof-w]`).forEach(gurt=>{
  gurt.onclick=()=>{
    window.open(PROFILE_LINK,`_blank`)
  }
})

 let githubIcoMode=""

if(tromoSM_icotheme==""){
  githubIcoMode=""
}
else if(tromoSM_icotheme.toUpperCase()=="LIGHT" || tromoSM_icotheme.toUpperCase()=="WHITE"){
  githubIcoMode="light/"
}
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
  

  ico.onerror = () =>{
    ico.setAttribute("src",`https://api.iconify.design/mdi:${ic.getAttribute(`link`)}.svg?color=%23${icotheme}`)
  }

})

 
document.querySelectorAll(`[lnk]`).forEach(ic=>{
  ic.setAttribute("src",`https://cdn.simpleicons.org/${ic.getAttribute(`lnk`)}/${icotheme}`)
  if(ic.getAttribute(`sz`)=="large"||ic.getAttribute(`sz`)=="l"){
    ic.style.width="30px"
    ic.style.height="30px"
  }   

  ic.title=ic.getAttribute(`lnk`)
  ic.closest(`[tromoSM="bttn-las"]`).onclick=()=>window.open(window[ic.getAttribute(`lnk`).toUpperCase()])

  
  if(ic.closest(`[tromoSM="bttn-las"]`)){
  fuh=document.createElement('p')
  ic.closest(`[tromoSM="bttn-las"]`).appendChild(fuh)
  fuh.textContent=ic.getAttribute(`lnk`)
  fuh.setAttribute(`tromoSM`,`bttn-social-tx`)
  if(fuh.textContent=="SM$PY"){
    fuh.textContent=="SM.$PY"
  }
}

  ic.onerror = () =>{
  if(!ic.dataset.triedIconify){
    ic.dataset.triedIconify=true
    ic.setAttribute("src",`https://api.iconify.design/mdi:${ic.getAttribute(`lnk`)}.svg?color=%23${icotheme}`)
  }
  else{
    if(ic.getAttribute(`lnk`)=="SM$PY"){
     ic.setAttribute(`lnk`,`SM.$PY`)
    }
    ic.setAttribute("src",`https://github.com/tromoSM/SocialLink/blob/main/Resources/${githubIcoMode}${ic.getAttribute(`lnk`)}.png?raw=true`)
  }}
})

  if(document.querySelectorAll(`[donate=true]`)){
    document.querySelectorAll(`[donate=true]`).forEach(yo=>{
    yo.style.marginTop="15px"
  })}



document.querySelector(`[tromoSM=ui-bann]`).setAttribute(`src`,`https://github.com/tromoSM/SocialLink/blob/main/User-resources/${username}/banner.png?raw=true`)

document.querySelectorAll(`[ui]`).forEach(ui=>{
ui.setAttribute(`src`,`https://raw.githubusercontent.com/tromoSM/SocialLink/refs/heads/main/Resources/ui/${ui.getAttribute(`ui`)}.svg`)

if(tromoSM_icotheme==""){
  ui.style.filter="brightness(0)"
}
else if(tromoSM_icotheme.toUpperCase()=="LIGHT" || tromoSM_icotheme.toUpperCase()=="WHITE"){
 ui.style.filter="brightness(100)"
}
})


document.querySelectorAll(`[ui]`).forEach(yo=>{
  yo.addEventListener("dragstart",gurt=> gurt.preventDefault())
})

document.querySelectorAll(`[onclick]`).forEach(ahh=>{
  ahh.style.cursor="pointer"
})
