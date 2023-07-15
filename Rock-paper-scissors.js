let score = JSON.parse(localStorage.getItem
  ('score')) || {
    Wins : 0,
    Losses : 0,
    Ties : 0
  };


  updateScoreElement(); 

  function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';
    if (playerMove === 'Rock') {
      if (computerMove === 'Rock') {
        result = 'Tie.';
      } else if (computerMove === 'Paper') {
        result = 'You Lose.';
      } else if (computerMove === 'Scissors') {
        result = 'You Win.';
      } 

    } else if (playerMove === 'Paper') {
      if (computerMove === 'Rock') {
        result = 'You Win.';
      } else if (computerMove === 'Paper') {
        result = 'Tie.';
      } else if (computerMove === 'Scissors') {
        result = 'You Lose.';
      }
      
    } else if (playerMove === 'Scissors') {
      if (computerMove === 'Rock') {
        result = 'You Lose.';
      } else if (computerMove === 'Paper') {
        result = 'You Win.';
      } else if (computerMove === 'Scissors') {
        result = 'Tie.';
      }
    }

    if (result === 'You Win.') {
      score.Wins += 1;
    } else if (result === 'You Lose.') {
      score.Losses += 1;
    } else if (result === 'Tie.') {
      score.Ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-moves').innerHTML = (`You
      <img src="icons/${playerMove}.png" class="icons">
      Computer
      <img src="icons/${computerMove}.png" class="icons">`)
    document.querySelector('.js-result').innerHTML = result;

  }

  function updateScoreElement () {
    document.querySelector('.js-score')
      .innerHTML = `Wins: ${score.Wins}, Looses: ${score.Losses}, Ties: ${score.Ties}`;
  }

  function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'Rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'Paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'Scissors';
    }

    return(computerMove);

    document.querySelector('.js-result').innerHTML

    
  }

  function clearMovesAndResult() {
      document.querySelector('.js-moves').innerHTML = '';
      document.querySelector('.js-result').innerHTML = '';
    }