let serviço=document.getElementById('servico');
let prazo=document.getElementById('titulo');
let resultado=document.getElementById('resultado');


let tabela=[['$100','$200','$300','$400','$500','$600','$700','$800','$900']];


if(validaEntrada(servico) && validaEntrada(prazo)){
        resultado.innerText("O serviço ficará em: "+tabela[servico][prazo]);
}
else{
    alert("ERRO");
}

/*function validaEntrada(dadoUsuario){
    return dadoUsuario>= 0 && dadoUsuario<=2 ? true : false;
}

/*esse método espera uma função e um parametro
bntCalcular.addEventListener('click', function(evento){
    evento.preventDefault();
    console.log(evento);*/


/*ou fazer assim
bntCalcular.addEventListener('click', executa(){
    function executa(evento){
        console.log(evento);
    }

})*/
console.log(bntCalcular);