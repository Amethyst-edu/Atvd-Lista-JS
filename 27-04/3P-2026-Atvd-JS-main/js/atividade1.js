const titulo = document.getElementById('titulo');
const botao = document.getElementById('alterar');
let contador = 0;

botao.addEventListener('click', function(){
    contador++;

    switch(contador){
        case 1:
    titulo.innerText = 'Título alterado!';
    botao.innerText = 'Botão clicado!';
        break;
        case 2:
    titulo.innerText = 'Título alterado novamente!';
    botao.innerText = 'Botão clicado de novo!';
        break;
        case 3:
    titulo.innerText = 'Título alterado mais uma vez!';
    botao.innerText = 'Botão clicado mais uma vez!';
        break;
        case 4:
    botao.innerText = 'Botão clicado mais uma vez.';
        break;
        case 5:
    botao.innerText = 'Botão clicado mais uma vez..';
        break;
        case 6:
    botao.innerText = 'Botão clicado mais uma vez...';
        break;
        case 7:
    botao.innerText = 'Botão clicado mais uma vez....';
        break;
        case 8:
    titulo.innerText = 'O usuário já foi?';
    botao.innerText = 'Botão clicado mais uma vez.....';
        break;
        case 9:
    botao.innerText = 'Não, ativamos a curiosidade, título!';
        break;
        case 10:
    titulo.innerText = 'Vc quem ativou, é só não mudar seu texto!';
        break;
        case 11:
    titulo.innerText = 'T_T';
    botao.innerHTML = 'Ata vou parar &#x1F910;';
        break;
        case 12:
    titulo.innerText = ':)';
    }
})