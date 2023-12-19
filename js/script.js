// Initial Variables
const priceForKm = 0.21
const userAge = document.getElementById('userage');
const distance = document.getElementById('distance');
const userName = document.getElementById('name');
const button = document.getElementById('submit');
const clean = document.getElementById('remove')

// Chiedo all'utente nome, chilometri ed età
button.addEventListener('click', function () {
    event.preventDefault();
    const name = userName.value;
    console.log(name)
    const km = parseInt(distance.value)
    console.log(km)
    const age = userAge.value
    console.log(age)

    // Validazione

    if (isNaN(km) || km < 1 || name === '') {
        alert('Devi inserire un nome e dei chilometri validi');
    } else {

        // Calcolo il prezzo pieno del biglietto senza sconti
        const fullPrice = priceForKm * km
        console.log(fullPrice)

        // Calcolo i possibili sconti
        const discountUnder = fullPrice * (20 / 100)
        const discountOver = fullPrice * (40 / 100)

        // Calcolo il prezzo finale con gli sconti
        const priceUnder = (fullPrice - discountUnder)
        console.log(priceUnder)
        const priceOver = (fullPrice - discountOver)
        console.log(priceOver)

        // Riduco il prezzo finale a due decimali
        const finalUnder = priceUnder.toFixed(2)
        console.log(finalUnder)
        const finalOver = priceOver.toFixed(2)
        console.log(finalOver)
        const finalPrice = fullPrice.toFixed(2)
        console.log(finalPrice)

        // Creo variabile per il messaggio da dare all'utente in caso sia tra i 18 e i 65 anni

        let message = finalPrice
        console.log(message)


        // Applico il prezzo in base all'età
        if (age === 'minorenne') {
            message = finalUnder
            console.log(message)
        } else if (age === 'over65') {
            message = finalOver
            console.log(message)
        }

        // Creo variabile per il tipo di ticker e lo applico

        let typeticket = "Biglietto Standard"

        if (age === 'minorenne') {
            typeticket = 'Biglietto Under'
            console.log(typeticket)
        } else if (age === 'over65') {
            typeticket = 'Biglietto Over'
            console.log(typeticket)
        }

        // Creo la randomizzazione della carrozza

        const minCar = 1
        const maxCar = 20
        const minCp = 1
        const maxCp = 99999

        const randomCar = Math.floor(Math.random() * (maxCar - minCar + 1)) + minCar
        const randomCp = Math.floor(Math.random() * (maxCp - minCp + 1)) + minCp


        // Scrivo il risultato in pagina
        document.getElementById('ticketname').innerHTML = name;
        document.getElementById('tickettype').innerText = typeticket;
        document.getElementById('cabin').innerText = randomCar;
        document.getElementById('cpcode').innerText = randomCp;
        document.getElementById('result').innerText = message;

    }
})

// Bottone di annullamento 

clean.addEventListener('click', function () {
    event.preventDefault();
    distance.value = '';
    name.value = '';
    userAge.value = 'Scegli';
})
