const botao_tarefa = document.querySelector('.add_tarefa');
const meu_item = document.querySelector('.input_tarefa');
const resultado = document.querySelector('#lista');

botao_tarefa.addEventListener('click', function(event){
    const nome_item = meu_item.value;
    if (nome_item.trim() !== '') { 
        setResultado(nome_item);
        meu_item.value = '';
    }
});

function add_item_lista(itemText){
    const item_lista = document.createElement('li');
    item_lista.textContent = itemText;
    cria_botao_apagar(item_lista)
    return item_lista;
}
function cria_botao_apagar(li){
    li.innerText += ' ';
    const botao_apagar = document.createElement('button');
    botao_apagar.innerText = 'Apagar';
    botao_apagar.classList.add('botao-apagar');
    li.appendChild(botao_apagar)
}

function setResultado(item) {
    const item_add = add_item_lista(item);
    resultado.appendChild(item_add);
}

document.addEventListener('click', function(e){
    const el = e.target;
    console.log(el.classList)
    if(el.classList.contains('botao-apagar')){
        el.parentElement.remove();
    }
});
