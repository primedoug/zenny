function converterMoeda() {
    let valorBase = document.querySelector("[data-valor=base]")
    let valorEntrada = document.querySelector("[data-valor=entrada]")
    let valorSaida = document.querySelector("[data-valor=saida]")
    let resultado = valorBase.value * valorEntrada.value

    if (valorBase.value === "") {
        return valorSaida.value = ""
    }
    else {
        return valorSaida.value = resultado.toFixed(2)
    }
}

export { converterMoeda };