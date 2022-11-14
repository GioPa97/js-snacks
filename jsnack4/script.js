let Invitati = ["michele", "sara", "pippo", "paulo", "eleonora"]
let InvitatoUser;
InvitatoUser = prompt("Mi dica il suon nome:");


if (Invitati.includes(InvitatoUser)) {
    console.log(
        `
        "Buonasera!"
        `);

} else {
    console.log(
        `
        "Mi dispiace, non sei nella lista!"
        `
    );
}