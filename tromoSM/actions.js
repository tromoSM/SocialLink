window.addEventListener(`DOMContentLoaded`,function(){
document.querySelectorAll(`[action]`).forEach(on=>{
    if(on.getAttribute(`action`).slice(0,2)=="$$"){
        on.onclick=()=>window.open(on.getAttribute(`action`).slice(2))}
})
})
