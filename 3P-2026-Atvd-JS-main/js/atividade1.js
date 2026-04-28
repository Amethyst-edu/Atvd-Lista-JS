const titulo = document.getElementById('titulo');
const botao = document.getElementById('alterar');
let contador = 0;

botao.addEventListener('click', function(){
    contador++;

    switch(contador){
        case 1:
    titulo.innerHTML = 'Título alterado!';
    botao.innerHTML = 'Botão clicado!';
        break;
        case 2:
    titulo.innerHTML = 'Título alterado novamente!';
    botao.innerHTML = 'Botão clicado de novo!';
        break;
        case 3:
    titulo.innerHTML = 'Título alterado mais uma vez!';
    botao.innerHTML = 'Botão clicado mais uma vez!';
        break;
        case 4:
    botao.innerHTML = 'Botão clicado mais uma vez.';
        break;
        case 5:
    botao.innerHTML = 'Botão clicado mais uma vez..';
        break;
        case 6:
    botao.innerHTML = 'Botão clicado mais uma vez...';
        break;
        case 7:
    botao.innerHTML = 'Botão clicado mais uma vez....';
        break;
        case 8:
    titulo.innerHTML = 'O usuário já foi?';
    botao.innerHTML = 'Botão clicado mais uma vez.....';
        break;
        case 9:
    botao.innerHTML = 'Não, ativamos a curiosidade, título!';
        break;
        case 10:
    titulo.innerHTML = 'Vc quem ativou, é só não mudar seu texto!';
        break;
        case 11:
    titulo.innerHTML = 'T_T';
    botao.innerHTML = 'Ata vou parar &#x1F910;';
        break;
        case 12:
    titulo.innerHTML = ':)';
    }
})