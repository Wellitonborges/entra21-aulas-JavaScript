procedimento(); // Essa função esta sendo chamada e não precisa de argumentos

bemVindo("Welliton");
bemVindo(true);
bemVindo(30);
bemVindo(bemVindo);
bemVindo(1.75);


login("Welliton", 123);

maiorIdade(15);

let resultado = maiorIdade(16);

console.log(resultado);

console.log(maiorIdade(18));

let concatenado = maiorIdade(10) + maiorIdade(20);
console.log(concatenado);


console.log(calcularMedia(8.8, 9.5, 9.8))

console.log(verificarSituacao(5));


console.log(
    verificarSituacao(
        calcularMedia(8, 9, 10)
    )
);


function procedimento() { // Declaração da função
    console.log("Esse tipo de função sempre executar da mesma forma, porque não tenho parâmetros para deixar dinâmico");

    console.warn("Essa função tabém nçao etorna nada");
}
procedimento(); //Chamada da função 

function bemVindo(nome) {
    console.log(typeof (nome));
    console.warn("Bem-vindo " + (nome));
    console.warn(`Bem-vindo ${nome}`)
};

function login(userName, password) {
    console.error("O usuario " + userName + "cuja a senha é: " + password + " está inadipmente, não pode entrar")
}

function maiorIdade(idade) {
    if (idade > 18) {
        return "Menor de idade"
    } else {
        return "Maior de idade"
    }

}


function calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

function verificarSituacao(media) {
    return media >= 7 ? "Aprovado" : "Reprovado";

}

function somar(a, b) {

    return a + b;

}
function menos(a, b) {

    return a - b;
}
function multiplicar(a, b) {

    return a * b;

}
function dividir(a, b) {
    return a / b;
}
console.log("Somando ") + (2, 2);
console.log("Diminuir " + (3, 1));
console.log("Multiplicar " + (3, 4));
console.log("Dividir " + (3, 4));
