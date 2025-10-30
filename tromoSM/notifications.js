let delay$$$not=0.1
window.addEventListener(`DOMContentLoaded`,function(){
document.querySelectorAll(`notification`).forEach(not=>{
    mibombo=document.createElement(`img`)
    not.appendChild(mibombo)
    mibombo.setAttribute(`src`,not.getAttribute(`ico`))
    title=document.createElement(`p`)
    des=document.createElement(`p`)
    wrap$$i=document.createElement(`div`)
    not.appendChild(wrap$$i)
    wrap$$i.appendChild(title)
    delay$$$not+=0.4
    wrap$$i.appendChild(des)
    des.textContent=not.getAttribute(`content-txt`)
    wrap$$i.setAttribute(`tromoSM`,`wrap-ini`)
    title.setAttribute(`tromoSM`,`main-title-nottf`)
    title.textContent=not.getAttribute(`main-title`)
    if(not.getAttribute(`delay`)=="default" || not.getAttribute(`delay`)==null || not.getAttribute(`delay`)==undefined || not.getAttribute(`delay`)=="" ){
        delay$$not=`${delay$$$not}s`
    }
    else {
      delay$$not=`${not.getAttribute(`delay`)}s`
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
