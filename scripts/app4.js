const game = () => {
	let playerScore = 0;
	let computerScore = 0;
	let moves = 0;


	// Function to
	const playGame = () => {
		const rockBtn = document.querySelector('.rock');
		const paperBtn = document.querySelector('.paper');
		const scissorBtn = document.querySelector('.scissor');
        const lizardBtn = document.querySelector('.lizard');
        const spockBtn = document.querySelector('.spock');
		const playerOptions = [rockBtn,paperBtn,scissorBtn,lizardBtn,spockBtn];
		const player2Options = ['rock','paper','scissors','lizard','spock']
		
		// Function  start playing game
		playerOptions.forEach(option => {
			option.addEventListener('click',function(){

				const movesLeft = document.querySelector('.movesleft');
				moves++;
				movesLeft.innerText = `Moves Left: ${11-moves}`;
				

				
				

				// Function check who wins
				winner(this.innerText,computerChoice)
				
				// Calling gameOver function after 11 moves
				if(moves == 11){
					gameOver(playerOptions,movesLeft);
				}
			})
		})
		
	}

	// Function  decide winner
	const winner = (player,computer) => {
		const result = document.querySelector('.result');
		const playerScoreBoard = document.querySelector('.person-count');
		const computerScoreBoard = document.querySelector('.bot-count');
		player = player.toLowerCase();
		computer = computer.toLowerCase();
		if(player === computer){
			result.textContent = 'Tie'
		}
		else if(player == 'rock'){
			if(computer == 'paper'){
				result.textContent = 'Paper covers rock';
				result.textContent = 'Computer Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;

			}else{
				result.textContent = 'Paper covers rock';
				result.textContent = 'Player Won'
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'scissors'){
			if(computer == 'rock'){
				result.textContent = 'Rock crushes scissors';
				result.textContent = 'Computer Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'Rock crushes scissors';
				result.textContent = 'Player Won';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'paper'){
			if(computer == 'scissors'){
				result.textContent = 'Scissors cuts paper';
				result.textContent = 'Computer Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'Scissors cuts paper';
				result.textContent = 'Player Won';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
        else if(player == 'lizard'){
			if(computer == 'scissors'){
				result.textContent = 'Scissors decapitates lizard';
				result.textContent = 'Computer Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'Scissors decapitates lizard'
				result.textContent = 'Player Won';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
        }
		else if(player == 'lizard'){
			if(computer == 'rock'){
				result.textContent = 'Rock crushes lizard'
				result.textContent = 'Computer Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'Rock crushes lizard'
				result.textContent = 'Player Won';
				playerScore++;
				playerScoreBoard.textContent = playerScore; 
			}
		}
		else if(player == 'spock' ){
			if(computer == 'paper'){
				result.textContent = 'Paper disproves spock';
				result.textContent = 'Computer Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'Paper disproves spock';
				result.textContent = 'Player Won';
				playerScoreBoard++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'rock'){
			if(computer == 'spock'){
				result.textContent = 'Spock vaporizes rock';
				result.textContent = 'Computer Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'Spock vaporizes rock';
				result.textContent = 'Player Won';
				playerScoreBoard++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'paper'){
			if(computer == 'lizard'){
				result.textContent = 'Lizard eats paper';
				result.textContent = 'Computer Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'Lizard eats paper';
				result.textContent = 'Player Won';
				playerScoreBoard++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'spock'){
			if(computer == 'lizard'){
				result.textContent = 'Lizard poisons spock';
				result.textContent = 'Computer Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'Lizard poisons spock';
				result.textContent = 'Player Won';
				playerScoreBoard++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'scissors'){
			if(computer == 'spock'){
				result.textContent = 'Spock smashes scissors';
				result.textContent = 'Computer Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'Spock smashes scissors';
				result.textContent = 'Player Won';
				playerScoreBoard++;
				playerScoreBoard.textContent = playerScore;
			}
		}
	}

	// Function  run when game is over
	const gameOver = (playerOptions,movesLeft) => {

		const chooseMove = document.querySelector('.move');
		const result = document.querySelector('.result');
		const reloadBtn = document.querySelector('.reload');
        const homebtn = document.querySelector('.home');

		playerOptions.forEach(option => {
			option.style.display = 'none';
		})

	
		chooseMove.innerText = 'Game Over!!'
		movesLeft.style.display = 'none';

		if(playerScore > computerScore){
			result.style.fontSize = '2rem';
			result.innerText = 'You Won The Game'
			result.style.color = '#308D46';
			result.style.fontWeight = 'bold';
		}
		else if(playerScore < computerScore){
			result.style.fontSize = '2rem';
			result.innerText = 'You Lost The Game';
			result.style.color = 'red';
			result.style.fontWeight = 'bold';
		}
		else{
			result.style.fontSize = '2rem';
			result.innerText = 'Tie';
			result.style.color = 'grey'
			result.style.fontWeight = 'bold';
		}
		reloadBtn.innerText = 'Restart';
		reloadBtn.style.display = 'flex'
		reloadBtn.addEventListener('click',() => {
			window.location.reload();
        
		})
        homebtn.innerText = 'Home';
        homebtn.style.display = 'flex'
        homebtn.addEventListener('click',() =>{
            window.location.href = "/index.html"
        })

	}


	// Calling playGame function inside game
	playGame();
	
}

// Calling the game function
game();