let button1 = document.querySelector("#s1");
let button2 = document.querySelector("#s2");
let button3 = document.querySelector("#s3");
let button4 = document.querySelector("#s4");

// asides
let c1 = document.querySelector("#cont1");
let c2 = document.querySelector("#cont2");
let c3 = document.querySelector("#cont3");
let c4 = document.querySelector("#cont4");


button1.addEventListener("click",function(){
    button1.classList.add("ativo");
    c1.classList.add("ativo");

    button2.classList.remove("ativo");
    c2.classList.remove("ativo");

    button3.classList.remove("ativo");
    c3.classList.remove("ativo");

    button4.classList.remove("ativo");
    c4.classList.remove("ativo");
    
});
button2.addEventListener("click",function(){
    button1.classList.remove("ativo");
    c1.classList.remove("ativo");

    button2.classList.add("ativo");
    c2.classList.add("ativo");

    button3.classList.remove("ativo");
    c3.classList.remove("ativo");

    button4.classList.remove("ativo");
    c4.classList.remove("ativo");
    
});
button3.addEventListener("click",function(){
    button1.classList.remove("ativo");
    c1.classList.remove("ativo");

    button2.classList.remove("ativo");
    c2.classList.remove("ativo");

    button3.classList.add("ativo");
    c3.classList.add("ativo");

    button4.classList.remove("ativo");
    c4.classList.remove("ativo");
    
});
button4.addEventListener("click",function(){
    button1.classList.remove("ativo");
    c1.classList.remove("ativo");

    button2.classList.remove("ativo");
    c2.classList.remove("ativo");

    button3.classList.remove("ativo");
    c3.classList.remove("ativo");

    button4.classList.add("ativo");
    c4.classList.add("ativo");
    
});

const counts = document.querySelectorAll(".value");
const speed = 10;

counts.forEach((counter) => {
    function upData(){
        const target = Number(counter.getAttribute('data-target')); 
        const count = Number(counter.innerText);
        const inc = target / speed;
        if (count < target) {
            counter.innerText = Math.floor(inc + count);
            setTimeout(upData, 80);
      

        }else{
            counter.innerText = target;
        }
    }
    upData();
})