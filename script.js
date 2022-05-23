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
    

    //keep on asking until valid input
   
        // get user input from event
        let choice = "nothing";

        const rock = document.querySelector('#rock');
        const paper = document.querySelector('#paper');
        const scissors = document.querySelector('#scissors');

        rock.addEventListener('click', () => {
            return "ROCK";
        });

        paper.addEventListener('click', () => {
            return "PAPER";
        });

        scissors.addEventListener('click', () => {
           return "SCISSORS";
        });





    }


function round(Computer, Player, disp, res)
{
    disp.innerHTML = "<h1>Computer Played:" + Computer + "<br> You Played:" + Player + "</h1>";
    if(Computer.toUpperCase() == "ROCK")
    {
        if(Player.toUpperCase() == "SCISSORS")
        {
            res.innerHTML = "<h1>Computer won</h1>";
            return 1;
        }
        else if (Player.toUpperCase() == "PAPER")
        {
            res.innerHTML = "<h1>You won</h1>";
            return 2;
        }
        else
        {
            res.innerHTML = "<h1>Tie</h1>";
            return 0; 
        }
    }
    else if(Computer.toUpperCase() == "SCISSORS")
    {
        if(Player.toUpperCase() == "ROCK")
        {
            res.innerHTML = "<h1>You won</h1>";
            return 2;
        }
        else if (Player.toUpperCase() == "PAPER")
        {
            res.innerHTML = "<h1>Computer won</h1>";
            return 1;
        }
        else
        {
            res.innerHTML = "<h1>Tie</h1>";
            return 0; 
        }
    }
    else if(Computer.toUpperCase() == "PAPER")
    {
        if(Player.toUpperCase() == "SCISSORS")
        {
            res.innerHTML = "<h1>You won</h1>";
            return 2;
        }
        else if (Player.toUpperCase() == "ROCK")
        {
            res.innerHTML = "<h1>Computer won</h1>";
            return 1;   
        }
        else
        {
            res.innerHTML = "<h1>Tie</h1>";
            return 0; 
        }
    }
}




    const disp  = document.createElement('div');
    const res = document.createElement('div');
    const b = document.querySelector("body");
    b.appendChild(disp);
    b.appendChild(res);

    



    let computerScore = 0;
    let playerScore = "Nothing";


            

            const rock = document.querySelector('#rock');
            const paper = document.querySelector('#paper');
            const scissors = document.querySelector('#scissors');

          

           

            rock.addEventListener('click', () => {
                playerChoice =  "ROCK";
                computerChoice  = computerPlay();
                round(computerChoice, playerChoice, disp, res);
            });

            paper.addEventListener('click', () => {
                playerChoice = "PAPER";
                computerChoice  = computerPlay();
                round(computerChoice, playerChoice, disp, res);
            });

           
            scissors.addEventListener('click', () => {
            playerChoice = "SCISSORS";
            computerChoice  = computerPlay();
            round(computerChoice, playerChoice, disp, res);
          
            
            });

       

            

