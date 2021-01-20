contador = 0;
function addComentario(){
    contador++;
    var caixaComent = document.querySelector(".caixa-comentario"),
    htmlTemporario = caixaComent.innerHTML,
    nome = document.querySelector("#nome").value,
    msg = document.querySelector("#msg").value,
    htmlNovo = '<div id="msg-' + contador + '"> <p id="texto-coment" >' + nome + ":  " + msg +
     "</p> <button class='excluir-coment' onclick='excluirComent("+contador+")'>Delete</button></div>";
    
    
    htmlTemporario = htmlTemporario + htmlNovo;
    caixaComent.innerHTML = htmlTemporario;
}

function excluirComent(numComent){
    var idRemovido = "#msg-" + numComent,
    comentRemovido  = document.querySelector(idRemovido);

    if(comentRemovido.parentNode){
        comentRemovido.parentNode.removeChild(comentRemovido);
    }

}

function mostrarCreditos(){
    alert("DISCIPLINA: DESENVOLVIMENTO DE SOFTWARE PARA WEB             ALUNA: SARA BARRETO")
}

function mudarCor(cor){
    var body = document.querySelector("#body");

    if(cor == "cor1"){
        body.className = "fundo-cor1";
        
    }else if(cor == "cor2"){
        body.className = "fundo-cor2";

    }else{
        body.className = "fundo-cor3";
    }
}