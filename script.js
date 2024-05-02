console.log('Hello World!');

prompt(
  `👇 If you want to play me  then Read Me 👇
  Please Cancel Me twice first to see the Instructions, then you will know what to do, that will be intrusting I promise...!`
);

const options = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  let computerChoice = options[Math.floor(Math.random() * options.length)];
  return computerChoice;
}

// getComputerChoice();

function getHumanChoice() {
  let humanChoice = prompt(
    'Enter your choice: rock, paper, or scissors'
  ).toLowerCase();

  if (
    humanChoice === 'rock' ||
    humanChoice === 'paper' ||
    humanChoice === 'scissors'
  ) {
    return humanChoice;
  } else {
    // If the input is not valid, prompt again recursively
    alert('Invalid choice! Please enter rock✊ , paper✋ , or scissors✌️ .');
    return getHumanChoice();
  }
}

// console.log(getHumanChoice());

// getHumanChoice();

// Just One Round Game

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  // Make the humanChoice case-insensitive
  humanChoice = humanChoice.toLowerCase();

  // Determine the winner of the round
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    console.log('You win! ' + humanChoice + ' beats ' + computerChoice);
    humanScore++;
  } else {
    console.log('You lose! ' + computerChoice + ' beats ' + humanChoice);
    computerScore++;
  }

  // console.log('Your score: ' + humanScore);
  // console.log('Computer score: ' + computerScore);
}

// Test the function by playing a round
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

// playRound(humanChoice, computerChoice);

// -------------------------   Play Game 5 Times ---------------------------------

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    // Make the humanChoice case-insensitive
    humanChoice = humanChoice.toLowerCase();

    // Determine the winner of the round
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
      console.log('You win! ' + humanChoice + ' beats ' + computerChoice);
      humanScore++;
    } else {
      console.log('You lose! ' + computerChoice + ' beats ' + humanChoice);
      computerScore++;
    }

    // Log the scores after each round
    console.log('Your score: ' + humanScore);
    console.log('Computer score: ' + computerScore);
  }

  // Play 5 rounds
  for (let i = 0; i < 5; i++) {
    // Get new choices for each round by recalling the choice functions
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    // Play the round
    playRound(humanChoice, computerChoice);
  }

  // Declare the winner at the end of the game
  if (humanScore > computerScore) {
    console.log('Congratulations! You win the game!');
  } else if (humanScore < computerScore) {
    console.log('Sorry! Computer wins the game!');
  } else {
    console.log("It's a tie game!");
  }
}

// Call the playGame function to start the game
// playGame();
