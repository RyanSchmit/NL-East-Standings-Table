let firstWins = document.querySelector('.first-wins');
let firstLoses = document.querySelector('.first-loses');
let firstTotalGames = parseInt(firstLoses.textContent) + parseInt(firstWins.textContent);
console.log(firstTotalGames);
let wins = document.querySelectorAll('.wins');
let loses = document.querySelectorAll('.loses');
wins.forEach((win) => {
	let gamesBack = firstWins.textContent - win.textContent;
})