let count = 0;
let countWin = 0;
let countLos = 0;
function game() {
	do {
		// choix du joueur
		const playerChoise = prompt("faite votre choix");

		// choix aléatoire de l'ordinateur
		const choices = ["PIERRE", "PAPIER", "CISEAUX"];
		function getComputerChoice() {
			let indexChoices = Math.floor(Math.random() * choices.length);
			return choices[indexChoices];
		}

		const playerSelection = playerChoise.toUpperCase();
		const computerSelection = getComputerChoice();
		// compteur

		// comparaison des choix
		let resultat = "";
		function playRound(playerSelection, computerSelection) {
			console.log("Vous avez choisi " + playerSelection);
			console.log("l'ordi a choisi " + computerSelection);
			if (playerSelection === computerSelection) {
				resultat = "Vous avez Egalité";
				count++;
			} else if (
				(playerSelection === "PIERRE" && computerSelection === "CISEAUX") ||
				(playerSelection === "CISEAUX" && computerSelection === "PAPIER") ||
				(playerSelection === "PAPIER" && computerSelection === "PIERRE")
			) {
				resultat = "Vous avez Gagné";
				count++;
				countWin++;
			} else {
				resultat = "Vous avez Perdu";
				count++;
				countLos++;
			}

			return resultat;
		}
		console.log(playRound(playerSelection, computerSelection));
	} while (count < 5);
	if (countWin < countLos) {
		return "Après 5 manches vous avez perdu";
	} else if (countWin > countLos) {
		return "Après 5 manches Vous avez gagné";
	} else if (countWin == countLos) {
		return "Après 5 manches Vous avez fait match nul";
	}
}
console.log(game());
