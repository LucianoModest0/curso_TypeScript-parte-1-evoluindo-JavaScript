import { Imprimivel } from "./imprimivel.js";

export function imprime(...objs: Array<Imprimivel>) {
    for(let obj of objs) {
        console.log(obj.paraTexto())
    }
}