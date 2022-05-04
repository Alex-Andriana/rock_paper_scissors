function computerPlay()
{
    //random number 0, 1, or 2
    let choice = Math.floor(Math.random() * 3);
   
    
    if(choice == 0)
    {
    
        return "ROCK";
    }
    else if(choice == 1)
    {
        
        return "PAPER";
    }
    else
    {
        
        return "SCISSORS";
    }

}

function userPlay()
{
    let change = false;

    //keep on asking until valid input
    while(!change)
    {
        let choice = prompt("Play (ROCK,PAPER,SCISSORS):");
        if(choice == null)
        {
            return "CANCEL";
        }
        if(choice.toUpperCase() == "ROCK")
        {
            
            change = true;
            return "ROCK";
            
        }
        else if (choice.toUpperCase() == "PAPER")
        {

            change = true;
            return "PAPER";
            
        }
        else if (choice.toUpperCase() == "SCISSORS")
        {
            change = true;
            return "SCISSORS";
        }   
        else
        {
             //wrong input
             console.log("Invalid Input, try again (ROCK,PAPER,SCISSORS)")
        }

    }
}

function round(Computer, Player)
{
    //get winner according to choices
    if(Computer.toUpperCase() == "ROCK")
    {
        if(Player.toUpperCase() == "SCISSORS")
        {
            console.log("Computer won");
            return 1;
        }
        else if (Player.toUpperCase() == "PAPER")
        {
            console.log("You won");
            return 2;
        }
        else
        {
            console.log("Tie!");
            return 0; 
        }
    }
    else if(Computer.toUpperCase() == "SCISSORS")
    {
        if(Player.toUpperCase() == "ROCK")
        {
            console.log("You won");
            return 2;
        }
        else if (Player.toUpperCase() == "PAPER")
        {
            console.log("Computer won");
            return 1;
        }
        else
        {
            console.log("Tie!");
            return 0; 
        }
    }
    else if(Computer.toUpperCase() == "PAPER")
    {
        if(Player.toUpperCase() == "SCISSORS")
        {
            console.log("You won");
            return 2;
        }
        else if (Player.toUpperCase() == "ROCK")
        {
            console.log("Computer won");
            return 1;   
        }
        else
        {
            console.log("Tie!");
            return 0; 
        }
    }
}

function game()
{

    let computerScore = 0;
    let playerScore = 0;

    //five times
    for(let i = 0; i<5; i++)
    { 
        console.log("************ROUND: " + (i+1));
        //get choice and play round
        let computerChoice  = computerPlay();
        let playerChoice = userPlay();

        if(playerChoice == "CANCEL") return;
       
        console.log("You played " + playerChoice);
        console.log("Computer played " + computerChoice);
        let result = round(computerChoice, playerChoice);

        //add score according to win returned from round
        if (result == 1)
        {
            computerScore++;
        }
        else if(result == 2)
        {
            playerChoice++;
        }
    }

    //final results
    console.log("Your score is: " + playerScore);
    console.log("Computer score is: " + computerScore);
    if(computerScore < playerScore)
    {
        console.log("Game over: You won");
    }
    else if(computerScore > playerScore)
    {
        console.log("Game over: You lost, computer won");
    }
    else
    {
        console.log("Game over: Tie!")
    }
    
}
function draw() {
    ctx.clearRect(0,0,WIDTH,HEIGHT);
    for (let i = 0; i < 100; i++) {
      ctx.beginPath();
      ctx.fillStyle = 'rgba(255,0,0,0.5)';
      ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
      ctx.fill();
    }
  }



draw();
game();