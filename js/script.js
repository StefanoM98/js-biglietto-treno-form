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

    // CALCOLARE IL PREZZO DEL BIGLIETTO IN BASE AI CHILOMETRI SCELTI
    const price = kmDistance * 0.21;
    console.log(price);

    // CALCOLIAMO LO SCONTO DEL BIGLIETTO

    if (userAge === "under") {
        finalPrice = (price - (price * 20 / 100).toFixed(2));
    } else if (userAge === "over") {
        finalPrice = (price - (price * 40 / 100).toFixed(2));
    } else {
        finalPrice = price
    }
    console.log(finalPrice);

    // STAMPIAMO IL PREZZO IN PAGINA
    document.getElementById("final-price").innerHTML = `Il prezzo del tuo biglietto è: €${finalPrice}`
    
} )