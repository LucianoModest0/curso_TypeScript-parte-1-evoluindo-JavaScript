export function domInjector(seletor) {
    return function (target, propertyKey) {
        console.log(`modificando prototype ${target.constructor.name} e add getter para ${propertyKey}`);
        let elemento;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
                console.log(`buscando ${seletor} para injetar em ${propertyKey}`);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
//# sourceMappingURL=dom-Injector.js.map