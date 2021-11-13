import { executaConversao } from "./modules/converterMoeda.js";

function executaEventos() {
    const valorBase = document.querySelector("[data-valor=base]")
    const valorSelectDe = document.querySelector("[data-moeda=moeda1]")
    const valorSelectPara = document.querySelector("[data-moeda=moeda2]")

    const fn1 = valorBase.addEventListener('keyup', executaConversao)
    const fn2 = valorSelectDe.addEventListener('change', executaConversao)
    const fn3 = valorSelectPara.addEventListener('change', executaConversao)
    
    return (fn1, fn2, fn3)
}

executaEventos()