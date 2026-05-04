let nomes = ["Alice", "Bob", "Charlie", "David", "Eve"];
let done = false;

document.getElementById("iniciar").addEventListener("click", function() {
    if (done == false) {
    for (let i = 0; i < nomes.length; i++) {
        const name = document.createElement("li");
        name.id = "item";
        name.innerText = nomes[i];
        const list = document.querySelector("#lista-nomes");
        list.appendChild(name);
    }
    done = true;
    iniciar.innerText = "Feito!";
    }
});