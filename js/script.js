var tourDuJoueur1 = true;
var partieGagnee = false;
var cells = document.querySelectorAll('.cell');

var afficherSymbole = function(cell) {
	// a remplir
	// 1 - verifier case remplie ou pas
	if (cell.textContent === '') {
		// 2 - poser symbole J1 ou j2
    if (tourDuJoueur1) {
			cell.textContent = "x";
			cell.classList.add('rouge');
		} else {
			cell.textContent = "o";
			cell.classList.add('bleu');
		}
		// 4 - changer le joueur courant
		tourDuJoueur1 = !tourDuJoueur1;
	}
};

var combinaisons = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

var verifierCombinaisons = function() {
	// a remplir
	// 3 - check combinaison gagnante
	combinaisons.forEach(function(combinaison) {
		if (
			cells[combinaison[0]].textContent === cells[combinaison[1]].textContent &&
			cells[combinaison[1]].textContent === cells[combinaison[2]].textContent &&
			cells[combinaison[0]].textContent !== ''
		) {
			console.log("T'as gagné bravo");
			var currentPlayer;
			if (tourDuJoueur1) {
				currentPlayer = 'joueur 2';
			} else {
				currentPlayer = 'joueur 1';
			}
			alert('Bravo ' + currentPlayer + '!');
			partieGagnee = true;
		}
	});
};

cells.forEach(function(cell) {
	cell.addEventListener('click', function() {
		if (!partieGagnee) {
			afficherSymbole(cell);
			verifierCombinaisons();
		}
	});
});

function refreshPage(){
    window.location.reload();
}
