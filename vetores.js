let vetor=['Bono','Paulo','Paula','Amanda','Joao'];
console.log(vetor.length);

//looping com o vetor

for(let i=0;i<=vetor.length;i++){
    console.log(`Linha ${vetor[i]}`);//Template string (interpolação)
}
//O forEach chama uma função, na qual vai esperar dois parametros na seguinte ordem: 1°value e 2°index//
vetor.forEach(function(valor, indice) { 

     console.log(`indice[${indice}]: ${valor}(valor)`); 

});
vetor.map(function(val){
    console.log(`${val}`);
});


let peso=parseFloat(prompt("Qual o seu peso?"));
let altura=parseFloat(prompt("Qual a sua altura"));

let resultado=CalcularIMC(peso,altura);
alert(resultado);

function CalcularIMC(peso,altura){
    
    let IMC=peso/(altura.altura);
    let retorno='';

    if(IMC>25){
        retorno="Acima do peso";
    }
    else{
        if(IMC>=18 && IMC<=25){
            retorno="Peso ideal";
        }
        else{
            retorno="Abaixo do peso";
        }
    }
    return retorno;
}
