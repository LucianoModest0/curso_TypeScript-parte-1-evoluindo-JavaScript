export function inspect(){
    return function (
        target: any,
        propetyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args: Array<any>) {
            console.log(`----- Método ${propetyKey}`);
            console.log(`----- parâmetros ${JSON.stringify(args)}`)
            const retorno = metodoOriginal.apply(this, args);
            console.log(`----- retorno ${JSON.stringify(retorno)}`)
            return retorno;
        }

        return descriptor
    }
}