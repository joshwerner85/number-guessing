// =============================================================================
// Some example variables to get you started. The first three are the elements
// in the index.html file. The last is for storing the computer's number. You
// can see how they are being used below. I recommend keeping these as they are.
// You may want to add more.
// =============================================================================

var msgDisplayEl = document.getElementById('msgDisplay');
var userInputEl = document.getElementById('userInput');
var submitBtnEl = document.getElementById('submitBtn');
var number= Math.round(Math.random()*(99)+1);

// =============================================================================
// Some example functions, to get you started. You can change, delete, add to
// these however you like!
// =============================================================================


function generateNumber() {
  clearInput()
 var reset = Math.round(Math.random()*(99)+1);
  return reset;
  console.log(reset);
};

function clearInput() {
  userInputEl.value = '';


};
// console.log(number);

// =============================================================================
// The guessing game. Everytime the user clicks the button on the page, this
// function will run. Don't change the name of it unless you change the
// corresponding name of the function in the html doc. There's really no reason
// to do that.
// You can see that the guessingGame function is receiving userInput. If you're
// feeling overwhelmed, you can just trust that that is always true for this
// program, but I promise it's not magical. Go look around at the index.html
// file if you want to try and figure out how that's happnening.
// Change any and all of this code (except the name and the parameter)! Good
// Luck!
// =============================================================================

function guessingGame(userInput) {




 

if (!userInput) {
if ((submitBtnEl.value === "Start") || (submitBtnEl.value === "Play Again")) {
      number = generateNumber();
      submitBtnEl.value = "Submit"
    }
    msgDisplayEl.innerHTML = "Please guess between the number 1 and 100"


     

  } else if (userInput == number) {
    msgDisplayEl.innerHTML = "You guessed it! Great job!"
    clearInput();
    submitBtnEl.value = "Play Again"
  } 
// else if (userInput > number()) {
//      msgDisplayEl.innerHTML = "Your guess was too high!";
// console.log(userInput < number)
else if (userInput < number) {
    msgDisplay.innerHTML = "Wrong Your number is greater then"
}


else if (userInput > number) {
    msgDisplay.innerHTML = "Wrong Your number is less then"
}



 
 

  // (tryAgain == number)
  //   msgDisplayEl.innerHTML = "Wrong Number Try again"

  // // prompt(userInput == number);
}
console.log(number);

