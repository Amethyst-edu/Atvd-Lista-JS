let string = []

let stringF = []

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
    const item = prompt('Insira o conteúdo do item:'); // bullet removido pois contam como caracteres
    if (item !== null && item.trim() !== '') {
    string.unshift(item);
    renderizar();
    }
})

const bottomAdd = document.getElementById('addBottom');
bottomAdd.addEventListener('click', function() {
    const item = prompt('Insira o conteúdo do item:');
    if (item !== null && item.trim() !== '') {
        string.push(item);
        renderizar();
    }
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

// Filtro atividade 3
function filtrar(){
    stringF = [];
    string.forEach(function(item) {
        if (item.length > 5){
            stringF.push(item);
        }
    });
};

const iniciarFiltro = document.getElementById('iniciarFiltro');
iniciarFiltro.addEventListener('click', function() {
    filtrar();
    const listaF = document.getElementById('ListF');
    listaF.innerHTML = '';
    stringF.forEach(function(item) {
        const li = document.createElement('li');
        li.textContent = item;
        listaF.appendChild(li);
    // a renderização principal executará htmls recebidos,
    // mas o filtro apresentará em forma de texto
    // para mostrar ao usuário que eles contam como caracteres
    });
    let num = stringF.length;
    const count = document.createElement('p');
    count.textContent = `Número de items com mais de 5 letras: ` + num;
    listaF.appendChild(count);
});

// conversor atividade 4
const changeCase = document.getElementById('changeCase');
changeCase.addEventListener('click', function() {
    const listaF = document.getElementById('ListF');
    listaF.innerHTML = '';
    stringF.forEach(function(item, i){
        stringF[i] = item.toUpperCase();
    });
    stringF.forEach(function(item) {
        const li = document.createElement('li');
        li.textContent = item;
        listaF.appendChild(li);
    });
});