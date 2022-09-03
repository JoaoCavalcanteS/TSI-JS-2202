/*
    CALCULADORA DE SERVIÇOS
-Criar uma calculadora de valor a ser cobrado do cliente
-O valor do serviço pode variar conforme o prazo
-Os valores e prazos devem ser armazenados em uma matriz.
-O cálculo deve ficar obrigatoriamente em função
*/

let service=parseInt(prompt("Qual o serviço que você quer?[1][2][3]"));
let hour=parseInt(prompt("Em quantas horas?[24][48][72]"));

let calcularService=calcular(service,hour);
alert(calcularService);

//O valor do serviço é baseado no Seviço*Horas
function calcular(service,hour){
    let valores=['Nulo','$100','$200','$300','$400','$500','$600'];
    let services=['Nulo','Serv1','Serv2','Serv3'];
    let tabela=service*hour;
    
//24,48,72,96,144,216
    switch (tabela){
        case 24:
            tabela=`O valor do serviço vai fica por ${valores[1]}`;
            break;
        case 48:
            tabela=`O valor do seu serviço vai fica por ${valores[2]}`;
            break;
        case 72:
            tabela=`O valor do seu serviço vai fica por ${valores[3]}`;
            break;
        case 96:
            tabela=`O valor do seu serviço vai fica por ${valores[4]}`;
            break;
        case 144:
            tabela=`O valor do seu serviço vai fica por ${valores[5]}`;
            break;
        case 216:
            tabela=`O valor do seu serviço vai fica por ${valores[6]}`;
            break;
        default:
            tabela="Serviço ou valor não identificados"
    }
    return tabela;
}

 