let buttons = document.querySelectorAll("section#servicos  a")
let conteiners = document.querySelectorAll("section#servicos aside.containerRight div.conteudo")

buttons.forEach(click => {
    click.addEventListener("click", function(event){
        event.preventDefault()
        let id = click.getAttribute('valor')
        removeAtivoContainer()
        adicionarAtivoContainer(id)
        removeAtivoButton()
        adicionaAtivoButton(click)
    })
})

function adicionaAtivoButton(click) {
    click.classList.add('ativo')
}
function removeAtivoButton() {
    buttons.forEach(cont => {
        cont.classList.remove('ativo')
    });
}
function removeAtivoContainer() {
    conteiners.forEach(cont => {
        cont.classList.remove('ativo')
    });
}
function adicionarAtivoContainer(id) {
    let caixaAtiva = document.querySelector("#"+id)
    caixaAtiva.classList.add('ativo')
}


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