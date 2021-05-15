const game = () => {
    let pScore = 0
    let cScore = 0

  
    //Start the Game
    const startGame = () => {
      const playBtn = document.querySelector(".intro button")
      const introScreen = document.querySelector(".intro")
      const match = document.querySelector(".match")
  
      playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut")
        match.classList.add("fadeIn")
      })
    }
    
    //Play Match
    const playMatch = () => {
      const options = document.querySelectorAll(".options button")
      const playerHand = document.querySelector(".player-hand")
      const computerHand = document.querySelector(".computer-hand")
      const hands = document.querySelectorAll(".hands img")
  //animate hands
      hands.forEach(hand => {
        hand.addEventListener("animationend", function() {
          this.style.animation = ""
        })
      })
      //Computer Options
      const computerOptions = ["Rock", "Paper", "Scissors"]
  
      options.forEach(option => {
        option.addEventListener("click", function() {
          //Computer Choice
          const computerNumber = Math.floor(Math.random() * 3)
          const computerChoice = computerOptions[computerNumber]
  
          setTimeout(() => {
            //call hands
            compareHands(this.textContent, computerChoice);
            // Images
            playerHand.src= `./images/${this.textContent}.png`
            computerHand.src= `./images/${computerChoice}.png`
          }, 2000);
          //Animation
          playerHand.style.animation = "shakePlayer 2s ease"
          computerHand.style.animation = "shakeComputer 2s ease"
        })
      })
    }
  
    //updates score
    const updateScore = () => {
      const playerScore = document.querySelector(".player-score p");
      const computerScore = document.querySelector(".computer-score p");
      playerScore.textContent = pScore
      computerScore.textContent = cScore
    }

    const compareHands = (playerChoice, computerChoice) => {
        //Updates Text
        const winner = document.querySelector(".winner")
        // tie
        if (playerChoice === computerChoice) {
            winner.textContent = "Tied!"
            //subtract
            cScore--
            pScore--
            updateScore()
            return
        }
        //Rock
        if (playerChoice === "Rock") {
            if (computerChoice === "Scissors") {
                winner.textContent = "You Win!"
                pScore++
                updateScore()
                return
            } else {
                winner.textContent = "Computer Wins!"
                cScore++
                updateScore()
                return
            }
        }
        //Paper
        if (playerChoice === "Paper") {
            if (computerChoice === "Scissors") {
                winner.textContent = "Computer Wins!"
                cScore++
                updateScore()
                return
            } else {
                winner.textContent = "You Win!"
                pScore++;
                updateScore()
                return
            }
        }
        //Scissors
        if (playerChoice === "Scissors") {
            if (computerChoice === "Rock") {
                winner.textContent = "Computer Wins!"
                cScore++;
                updateScore()
                return
            } else {
                winner.textContent = "You Win!"
                pScore++
                updateScore()
                return
            }
        }
        
        
        
    }





    //call inner function
    startGame()
    playMatch()
   
}

//start the game function
game()
