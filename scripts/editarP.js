// botoes
let btnConta = document.querySelector("#btnConta");
let btnDescricao = document.querySelector("#btndescricao");
let btnFotoPerfil = document.querySelector("#btnPerfil");
let btnSenha = document.querySelector("#btnSenha");
let btnEspecialidade = document.querySelector("#btnEspecialidade");
let btnDadosAdicionais = document.querySelector("#btnDadosAdicionais");

// asides
let conta = document.querySelector("#conta");
let descricao = document.querySelector("#descricao");
let fotoPerfil = document.querySelector("#foto");
let senha = document.querySelector("#senha");
let especialidade = document.querySelector("#especialidade");
let dadosAdicionais = document.querySelector("#dadosA");

// ----------------------- Conta -----------------
btnConta.addEventListener("click",function(){
    conta.classList.add("ativo");
    btnConta.classList.add("ativo");

    btnDescricao.classList.remove("ativo");
    descricao.classList.remove("ativo");

    fotoPerfil.classList.remove("ativo");
    btnFotoPerfil.classList.remove("ativo");

    senha.classList.remove("ativo");
    btnSenha.classList.remove("ativo");

    especialidade.classList.remove("ativo");
    btnEspecialidade.classList.remove("ativo");

    dadosAdicionais.classList.remove("ativo");
    btnDadosAdicionais.classList.remove("ativo");
});

btnDescricao.addEventListener("click",function(){
    conta.classList.remove("ativo");
    btnConta.classList.remove("ativo");

    btnDescricao.classList.add("ativo");
    descricao.classList.add("ativo");

    fotoPerfil.classList.remove("ativo");
    btnFotoPerfil.classList.remove("ativo");

    senha.classList.remove("ativo");
    btnSenha.classList.remove("ativo");

    especialidade.classList.remove("ativo");
    btnEspecialidade.classList.remove("ativo");

    dadosAdicionais.classList.remove("ativo");
    btnDadosAdicionais.classList.remove("ativo");
});

btnFotoPerfil.addEventListener("click",function(){
    conta.classList.remove("ativo");
    btnConta.classList.remove("ativo");

    btnDescricao.classList.remove("ativo");
    descricao.classList.remove("ativo");

    fotoPerfil.classList.add("ativo");
    btnFotoPerfil.classList.add("ativo");

    senha.classList.remove("ativo");
    btnSenha.classList.remove("ativo");

    especialidade.classList.remove("ativo");
    btnEspecialidade.classList.remove("ativo");

    dadosAdicionais.classList.remove("ativo");
    btnDadosAdicionais.classList.remove("ativo");
});

btnSenha.addEventListener("click",function(){
    conta.classList.remove("ativo");
    btnConta.classList.remove("ativo");

    btnDescricao.classList.remove("ativo");
    descricao.classList.remove("ativo");

    fotoPerfil.classList.remove("ativo");
    btnFotoPerfil.classList.remove("ativo");

    senha.classList.add("ativo");
    btnSenha.classList.add("ativo");

    especialidade.classList.remove("ativo");
    btnEspecialidade.classList.remove("ativo");

    dadosAdicionais.classList.remove("ativo");
    btnDadosAdicionais.classList.remove("ativo");
});

btnEspecialidade.addEventListener("click",function(){
    conta.classList.remove("ativo");
    btnConta.classList.remove("ativo");

    btnDescricao.classList.remove("ativo");
    descricao.classList.remove("ativo");

    fotoPerfil.classList.remove("ativo");
    btnFotoPerfil.classList.remove("ativo");

    senha.classList.remove("ativo");
    btnSenha.classList.remove("ativo");

    especialidade.classList.add("ativo");
    btnEspecialidade.classList.add("ativo");

    dadosAdicionais.classList.remove("ativo");
    btnDadosAdicionais.classList.remove("ativo");
});


btnDadosAdicionais.addEventListener("click",function(){
    conta.classList.remove("ativo");
    btnConta.classList.remove("ativo");

    btnDescricao.classList.remove("ativo");
    descricao.classList.remove("ativo");

    fotoPerfil.classList.remove("ativo");
    btnFotoPerfil.classList.remove("ativo");

    senha.classList.remove("ativo");
    btnSenha.classList.remove("ativo");

    especialidade.classList.remove("ativo");
    btnEspecialidade.classList.remove("ativo");

    dadosAdicionais.classList.add("ativo");
    btnDadosAdicionais.classList.add("ativo");
});

