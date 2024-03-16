const pedido = [
    {
        nome_produto: "Macarrão a bolonhesa",
        preco_produto: 150,
        horario: "20:25",
        estimativa: "22:25",
        forma_pagamento: "PIX"
    },
    {
        nome_produto: "Feijão",
        preco_produto: 150,
        horario: "20:25",
        estimativa: "22:25",
        forma_pagamento: "PIX"
    }
]
// transformar um objeto JS em JSON
const pedidoJson = JSON.stringify(pedido)

//transformar um JSON em objeto JS
// const objetoJavaScript = JSON.parse(pedidoJson)
const objPedido = JSON.parse(pedidoJson)

// console.log(pedidoJson)
// console.log(objetoJavaScript)

// pedido.map(function(item, index){
//    console.log(item.nome_produto)
// })

let conteudo = `
            <tr>
            <td>Nome do produto</td>
            <td>Preço do produto</td>
            <td>Horário do pedido</td>
            <td>Estimativa</td>
            <td>Forma de pagamento</td>
           </tr>
             `

objPedido.map(function(item, index){
  conteudo += "<tr>"
  conteudo += "<td>"+item.nome_produto+"</td>"
  conteudo += "<td>"+item.preco_produto+"</td>"
  conteudo += "<td>"+item.horario+"</td>"
  conteudo += "<td>"+item.estimativa+"</td>"
  conteudo += "<td>"+item.forma_pagamento+"</td>"
  conteudo += "</tr>"

})

document.querySelector("#tabela"). innerHTML = conteudo