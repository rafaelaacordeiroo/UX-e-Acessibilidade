let btnAjuda = document.querySelect(".botao-ajuda");
let btnFechar = document.querySelect(".botao-fechar");
let modal = document.querySelect(".modal-fundo");

btnAjuda.addEventListener("click", abreModal);
btnFechar.addEventListener("click", fechaModal);