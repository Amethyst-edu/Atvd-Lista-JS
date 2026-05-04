const botaoTema = document.getElementById('tema');

botaoTema.addEventListener('click', function() {
    document.body.classList.toggle('dark');

    // Usei localStorage para aplicar em outras paginas de atividades
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('temasave', 'dark');
        alert('Cuidado, o index não usa este tema escuro!');
        console.log('O index utiliza um css diferente, então o tema escuro não pode ser aplicado.');
    } else {
        localStorage.setItem('temasave', '');
    }
});