// CREIAMO LA FUNZIONE PER COMPRARE IL BIGLIETTO
const shopBtn = document.getElementById("shop");
shopBtn.addEventListener("click", function() {
    // Generare numero per Codice CP
    const rndNumber = Math.floor(Math.random() * (1000 - 90 + 1)) + 90 ;
    console.log(rndNumber);
    // Generare numero per corrazza
    const anotherNumber = Math.floor(Math.random() * 17) + 1;
    console.log(anotherNumber);
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

    let ticket = ""

    if (userAge === "under") {
        finalPrice = (price - (price * 20 / 100).toFixed(2));
        ticket = "sconto del 20%"
    } else if (userAge === "over") {
        finalPrice = (price - (price * 40 / 100).toFixed(2));
        ticket = "sconto del 40%"
    } else {
        finalPrice = price
        ticket = "prezzo standard"
    }
    console.log(finalPrice);

    // STAMPIAMO IL PREZZO IN PAGINA
    document.getElementById("user").innerHTML = `${nameSurname}`
    document.getElementById("ticket-typeof").innerHTML = `${ticket}`
    document.getElementById("wagon-num").innerHTML = `${anotherNumber}`
    document.getElementById("cp-code").innerHTML = `${rndNumber}`
    document.getElementById("final-price").innerHTML = `€${finalPrice}`
} )