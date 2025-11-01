let delay$$$not=0.1
window.addEventListener(`DOMContentLoaded`,function(){
document.querySelectorAll(`notification`).forEach(not=>{
    not.addEventListener(`dragstart`,function(){
        not.style.display='none'        
    })
  
    mibombo=document.createElement(`img`)
    not.appendChild(mibombo)
    mibombo.setAttribute(`src`,not.getAttribute(`ico`))
    title=document.createElement(`p`)
    des=document.createElement(`p`)
    wrap$$i=document.createElement(`div`)
    close$=document.createElement(`div`)
    not.appendChild(wrap$$i)
    not.appendChild(close$)
    close$.textContent=`×`
    close$.onclick=(gurt)=>{
        not.style.display='none'
        gurt.stopPropagation()
    }
    close$.setAttribute(`tromoSM`,`close-nottif-bt`)
    wrap$$i.appendChild(title)
    let delay$$not
    let dll
    delay$$$not+=0.2
    wrap$$i.appendChild(des)
    des.textContent=not.getAttribute(`content-txt`)
    wrap$$i.setAttribute(`tromoSM`,`wrap-ini`)
    title.setAttribute(`tromoSM`,`main-title-nottf`)
    title.textContent=not.getAttribute(`main-title`)
    if(not.getAttribute(`delay`)=="default" || not.getAttribute(`delay`)==null || not.getAttribute(`delay`)==undefined || not.getAttribute(`delay`)=="" ){
        delay$$not=`${delay$$$not}s`
        dll=delay$$$not
    }
    else {
      delay$$not=`${not.getAttribute(`delay`)}s`
      dll=not.getAttribute(`delay`)
    }
    if(not.getAttribute(`timeout`)=="forever"){
        aniClose=""
    }
    else if(not.getAttribute(`timeout`)!=null||not.getAttribute(`timeout`)!=undefined||not.getAttribute(`timeout`)!=""||not.getAttribute(`timeout`)!="default"||not.getAttribute(`timeout`)!=NaN){
        aniClose=`,close-notiff 0.3s ${not.getAttribute(`timeout`)}s 1 forwards`      
    }
    else{
        aniClose=`,close-notiff 0.3s 1s 1 forwards`      
    }
    not.style.animation=`open-notiff 0.3s 1 ${delay$$not} forwards ${aniClose}`
 
})
})
