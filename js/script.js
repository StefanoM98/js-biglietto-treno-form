// CREIAMO LA FUNZIONE PER COMPRARE IL BIGLIETTO
const shopBtn = document.getElementById("shop");
shopBtn.addEventListener("click", function() {
    // SALVIAMO IL NOME E COGNOME DELL'UTENTE
    const nameSurnameInput = document.getElementById("user-name")
    const nameSurname = nameSurnameInput.value
    console.log(nameSurname);
    // SALVIAMO I KM CHE IL CLIENTE VUOLE FARE
    const kmDistanceInput = document.getElementById("distance");
    const kmDistance = kmDistanceInput.value
    console.log(kmDistance);
    // SALVIAMO L'ETA' DEL CLIENTE
    const userAgeInput = document.getElementById("user-age")
    const userAge = userAgeInput.value
    console.log(userAge);

} )