console.log("Hello, World ")

function identify(num){
    if(num==1){
        return 'rock'
    } else if(num==2){
        return 'paper'
    } else {
        return 'scissor'
    }
}

let choice = 1;

let rock = 1;
let paper = 2;
let scissor = 3;

let playerhand = 0;
let computerhand = 0;
let playerwon = 0;
let computerwon = 0;
let whowon = 0;
let winner = 0;

while(choice==1){
    playerwon = 0;
    computerwon = 0;

    let rounds = parseInt(prompt("Enter the number of rounds you wish to play : "));
    while(playerwon < rounds/2 || computerwon < rounds/2){
        playerhand = parseInt(prompt("Choose your hand\n1 for rock\n2 for paper\n3 for scissor\nChoice : "));
        computerhand = Math.floor(Math.random() * 3) + 1;
        
        console.log(`You chose ${identify(playerhand)}\nComputer chose ${identify(computerhand)}\n`);

        if((playerhand == 1 && computerhand == 1) || (playerhand == 2 && computerhand == 2) || (playerhand == 3 && computerhand == 3)){
            console.log("Draw!\n");
        } else if((playerhand == 1 && computerhand == 3) || (playerhand == 2 && computerhand == 1) || (playerhand == 3 && computerhand == 2)){
            console.log("Player wins the round!\n");
            playerwon+=1;
        } else if((computerhand == 1 && playerhand == 3) || (computerhand == 2 && playerhand == 1) || (computerhand == 3 && playerhand == 2)){
            console.log("Computer wins the round!\n");
            computerwon+=1;
        }
    }

    if(playerwon > computerwon){
        console.log("You win !! Congratulations !");
    } else {
        console.log("Computer Wins !! Better luck next time !");
    }

    choice = parseInt(prompt("Do you wish to play again ?\n1 for yes\n0 for no\nChoice : "));
}
