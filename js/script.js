// STARTING PAGE VARIABLES START

let firstTitle = document.querySelector('.first-title');

let firstInput = document.querySelector('.first-input');

let firstBtn = document.querySelector('.first-btn');

let errorTxt = document.querySelector('.error-txt');

let startingPage = document.querySelector('#starting-page');

// STARTING PAGE VARIABLES END



// PLAYER ONE PAGE VARIABLES START

let playerOne = document.querySelector('#playerone')

let playeroneInput = document.querySelector('.playerone-input');

let playeroneBtn = document.querySelector('.playerone-btn');

let playeroneError = document.querySelector('.playerone-error');

// PLAYER ONE PAGE VARIABLES END


// PLAYER TWO PAGE VARIABLES START
let playerTwo = document.querySelector('#playertwo')

let playertwoInput = document.querySelector('.playertwo-input')

let playertwoBtn = document.querySelector('.playertwo-btn')

let playertwoError =document.querySelector('.playertwo-error')

let chance = document.querySelector('.chance')

let count = 5
// PLAYER TWO PAGE VARIABLES END


// RESULT PART VARIABLES START 
let results = document.querySelector('#results')

let gameResult = document.querySelector('.game-result')

// RESULT PART VARIABLES END



// FIRST PAGE FUNCTIONS START 

firstBtn.addEventListener('click',function(){
    if(firstInput.value == ''){
        errorTxt.style.display ='block';
    }
    else{
        console.log(firstInput.value);
        errorTxt.style.display ='none';
        startingPage.style.display ='none';
        playerOne.style.display = 'block';
    }
})

// FIRST PAGE FUNCTIONS END



// PLAYER ONE PAGE FUNCTIONS START 

playeroneBtn.addEventListener('click',function(){
    if(playeroneInput.value == ''){
        playeroneError.style.display ='block';
    }
    else if(playeroneInput.value<1 || playeroneInput.value >10){
        playeroneError.style.display ='block';
        playeroneError.innerHTML = 'Add number between 1-10'
    }
    else{
        if(playeroneInput.value - 15){
            playeroneError.style.display ='none';
            playerOne.style.display  ='none';
            playerTwo.style.display ='block';
            
        }
        else{
            playeroneError.style.display ='block';
            playeroneError.innerHTML = 'Add number between 1-10'
        }
    }
})

// PLAYER ONE PAGE FUNCTIONS END



// PLAYER TWO PAGE FUNCTIONS START

playertwoBtn.addEventListener('click',function(){
    if(playertwoInput.value == ''){
        playertwoError.style.display ='block';
    }
    else if(playertwoInput.value<1 || playertwoInput.value >10){
        playeroneError.style.display ='block';
        playeroneError.innerHTML = 'Add number between 1-10'
    }
    else{
        if(playertwoInput.value - 15){
            playertwoError.style.display ='none';
            results.style.display ='block';
            
        }
        else{
            playertwoError.style.display ='block';
            playertwoError.innerHTML = 'Add number between 1-10'
        }
    }
    if(playertwoInput.value == playeroneInput.value){
        console.log('player 2 win');
        playerTwo.style.display  ='none';
        gameResult.innerHTML = 'PLAYER TWO WINS'
    }
    else{
        count--;
        chance.innerHTML = count;
        console.log(count);

        if(count == 0){
            playerTwo.style.display  ='none';
            results.style.display ='block';
            gameResult.innerHTML = 'PLAYER ONE WINS'
        }

        console.log('player 1 win');
    }
})

// PLAYER TWO PAGE FUNCTIONS END