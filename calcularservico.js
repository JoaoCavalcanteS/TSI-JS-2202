/*
    CALCULADORA DE SERVIÇOS
-Criar uma calculadora de valor a ser cobrado do cliente
-O valor do serviço pode variar conforme o prazo
-Os valores e prazos devem ser armazenados em uma matriz.
-O cálculo deve ficar obrigatoriamente em função
*/

//EXEMPLO DA AULA   

let tabela=[['$100','$200','$300','$400','$500','$600','$700','$800','$900']];

let servico=prompt("Entre com o serviço \n0 - troca de óleo\n1 - balanceamento\n2 - Cambagem");
let prazo= prompt("Entre com o prazo: \n0 - um dia \n1 - dois dias\n2 - tres dias ");

if(validaEntrada(servico) && validaEntrada(prazo)){
        alert("O serviço ficará em: "+tabela[servico][prazo]);
}
else{
    alert("ERRO");
}

function validaEntrada(dadoUsuario){
    return dadoUsuario>= 0 && dadoUsuario<=2 ? true : false;
}