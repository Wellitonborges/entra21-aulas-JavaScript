console.group("Ler coteudos com jQuery");
console.log($("#paragrafo_1"));
console.log($("#paragrafo_1").text());

console.groupEnd();

console.group("Alterar conteudo com jQuery");
$("#paragrafo_2").text("Conteudo escrito com jQuery")
console.log($("#paragrafo_2").text());
console.groupEnd();

console.group("Ler varios conteudos com jQuery")
let lista = $('p')
console.log(lista);
console.log(lista.text());

$('p').each(function () {
    console.log(this.textContent);
}
);
console.groupEnd();

console.group("Escrever varios conteudos com jQuery");
$("li").text("Li escrito com jQuery")
console.groupEnd();
console.group("Criar elementos com jQuery");
$('<button>', {
    text: 'Clique aki',
    class: 'btn btn-outline-primary'

}).appendTo("body");

$('body').append(
    $("<br>"),
    $("<b>", { text: 'Texto Negrito' }),
    $("<br>"),
    $('<i>', { text: 'Text de volta' })
)

console.groupEnd();

console.group('Mais itens jQuery');
$('<ul>').append(
    $('<li>'), {
    text: 'Novo iten '
}),
    $('<li>').append(
        $('<li>'), {
        text: 'Segundo iten '
    })
        .appendTo('body')
console.groupEnd();

console.log('====================================================================')

console.group('Exercicio Criar tabela ');

$('<table>', { class: 'table table-dark' }).append(
    $('<thead>', { class: 'bg-dark' }).append(
        $('<th>', {
            text: 'Nome'
        }),
        $('<th>', {
            text: 'Idade'
        }),
        $('<th>', {
            text: 'Cidade'
        }),
    ),
    $('<tbody>', { class: 'table' }).append(
        $('<tr>').append(
            $('<td>', {
                text: 'Welliton'
            }),
            $('<td>', {
                text: '30'
            }),
            $('<td>', {
                text: 'Jaragua do Sul'
            }),

        ),
        $('<tr>').append(
            $('<td>', {
                text: 'Karina'
            }),
            $('<td>', {
                text: '34'
            }),
            $('<td>', {
                text: 'Jaragua do Sul'
            }),

        ),
        $('<tr>').append(
            $('<td>', {
                text: 'Jão'
            }),
            $('<td>',
                {
                    text: '60'
                }),
            $('<td>', {
                text: 'São Francisco'
            })
        )
    )).appendTo('body')
console.groupEnd();

console.log('====================================================================')

console.group('Eventos de click em qualquer lugar');
$('p').on('click', function () {
    alert("Opaaa!!!")
})
$('li').on('click', function () {
    console.warn("Opaaa")
})
$('#ok').on('click', function () {
    alert('Isso ai')
})


console.log('====================================================================')
//Exercicio

$('#add').on('click', function () {
    $('<p>', {
        text: 'inserindo novo conteudo', class: 'alert alert-danger'
    }).appendTo('#akii')
})

$('#clear').on('click', function () {
    $('.alert').remove()
})

console.groupEnd();


