// hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');

})

//navegacao
window.addEventListener("scroll", function(){
    let header = this.document.querySelector('header')
    header.classList.toggle('rolagem', window.scrollY > 250)
})
