var description 
var fallback=Math.floor(Math.random() * 3) + 1
document.querySelector(`img`).addEventListener(`load`,function(){
 document.querySelector(`[tromoSM=ui-bann]`).style.display="block"
 document.querySelector(`[tromoSM=form-s]`).style.display="flex"
 document.querySelector(`[tromoSM=last-t]`).style.display="flex"
 document.querySelectorAll(`notification`).forEach(nt=>{nt.style.display="flex"})
 document.querySelector(`[tromoSM="full-l"]`).style.display="none" //make htis the last - put more on top --loaderpagr
})

fetch(`https://api.github.com/users/${username}`).then(yo => yo.json()).then(dih =>{
   description= dih.bio
  document.querySelectorAll(`[tromoSM=fill-des]`).forEach(des=>{
    if(profile_description==""){
    des.textContent=description
    des.title=description}
    else{
      des.textContent=profile_description
    }
})
})


//accent color ahh bann
fuhnaw=document.documentElement
const ballballball=document.createElement(`img`)
ballballball.setAttribute(`tromoSM`,`accentgrab-color`)
ballballball.src=`https://images.weserv.nl/?url=raw.githubusercontent.com/tromoSM/SocialLink/main/User-resources/${username}/banner.png&w=10`
ballballball.crossOrigin="anonymous"
ballballball.onerror=()=>{
ballballball.src=`https://images.weserv.nl/?url=https://raw.githubusercontent.com/tromoSM/SocialLink/main/Resources/ui/banners/${fallback}.jpg&w=10`
}
ballballball.onload=()=>{
  let lilblanketahh=document.createElement(`canvas`)
  let publicahhexecution=lilblanketahh.getContext(`2d`)
  lilblanketahh.width=ballballball.width
  lilblanketahh.height=ballballball.height
  publicahhexecution.drawImage(ballballball,0,0)
  lilfucker=publicahhexecution.getImageData(0,0,1,1).data
  let bigahhnih=`rgb(${lilfucker[0]},${lilfucker[1]},${lilfucker[2]})`
  fuhnaw.style.setProperty(`--accent`,bigahhnih)
}


document.querySelectorAll(`[tromoSM=fill-prof]`).forEach(prof=>{
if(custom_pfp["usage"]==false){
prof.setAttribute(`src`,`https://github.com/${username}.png`)
}
else if(custom_pfp["usage"]==true){
 if(custom_pfp['url']!==""){
  prof.setAttribute(`src`,custom_pfp[`url`])
 }
 else{
prof.setAttribute(`src`,`https://github.com/${username}.png`)
 }
}
prof.onerror = () =>{
  prof.setAttribute(`src`,`https://github.com/tromoSM/SocialLink/raw/refs/heads/main/Resources/ui/pfp%20fallback.svg`)
}
})
document.querySelectorAll(`[tromoSM=fill-ussr]`).forEach(usr=>{
    usr.textContent=username
})


// SOCIAL
document.querySelectorAll(`[tromoSM=prof-w]`).forEach(gurt=>{
  gurt.onclick=()=>{
    window.open(PROFILE_LINK,`_blank`)
  }
  gurt.title=PROFILE_LINK_DES
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
  fuh.textContent=ic.getAttribute(`lnk`).replace("_"," ")
  fuh.setAttribute(`tromoSM`,`bttn-social-tx`)
  if(fuh.textContent=="SM$PY"){
    fuh.textContent=="SM.$PY"
    ic.closest(`[tromoSM="bttn-las"]`).onclick=()=>window.open(SM$PY)
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
document.querySelector(`[tromoSM=ui-bann]`).onerror=()=>{
  document.querySelector(`[tromoSM=ui-bann]`).setAttribute(`src`,`https://github.com/tromoSM/SocialLink/blob/main/Resources/ui/banners/${fallback}.jpg?raw=true`)
}
document.querySelectorAll(`[ui]`).forEach(ui=>{
ui.setAttribute(`src`,`https://raw.githubusercontent.com/tromoSM/SocialLink/refs/heads/main/Resources/ui/${ui.getAttribute(`ui`)}.svg`)

if(tromoSM_icotheme==""){
  ui.style.filter="brightness(0)"
}
else if(tromoSM_icotheme.toUpperCase()=="LIGHT" || tromoSM_icotheme.toUpperCase()=="WHITE"){
 ui.style.filter="brightness(100)"
}
})


document.querySelectorAll(`[ui-nodrag]`).forEach(yo=>{
  yo.addEventListener("dragstart",gurt=> gurt.preventDefault())
})

document.querySelectorAll(`[onclick]`).forEach(ahh=>{
  ahh.style.cursor="pointer"
})


dih=document.createElement(`p`)
document.body.appendChild(dih)
dih.innerHTML="Made with <span>♥</span>"
dih.setAttribute(`tromoSM`,`last-t`)
