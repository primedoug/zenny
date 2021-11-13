import { obterCotacao } from "./consultarMoeda.js"

function converterMoeda() {
    const valorBase = document.querySelector("[data-valor=base]")
    const valorEntrada = document.querySelector("[data-valor=entrada]")
    const valorSaida = document.querySelector("[data-valor=saida]")
    let resultado = valorBase.value * valorEntrada.value

    if (valorBase.value === "") {
        return valorSaida.value = ""
    }
    else {
        return valorSaida.value = resultado.toFixed(2)
    }
}

function executaConversao() {

    const fn1 = obterCotacao()
    const fn2 = setTimeout(() => {
        converterMoeda();
    }, 500)
    
    return(fn1, fn2)
}

export { executaConversao };