import { obterCotacao } from "./modules/consultarMoeda.js";
import { converterMoeda } from "./modules/converterMoeda.js";

let valorBase = document.querySelector("[data-valor=base]")

valorBase.addEventListener('keyup', () => {
    obterCotacao();

    setTimeout(() => {
        converterMoeda();
    }, 500)
})