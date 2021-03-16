var choice = prompt('Pick Rock, Paper, or Scissors.');

console.log(choice);

function checkChoice(choice){
	if(choice === 'Rock'){
		console.log('You lose, computer chose paper');
	}

	else if(choice === 'Paper'){
		console.log('It\'s a tie.');
	}

	else if(choice === 'Scissors'){
		console.log('You win!');
	}

	else{
		console.log('You must pick Rock, Paper, or Scissors.');
	}
}

checkChoice(choice);