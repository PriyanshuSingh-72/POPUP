let sub = document.querySelector("#sub");
let ok = document.querySelector("#close");
let popup = document.querySelector(".popup");

sub.addEventListener('click',()=>{
    popup.classList.add("openPopup");
})

ok.addEventListener('click',()=>{
    popup.classList.remove("openPopup");
})