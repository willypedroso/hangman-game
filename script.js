// Game Words
const words = [
    "NODE",
    "REACT",
    "NPM",
    "VUE",
    "ANGULAR",
    "JAVASCRIPT",
    "HTML",
    "CSS",
    "TAILWIND",
    "PYTHON",
    "VITE",
    "NEXT",
    "JAVA",
    "SWIFT",
    "EXPRESS",
    "AXIOS"
];

// Initializing variables
var randomWord = "";
var letters = [];
var emptyLetters = [];
var wrongLetters = [];
var mistakes = 0;
var numLetters = 0;
var numHits = 0;
var startOk = false;
var tip = "";
var finalLink = "";

const res = document.getElementById('res');
const mistakesDiv = document.getElementById('mistakes');
const wrongLettersDiv = document.getElementById('wrongLetters');
const guessBtn = document.getElementById('guessBtn');
const hangmanImage =  document.getElementById('hangmanImage');
const tipsDiv = document.getElementById('tip');

var spot1 = 0;
var spot2 = 0;
var spot3 = 0;
var spot4 = 0;
var spot5 = 0;
var spot6 = 0;

// Functions
function getTip(word){
    let t = "";
    switch(word){
        case "NODE":
            t = "It's an open-source server environment.";
            break;
        case "REACT":
            t = "It's a front-end Javascript library.";
            break;
        case "NPM":
            t = "It's a package manager.";
            break;
        case "VUE":
            t = "It's a front-end Javascript library.";
            break;
        case "ANGULAR":
            t = "It's a front-end Javascript library.";
            break;
        case "JAVASCRIPT":
            t = "It's a programming language.";
            break;
        case "HTML":
            t = "It's a markup language.";
            break;
        case "CSS":
            t = "It's a style sheet language.";
            break;
        case "TAILWIND":
            t = "It's a CSS framework library.";
            break;
        case "PYTHON":
            t = "It's a programming language.";
            break;
        case "VITE":
            t = "It's a rapid development tool.";
            break;
        case "NEXT":
            t = "It's a web development framework.";
            break;
        case "JAVA":
            t = "It's a programming language.";
            break;
        case "SWIFT":
            t = "It's a programming language.";
            break;
        case "EXPRESS":
            t = "It's a back-end web application framework.";
            break;
        case "AXIOS":
            t = "It's a promised-based HTTP client for JavaScript.";
            break;
    }
    return t;
}

function getFinalLink(word){
    let f = "";
    switch(word){
        case "NODE":
            f = "https://nodejs.org/";
            break;
        case "REACT":
            f = "https://reactjs.org/";
            break;
        case "NPM":
            f = "https://www.npmjs.com/";
            break;
        case "VUE":
            f = "https://vuejs.org/";
            break;
        case "ANGULAR":
            f = "https://angular.io/";
            break;
        case "JAVASCRIPT":
            f = "https://www.javascript.com/";
            break;
        case "HTML":
            f = "https://www.w3schools.com/html/";
            break;
        case "CSS":
            f = "https://www.w3schools.com/css/";
            break;
        case "TAILWIND":
            f = "https://tailwindcss.com/";
            break;
        case "PYTHON":
            f = "https://www.python.org/";
            break;
        case "VITE":
            f = "https://vitejs.dev/";
            break;
        case "NEXT":
            f = "https://nextjs.org/";
            break;
        case "JAVA":
            f = "https://www.java.com/";
            break;
        case "SWIFT":
            f = "https://developer.apple.com/swift/";
            break;
        case "EXPRESS":
            f = "https://expressjs.com/";
            break;
        case "AXIOS":
            f = "https://axios-http.com/docs/intro";
            break;
    }
    return f;
}

function start(){
    startOk = true;
    document.getElementById('main').style.display = "flex";
    document.getElementById('gameTitle').style.display = "block";
    tipsDiv.style.display = "block";
    mistakesDiv.style.display = "none";
    wrongLettersDiv.style.display = "none";
    hangmanImage.src = "./images/hangman-0-errors.png";
    emptyLetters = [];
    wrongLetters = [];
    res.innerHTML = "";
    mistakes = 0;
    numHits = 0;

    var random = Math.floor(Math.random()*words.length);
    randomWord = words[random];
    letters = randomWord.split("");
    numLetters = letters.length;
    for(i=0;i<letters.length;i++){
        emptyLetters.push("_ ");
    };

    tip = getTip(randomWord);

    tipsDiv.innerHTML = `Tip: ${tip}`;

    document.getElementById('btnStart').style.display = "none";
    res.style.display = "flex";
    document.getElementById('guess').style.display = "flex";
    document.getElementById('guessLetter').focus();
    emptyLetters.map(letter => res.innerHTML += letter);
    document.getElementById('final').style.display = "none";
};

document.addEventListener('keypress', function(e){
	if(e.key == "Enter"){
        if(startOk){
            guess();
        } else {
            start();
        }
	}
	});

function guess(){
    let guessLetter = (document.getElementById('guessLetter').value).toUpperCase();
    if(guessLetter == ""){
        alert('Try to type a letter first.')
    } else {
        if(letters.includes(guessLetter)){
            if(emptyLetters.includes(`${guessLetter} `)){
                alert('You already got this one right! Try another letter...');
                document.getElementById('guessLetter').value = "";
                document.getElementById('guessLetter').focus();
            } else {
                let howMuch = letters.filter(x => x === guessLetter).length;
                spot1 = letters.indexOf(guessLetter);
                emptyLetters.splice(spot1, 1, `${guessLetter} `);
                if(howMuch > 1){
                    spot2 = letters.indexOf(guessLetter, spot1+1);
                    emptyLetters.splice(spot2, 1, `${guessLetter} `);
                } if(howMuch > 2){
                    spot3 = letters.indexOf(guessLetter, spot2+1);
                    emptyLetters.splice(spot3, 1, `${guessLetter} `);
                } if(howMuch > 3){
                    spot4 = letters.indexOf(guessLetter, spot3+1);
                    emptyLetters.splice(spot4, 1, `${guessLetter} `);
                } if(howMuch > 4){
                    spot5 = letters.indexOf(guessLetter, spot4+1);
                    emptyLetters.splice(spot5, 1, `${guessLetter} `);
                } if(howMuch > 5){
                    spot6 = letters.indexOf(guessLetter, spot5+1);
                    emptyLetters.splice(spot6, 1, `${guessLetter} `);
                }
    
                numHits += howMuch;
                res.innerHTML = "";
                emptyLetters.map(letter => res.innerHTML += letter);
                document.getElementById('guessLetter').value = "";
                document.getElementById('guessLetter').focus();
            }
        } else {
            if(wrongLetters.includes(guessLetter)){
                alert('You already tried this letter!');
                document.getElementById('guessLetter').value = "";
                document.getElementById('guessLetter').focus();
            } else {
                mistakes++;
                if(mistakes == 6){
                    window.innerWidth < 940 && randomWord.length > 6 ? document.body.style.fontSize = "0.6rem" :
                        window.innerWidth < 940 ? document.body.style.fontSize = "0.9rem" :
                        document.body.style.fontSize = "1.3rem";
                    finalLink = getFinalLink(randomWord);
                    document.getElementById('final').style.display = "flex";
                    document.getElementById('gameTitle').style.display = "none";
                    document.getElementById('finalMsg').innerHTML = "YOU LOSE!";
                    document.getElementById('finalWord').innerHTML = `THE WORD WAS <h1>"${randomWord}"</h1>`;
                    document.getElementById('finalLink').innerHTML = `<a href=${finalLink} target="_blank" rel="noreferrer noopener">${finalLink}</a>`;
                    document.getElementById('main').style.display = "none";
                    document.getElementById('guessLetter').value = "";
                    hangmanImage.src = "./images/hangman-6-errors.png";
                    startOk = false;
                } else {
                    mistakesDiv.style.display = "block";
                    wrongLettersDiv.style.display = "block";
                    wrongLettersDiv.innerHTML = "";

                    switch(6-mistakes){
                        case 5:
                            hangmanImage.src = "./images/hangman-1-errors.png";
                            break;
                        case 4:
                            hangmanImage.src = "./images/hangman-2-errors.png";
                            break;
                        case 3:
                            hangmanImage.src = "./images/hangman-3-errors.png";
                            break;
                        case 2:
                            hangmanImage.src = "./images/hangman-4-errors.png";
                            break;
                        case 1:
                            hangmanImage.src = "./images/hangman-5-errors.png";
                    }

                    wrongLetters.push(guessLetter);
                    wrongLetters.map(letter => wrongLettersDiv.innerHTML += `${letter} `);
                    document.getElementById('guessLetter').value = "";
                    document.getElementById('guessLetter').focus();
                };
            };
        };

        // User wins
        if(numHits == numLetters){
            window.innerWidth < 940 && randomWord.length > 6 ? document.body.style.fontSize = "0.6rem" :
                window.innerWidth < 940 ? document.body.style.fontSize = "0.9rem" :
                document.body.style.fontSize = "1.3rem";
            finalLink = getFinalLink(randomWord);
            document.getElementById('final').style.display = "flex";
            document.getElementById('gameTitle').style.display = "none";
            document.getElementById('finalMsg').innerHTML = `CONGRATS! <h1 style='text-align: center;'>YOU WON!</h1>`;
            document.getElementById('finalWord').innerHTML = `THE WORD WAS <h1>"${randomWord}"</h1>`;
            document.getElementById('finalLink').innerHTML = `<a href=${finalLink} target="_blank" rel="noreferrer noopener">${finalLink}</a>`;
            document.getElementById('main').style.display = "none";
            document.getElementById('guessLetter').value = "";
            startOk = false;
        }
    }
};