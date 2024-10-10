/*Descrizione:
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
BONUS:
Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
Consigli del giorno:
Pensate prima in italiano.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma.
Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"*/
//------------------------------------------------------------------------------------------------------------
//dammi 5 numeri casuali
function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}
let number_casual = []
for (let i = 0; i < 5; i++) {
	number_casual[i] = random(1, 100)
}
console.log(number_casual)

//dati 5 numeri visualizzare a schermo per 30 secondi
simonEl = document.getElementById('simon')
simonEl.innerHTML = number_casual

formEl = document.getElementById('form')
resultEl = document.getElementById('result')
//dopo 30 secondi nascondere

setTimeout(function () {
	simonEl.style.display = 'none'

	formEl.style.display = 'block'
}, 30000)

//e inserire 5 numeri da confrontare
formEl.addEventListener('submit', function (event) {
	event.preventDefault()
	let input1 = Number(document.getElementById('number1').value)
	let input2 = Number(document.getElementById('number2').value)
	let input3 = Number(document.getElementById('number3').value)
	let input4 = Number(document.getElementById('number4').value)
	let input5 = Number(document.getElementById('number5').value)
	let number_win = []
	for (let i = 0; i < number_casual.length; i++) {
		if (
			input1 === number_casual[i] ||
			input2 === number_casual[i] ||
			input3 === number_casual[i] ||
			input4 === number_casual[i] ||
			input5 === number_casual[i]
		) {
			number_win.push(number_casual[i])
		}
	}
	console.log(number_win)
	formEl.style.display = 'none'
	if (number_win.length === 0) {
		resultEl.innerHTML = `<h1>Non hai indovinato nessun numero</h1>`
	} else {
		resultEl.innerHTML = `<h1>Hai indovinato ${number_win.length} numeri, i numeri che hai indovinato sono ${number_win}</h1>`
	}
})
//controllare i numeri e far apparire a schermo quanti numeri sono stati indovinati e  quali
