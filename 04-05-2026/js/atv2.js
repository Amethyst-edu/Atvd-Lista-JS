let string = []

function renderizar() {
    const lista = document.getElementById('List');
    lista.innerHTML = '';
    for (let i = 0; i < string.length; i++) {
        const item = document.createElement('li');
        item.innerHTML = string[i];
        lista.appendChild(item);
    }
}

const topAdd = document.getElementById('addTop');

topAdd.addEventListener('click', function() {
    const item = '&bull; ' + prompt('Insira o conteúdo do item:');
    string.unshift(item);
    renderizar();
})

const bottomAdd = document.getElementById('addBottom');

bottomAdd.addEventListener('click', function() {
    const item = '&bull; ' + prompt('Insira o conteúdo do item:');
    string.push(item);
    renderizar();
})

const topRemove = document.getElementById('removeTop');

topRemove.addEventListener('click', function() {
    string.shift();
    renderizar();
})

const bottomRemove = document.getElementById('removeBottom');

bottomRemove.addEventListener('click', function() {
    string.pop();
    renderizar();
})