function pegarMoedas() {
    let moeda1 = document.querySelector("[data-moeda=moeda1]").value
    let moeda2 = document.querySelector("[data-moeda=moeda2]").value
    return moeda1 + "-" + moeda2
}

function obterCotacao() {
    let cotacao = pegarMoedas()
    let requisicaoURL = 'https://economia.awesomeapi.com.br/last/' + cotacao

    let requisicao = new XMLHttpRequest()
    requisicao.open('GET', requisicaoURL, true)
    requisicao.responseType = 'json'
    requisicao.send()

    requisicao.onload = function () {
        let dadosCotacao = requisicao.response
        let valorMoeda = dadosCotacao[Object.keys(dadosCotacao)[0]]['bid']
        let valorArredondado = parseFloat(valorMoeda).toFixed(2)
        return exibirValores(valorArredondado)
    }
}

function exibirValores(valorArredondado) {
    let valorBase = document.querySelector("[data-valor=base]")
    let valorEntrada = document.querySelector("[data-valor=entrada]")
    
    if (valorBase.value === "") {
        return valorEntrada.value = ""
    }
    else {
        valorEntrada.value = valorArredondado
    }
}

export { obterCotacao };