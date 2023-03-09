// CREIAMO LA FUNZIONE PER COMPRARE IL BIGLIETTO
const shopBtn = document.getElementById("shop");
shopBtn.addEventListener("click", function() {
    // SALVIAMO IL NOME E COGNOME DELL'UTENTE
    const nameSurname = document.getElementById("user-name")
    console.log(nameSurname);
    // SALVIAMO I KM CHE IL CLIENTE VUOLE FARE
    const kmDistance = document.getElementById("distance");
    console.log(kmDistance);
    // SALVIAMO L'ETA' DEL CLIENTE
    const userAge = document.getElementById("user-age")
    console.log(userAge);
} )