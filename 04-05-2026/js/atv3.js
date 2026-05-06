let string = []

let stringF = string;

function renderizar() {
    const lista = document.getElementById('List');
    lista.innerHTML = '';
    for (let i = 0; i < string.length; i++) {
        const item = document.createElement('li');
        item.innerHTML = string[i];
        lista.appendChild(item);
        filtrar();
    }
}

const topAdd = document.getElementById('addTop');
topAdd.addEventListener('click', function() {
    const item = prompt('Insira o conteúdo do item:'); // bullet removido pois contam como caracteres
    string.unshift(item);
    renderizar();
})

const bottomAdd = document.getElementById('addBottom');
bottomAdd.addEventListener('click', function() {
    const item = prompt('Insira o conteúdo do item:');
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

// Filtro atividade 3
function filtrar(){
    stringF = [];
    let num = 0;
    for (let i = 0; i < string.length; i++){
        const item = string[i];
        if (item.length >= 5){
            stringF.push(item);
            num++;
        }
    }
};

const iniciarFiltro = document.getElementById('iniciarFiltro');
iniciarFiltro.addEventListener('click', function() {
    const listaF = document.getElementById('ListF');
    listaF.innerHTML = '';
    for (let i = 0; i < stringF.length; i++) {
        const item = document.createElement('li');
        item.textContent = stringF[i]; 
        listaF.appendChild(item);
    // a renderização principal executará htmls recebidos,
    // mas o filtro apresentará em forma de texto
    // para mostrar ao usuário que eles contam como caracteres
    }
});