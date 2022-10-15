const inputTarefa = document.querySelector('#tarefa');
const btnAddtarefa = document.querySelector('.btn');
const listaDeTarefas = document.querySelector('.collection');
const filtroDeTarefa = document.querySelector('#filtro');
const btnLimpaTudo = document.querySelector('.limpar-tarefas');

function carregaMonitoresDeEventos(){

    //EVENTO para adicionar a tarefa
    btnAddtarefa.addEventListener('click', adicioneTarefa);
    
    //evento para fazer o x funcionar(apagar tarefa)
    listaDeTarefas.addEventListener('click', apagarTarefa);


}
carregaMonitoresDeEventos();

function apagarTarefa(evento){
    
   //se o elemento pai tiver a classe apaga-tarefa, ou seja, for  elemento 'a', apague li, ou seja, a tarefa

    if(evento.target.parentElement.classList.contains('apaga-tarefa')){
        evento.target.parentElement.parentElement.remove();
    }

}

function adicioneTarefa(evento){
    evento.preventDefault();

    if(inputTarefa.value === '' ){
        alert('Entre com uma tarefa');
    }

    //cria li com a nova tarefa
    const LI = document.createElement('li');
    LI.className='collection-item';
    LI.appendChild(document.createTextNode(inputTarefa.value));

    //cria aonde vai ficar o x para apagar a tarefa    
    const A =  document.createElement('a');
    A.className = 'apaga-tarefa secondary-content';
    
    //cria icone com o x para apagar a tarefa
    const I =  document.createElement('i');
    I.className = 'fa fa-remove';

    //monta o elemento li para colocar um ul
    A.appendChild(I);
    LI.appendChild(A);
    inputTarefa.appendChild(LI);


    console.log(LI);
}

