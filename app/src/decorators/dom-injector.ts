export function domInjector (seletor: string) {
    return function(target: any, propertyKey: string) {
       console.log(`modificando prototype ${target.constructor.name} e add getter para ${propertyKey}`)
       
       let elemento: HTMLElement;
       
       const getter = function () {
           if(!elemento) {
            elemento = <HTMLElement>document.querySelector(seletor);
            console.log(`buscando ${seletor} para injetar em ${propertyKey}`)
           }   
            
            return elemento;
        }

        Object.defineProperty(
            target, 
            propertyKey,
             { get: getter}
            )
    }
}
