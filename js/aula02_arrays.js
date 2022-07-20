function definirArray() {
    console.log("Para criar um array basta let nome = [] ");
    console.log("Para criar um array com itens basta let nome = [5,12,2,]");
    let listaVazia = [];
    console.log(listaVazia);
    let nomes = ['Welliton', 'Karina', 'Larissa']
    console.log(nomes);
}

definirArray();

function alertar(menssagem) {
    alert(menssagem);
}

var lista = ["Welliton","Karina","Larissa"];
function inserirItensArray(novo_nome) {
    lista.push(novo_nome)
    console.log(lista);
}


function listarFor() {
    for (let contador = 0; contador < lista.length; contador++) {
        console.log("Repetindo com for o indece " + contador + " = " + lista[contador]);

    }
    console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
    for (const item of lista) {
        console.log("Repetindo com FOR inteligente sem contar o indece " + item);
    }
    console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
    lista.forEach(item => {
        console.log("Repetindo com ForEach Sem contar indece "+item);
});


}


