function pegarMoedas() {
    const moeda1 = document.querySelector("[data-moeda=moeda1]").value
    const moeda2 = document.querySelector("[data-moeda=moeda2]").value
    return moeda1 + "-" + moeda2
}

function obterCotacao() {
    const cotacao = pegarMoedas()
    const requisicaoURL = 'https://economia.awesomeapi.com.br/last/' + cotacao

    const requisicao = new XMLHttpRequest()
    requisicao.open('GET', requisicaoURL, true)
    requisicao.responseType = 'json'
    requisicao.send()

    requisicao.onload = function () {
        const dadosCotacao = requisicao.response
        const valorMoeda = dadosCotacao[Object.keys(dadosCotacao)[0]]['bid']
        let valorArredondado = parseFloat(valorMoeda).toFixed(2)
        return exibirValores(valorArredondado)
    }
}

function exibirValores(valorArredondado) {
    const valorBase = document.querySelector("[data-valor=base]")
    const valorEntrada = document.querySelector("[data-valor=entrada]")
    
    if (valorBase.value === "") {
        return valorEntrada.value = ""
    }
    else {
        return valorEntrada.value = valorArredondado
    }
}

export { obterCotacao };