const botao = document.getElementById('add');

botao.addEventListener('click', function() { 
    const novalinha = document.createElement('li');
    novalinha.innerHTML = prompt('Insira o conteúdo do item:') + '<button class="remover">&#x274C;</button>';
    novalinha.id = 'item';
    const list = document.querySelector('#lista');
    list.appendChild(novalinha);
})

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('remover')) {
        if (confirm('Deseja remover este item?')) {
            const item = event.target.parentElement;
            item.remove();
        }
    }
})