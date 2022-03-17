let numbers = document.querySelectorAll(".numbers");
const numberDisplayContainer = document.querySelector("#number-display");
const startContainer = document.querySelector("#start-game");
const turnContainer = document.querySelector("#turn");
const ruleContainer = document.querySelector("#rule-box");
const btnMe = document.querySelector("#start-me");
const btnYou = document.querySelector("#start-you");
const btnInc = document.querySelector("#btn-number-inc");
const btnDec = document.querySelector("#btn-number-dec");
const btnDone = document.querySelector("#btn-done");
const btnRestart = document.querySelector("#btn-restart");


var counter = 0;
var currentCounter = 0;

numberDisplayContainer.style.display = "none";
turnContainer.style.display = "none";
btnInc.style.display = "none";
btnDec.style.display = "none";
btnDone.style.display = "none";
btnRestart.style.display = "none";


function displayMssg(text) {
    turnContainer.innerHTML = text;

}

function startComp() {
    startContainer.style.display = "none";
    ruleContainer.style.display = "none";

    numberDisplayContainer.style.display = "flex";
    btnInc.style.display = "flex";
    btnDec.style.display = "flex";
    btnDone.style.display = "block";
    turnContainer.style.display = "flex";
    btnRestart.style.display = "flex";

    setTimeout(() => {
        displayMssg("Your turn now ! ");

        let random = 1 + (11 * Math.random());

        if (random < 4) {
            counter = 3;
            incrementList();

        } else if (random < 8) {
            counter = 2;
            incrementList();

        } else {
            counter = 1;
            incrementList();
        }

    }, 200)

}


function startUser() {
    startContainer.style.display = "none";
    ruleContainer.style.display = "none";

    numberDisplayContainer.style.display = "flex";
    btnInc.style.display = "flex";
    btnDec.style.display = "flex";
    btnDone.style.display = "block";
    btnRestart.style.display = "flex";
    turnContainer.style.display = "flex";

    displayMssg("Your turn now !");
}

function incrementList() {

    for (let i = 0; i < counter; i++) {
        let numberName = numbers[i];
        numberName.style.backgroundColor = "black";
        numberName.style.color = "white";
        numberName.style.border = "2px solid gray";
        numberName.style.transition = "0.5s";
    }
}

function incBtnHandler() {
    displayMssg("");
    if (currentCounter < 3) {
        counter = counter + 1;

        incrementList();
        currentCounter = currentCounter + 1;
    } else {
        displayMssg("Maximum three numbers are allowed at once !");
    }

    if (counter === 21) {

        displayMssg("I win the game :)");
        currentCounter = 0;
    }
}

function decrementList() {
    displayMssg("");

    if (currentCounter > 0) {

        let numberName = numbers[counter - 1];
        numberName.style.backgroundColor = "transparent";
        numberName.style.color = "black";
        numberName.style.border = "1px solid black";

        counter = counter - 1;
        currentCounter = currentCounter - 1;
    } else {
        displayMssg("No numbers are available to remove!")
    }
}


function calculate() {

    if (currentCounter != 0) {

        if (counter < 4) {
            counter = 4;
        } else if (counter < 8 && counter > 4) {
            counter = 8
        } else if (counter < 12 && counter > 8) {
            counter = 12
        } else if (counter < 16 && counter > 12) {
            counter = 16;
        } else if (counter < 20 && counter > 16) {
            counter = 20;
        } else if (counter === 20) {
            counter = 21;

            turnContainer.style.display = "flex";
            turnContainer.innerHTML = "You win the game :)";
        } else {
            let random = 1 + (11 * Math.random());

            if (random < 4) {
                counter = counter + 3;
                incrementList();

            } else if (random < 8) {
                counter = counter + 2;
                incrementList();

            } else {
                counter = counter + 1;
                incrementList();
            }
        }
        incrementList();
        currentCounter = 0;
    } else {
        displayMssg("Atleast count one number");
    }

    displayMssg("Your turn now !");

}

function restart() {
    counter = 0;
    currentCounter = 0;
    startContainer.style.display = "flex";
    numberDisplayContainer.style.display = "none";
    turnContainer.style.display = "none";
    btnInc.style.display = "none";
    btnDec.style.display = "none";
    btnDone.style.display = "none";
    btnRestart.style.display = "none";
    ruleContainer.style.display = "flex";



    for (let i = 0; i <= 21; i++) {

        let numberName = numbers[i];
        numberName.style.backgroundColor = "transparent";
        numberName.style.color = "black";
        numberName.style.border = "1px solid black";
    }


}


btnInc.addEventListener("click", incBtnHandler);
btnDec.addEventListener("click", decrementList);
btnDone.addEventListener("click", calculate);
btnMe.addEventListener("click", startComp);
btnYou.addEventListener("click", startUser);
btnRestart.addEventListener("click", restart);