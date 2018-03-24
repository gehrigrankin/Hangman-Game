

var userWins = document.getElementById("user-wins");
var userLosses = document.getElementById("user-losses");
var userText = document.getElementById("user-text");

//Normal Variables
userWins = 0;
userLosses = 0;
var userWord = [];
var userLetters = [];
userGuessesLeft = 5;
comWordBank = ['hello', 'goodbye', 'rocks', 'cheese'];
var comRandWord = comWordBank[Math.floor(Math.random() * comWordBank.length)];
hiddenAnswer = [];

for (var i=0; i<comRandWord.length; i++){
    hiddenAnswer.push("_");
}

//writes out the default value of the variables
document.getElementById("user-wins").innerHTML = userWins;
document.getElementById("user-losses").innerHTML = userLosses;
document.getElementById("hidden-answer").innerHTML = hiddenAnswer.join(" ");


document.onkeyup = function(event){
    var userGuess = event.key.toLowerCase();

    userLetters.push(userGuess);
    console.log(comRandWord);
    
    function howManyRight(letter){

        var howMany = 0;

        for (var i=0; i<comRandWord.length; i++){
            
            if (letter == comRandWord[i]){
                howMany++;
            }
        } 
        return howMany;
    }
    
    if (howManyRight(userGuess) == 0){
        userGuessesLeft--;
    }
    else {
        
        console.log(comRandWord);
            
        for (var j = 0; j < comRandWord.length; j++){
            if (userGuess == comRandWord[j]){
                hiddenAnswer[j] = userGuess;
                
                
            }
            else {
                hiddenAnswer[j] = hiddenAnswer[j];
            }
            console.log(hiddenAnswer);
        }      
        
        document.getElementById("hidden-answer").innerHTML = hiddenAnswer.join(" ");
    }
    
    
    if (hiddenAnswer.join("") == comRandWord ){
        userGuessesLeft = 5;
        userLetters = [];
        userWins++;
        comRandWord = comWordBank[Math.floor(Math.random() * comWordBank.length)];

        hiddenAnswer = [];
        document.getElementById("hidden-answer").innerHTML = hiddenAnswer;

        for (var i=0; i<comRandWord.length; i++){
            hiddenAnswer.push("_");
        }

        document.getElementById("hidden-answer").innerHTML = hiddenAnswer.join(" ");

        console.log("You win!");
    }
    

    console.log(userGuessesLeft);

    if (userGuessesLeft == 0) {
        userGuessesLeft = 5;
        userLetters = [];
        userLosses++;
        comRandWord = comWordBank[Math.floor(Math.random() * comWordBank.length)];
        hiddenAnswer = [];

        for (var i=0; i<comRandWord.length; i++){
            hiddenAnswer.push("_");
        }

        document.getElementById("hidden-answer").innerHTML = hiddenAnswer.join(" ");

    }

    document.getElementById("user-wins").innerHTML = userWins;
    document.getElementById("user-losses").innerHTML = userLosses;
    document.getElementById("user-text").innerHTML = userLetters.join(", ");
}
