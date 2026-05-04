// este script altera o tema das demais paginas de atividades
let temaread = localStorage.getItem('temasave');

(function() {
    if (temaread === 'dark') {
        document.body.classList.toggle('dark');
    }
})();