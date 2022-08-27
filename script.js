let firstWins = document.querySelector('.first-wins').textContent;
let firstLoses = document.querySelector('.first-loses').textContent;
let firstGameDifferential = parseInt(firstWins) - parseInt(firstLoses);
const non1Teams = Array.from(document.querySelectorAll('.team'));
let wins = Array.from(document.querySelectorAll('.wins'));
let loses = Array.from(document.querySelectorAll('.loses'));
let gamesBackArea = Array.from(document.querySelectorAll('.games-back'));

function Team(wins, loses) {
	this.wins = wins;
	this.loses = loses;
	let teamDifferential = parseInt(wins) - parseInt(loses);
	this.gamesBackNumber = function() {
		let gamesBackNumber = (firstGameDifferential - teamDifferential) / 2;
		return gamesBackNumber;
 }
}

let teamNumber = 0;

non1Teams.forEach(() => {
	let newTeam = new Team(wins[teamNumber].textContent, loses[teamNumber].textContent);
	let TeamGamesBack = newTeam.gamesBackNumber();
	let TeamGamesBackArea = gamesBackArea[teamNumber];
	TeamGamesBackArea.textContent = TeamGamesBack;
	teamNumber += 1;
})


