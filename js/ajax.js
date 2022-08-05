//$.ajax()
//$.ajax(
//    {
//       
//   })

//$.ajax() // jQuery usando Ajax



// $.ajax(

//     { // configuração da chamada



//     }

// )

// $.ajax(

//     { // configuração da chamada

//        url:"aqui coloque a sua URL + variaveis",

//        type:"aqui o tipo da chama  GET , POST , PUT , DELETE , PATH",

//        success:function(variavel_de_retorno){

//         //use a variavel de retorno se der certo

//        },

//        error: function(variavel_de_retorno_ruim){

//         //use a variavel de retorno ruim para tentar acertar na proxima

//         // ou saber oq motivou o erro

//        }

//     }

// )

$('#meu_ip').on('click', function () {
    $.ajax({
        url: 'https://httpbin.org/ip',
        type: 'get',
        success: function (retorno) {
            console.log('Opa funcionando', retorno);

        },
        error: function (motivo) {
            console.warn('error', motivo);
        },
    })
})

$("#eco_get").on("click", function () {



    $.ajax({

        url: encodeURI("https://httpbin.org/get?nome=welliton welliton&idade=30&cidade=jaragua"),

        type: "get",

        success: function (retorno) {

            console.log("Deu certo", retorno.args);

        },

        error: function (errouuu) {

            console.warn("ERROU", errouuu);

        },

    });

});

$('#delay_get').on('click', () => {
    let numero = $('#tempo').val()

    $.ajax(
        {
            url: encodeURI('https://httpbin.org/delay/' + numero),
            type: 'get',
            success: (retorno) => {
                console.log('Demorou + chegou');
            },
            error: (errou) => {
                console.warn('Mizeria errou de novo');
            }

        }
    )

})

$('post').on('click', () => {
    var objeto = {
        nome: 'Welliton',
        email: 'Welliton_borges@hotmail.com'
    }


console.log(objeto);

$.ajax({

    url: 'https://httpbin.org/post',
    type: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',

    },
    data: JSON.stringify(objeto),//converte objeto em string

    success: function (dados) {

        alert("Veja no console...")

        console.log(dados)

    },
    error: (errou) => {
        alert('Vixx de volta errou :/ ')
        console.log(errou);
    }
})
})

$.ajax(

    {

        url: encodeURI("https://pokeapi.co/api/v2/pokemon/" + chave),

        type: "get",

        success: (retorno) => {

            console.log("Quem é esse pokemon?", retorno);

            $("body").append(

                $("<div>", { class: "row" }).append(

                    $("<div>", { class: "col-1", text: retorno.id }),

                    $("<div>", { class: "col-3", text: retorno.name }),

                    $("<div>", { class: "col" }).append(

                        $("<img>", { src: retorno.sprites.front_default })

                    ),

                    $("<div>", { class: "col" }).append(

                        $("<img>", { src: retorno.sprites.back_default })

                    )

                )

            )

        },

        error: (opa) => {

            console.warn("Opa oq aconteceu ?", opa);

        }

    }

)
    
    
    