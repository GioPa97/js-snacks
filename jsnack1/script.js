let PrimoNumero = prompt("Inserisci un numero!");
let SecondoNumero = prompt("Inserisci un altro numero!");


if (PrimoNumero > SecondoNumero) {

    console.log(

        ` 
        Numero maggiore: ${PrimoNumero}
    `
    );
} else if (PrimoNumero < SecondoNumero) {
    console.log(

        ` 
        Numero maggiore: ${SecondoNumero}
    `
    );
} else if (PrimoNumero == SecondoNumero) {
    console.log(

        ` 
    I due numeri sono uguali: ${SecondoNumero}
`
    );

}


