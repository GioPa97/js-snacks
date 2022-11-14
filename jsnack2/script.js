let PrimaParola = prompt("Inserisci una parola!");
let SecondaParola = prompt("Inserisci un'altra parola!");


if (PrimaParola.length > SecondaParola.length) {

    console.log(

        ` 
        Print: ${SecondaParola}
               ${PrimaParola}
    `
    );
} else if (PrimaParola.length < SecondaParola.length) {
    console.log(

        ` 
        Print: ${PrimaParola}
               ${SecondaParola}
    `
    );
} else if (PrimaParola.length == SecondaParola.length) {
    console.log(

        ` 
    Print:    ${PrimaParola} e ${SecondaParola}
`
    );

}


