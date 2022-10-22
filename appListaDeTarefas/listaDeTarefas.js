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

    //evento para limpar toda lista
    btnLimpaTudo.addEventListener('click', apagarTudo);

    filtroDeTarefa.addEventListener('keyup', filtrar);
}
carregaMonitoresDeEventos();

function filtrar(e) {

    //capturamos o que o usuario esta digitando.
    const procurado = e.target.value.toLowerCase();
    //captura todos os elemetentos Li de uma vez.
    const tarefa = document.querySelectorAll('collection-item');
    //para cada terefa busque a string desejada.
    tarefa.forEach(function (tarefa) {

        // recuperamos apenas o texto do elemento
        //li aonde está a tarefa. 
        const TextoTarefa = tarefa.innertText;
        // prucurando a string digitada no filtro
        // no texto que esta no <li>
        if(TextoTarefa.toLowerCase().indexOf(procurado) != -1) {
                
            tarefa.style.displays = 'block';
            
        } else {
            
            tarefa.style.displays = 'none';
        }
    });

}

function apagarTudo(evento){
    
   evento.preventDefault();
   listaDeTarefas.innerHTML = '';
}


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
    else{
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
    listaDeTarefas.appendChild(LI);
    

    gravarTarefa(entradaTarefa.value);
    entrada.value = '';
    
    }
}

function gravarTarefa(tarefa){
    let tarefas = [];

    let tarefaDoStorage = localStorage.getItem('tarefas');

    if(tarefaDoStorage != null){
        
        tarefas = JSON.parse(tarefaDoStorage);
    }
    tarefa.push(tarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}
