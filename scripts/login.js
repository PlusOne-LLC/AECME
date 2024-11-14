const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
let btnCadastro = document.getElementById('btnCadastro');
let btnLogin = document.getElementById('btnLogin');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () =>
    {

   container.classList.remove("active");
});


btnCadastro.addEventListener("click",function(){
    document.querySelector("#cadastro").classList.add("mostrar");
    
    document.querySelector("#entrar").classList.remove("mostrar");
});

btnLogin.addEventListener("click",function(){
    document.querySelector("#cadastro").classList.remove("mostrar");
    
    document.querySelector("#entrar").classList.add("mostrar");
});