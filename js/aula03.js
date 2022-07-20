console.warn("READ")
let leitura = document.getElementById("paragrafo_ler")
console.log(leitura);

console.log("apenas o conteudo ou textContent", leitura.textContent);
console.log("Apenas o conteudo mais elementos internos com HTML",leitura.innerHTML);

let leitura_ler_botao = document.getElementById("botao")
console.log("apena foi escrito html",botao.textContent)
console.log("apena foi escrito com elementos internos com html",botao.innerHTML)

console.warn("READ MORE");
let paragrafos = [...document.getElementsByTagName("p")];
console.log("Lendo todos os paragrafos", paragrafos);

paragrafos.forEach(paragrafo => {
    console.log(paragrafo.textContent);
});

console.warn("White")
let escrita = document.getElementById("paragrafo_escrever");
escrita.title = "www.google.com"
escrita.textContent = "Esse paragrafo foi escrito com Javascript"

document.getElementById("botao".textContent= "Botão alterado com javascript")


let escritaa = document.getElementById("botao_alterado")
escritaa.title = "Eitaaaa"
escritaa.textContent = "Botão alterado oloko"

function mudarTexto(conteudo){
    let elemento = document.getElementById("qualquer");
    elemento.title = conteudo;
    elemento.textContent = conteudo;
}


function addConteudo(conteudo){
    let enter = document.createElement("br")
    document.body.append(enter)
    let elemento = document.createElement("div")
    elemento.textContent = conteudo
    document.body.append(elemento)
}