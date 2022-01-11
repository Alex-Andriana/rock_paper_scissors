function computerPlay()
{
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

    while(!change)
    {
        let choice = prompt("Play (ROCK,PAPER,SCISSORS):");
        if(choice == null)
        {
            return 0;
        }
        if(choice.toUpperCase() == "ROCK")
        {
            
            change = true;
            console.log("You played ROCK");
            return "ROCK";
            
        }
        else if (choice.toUpperCase() == "PAPER")
        {

            change = true;
            console.log("You played PAPER");
            return "PAPER";
            
        }
        else if (choice.toUpperCase() == "SCISSORS")
        {
            change = true;
            console.log("You played SCISSORS");
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
    for(let i = 0; i<5; i++)
    {
        let computerChoice  = computerPlay();
        let playerChoice = userPlay();
        console.log("Computer played " + computerChoice);
        let result = round(computerChoice, playerChoice);
        if (result == 1)
        {
            computerScore++;
        }
        else if(result == 2)
        {
            playerChoice++;
        }
    }
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

game();