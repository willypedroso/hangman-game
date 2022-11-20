const words = [
    "NODE",
    "REACT",
    "NPM",
    "VUE",
    "ANGULAR",
    "JAVASCRIPT",
    "HTML",
    "CSS",
    "TAILWIND"
];

var letters = [];
var emptyLetters = [];
var mistakes = 0;
var numLetters = 0;
var numHits = 0;
var startOk = false;

const res = document.getElementById('res');
const mistakesDiv = document.getElementById('mistakes');
const guessBtn = document.getElementById('guessBtn');

var spot1 = 0;
var spot2 = 0;
var spot3 = 0;
var spot4 = 0;
var spot5 = 0;
var spot6 = 0;

function start(){
    startOk = true;
    document.getElementById('main').style.display = "flex";
    document.getElementById('gameTitle').style.display = "block";
    mistakesDiv.style.display = "none";
    emptyLetters = [];
    res.innerHTML = "";
    mistakes = 0;
    numHits = 0;

    var random = Math.floor(Math.random()*words.length);
    var randomWord = words[random];
    letters = randomWord.split("");
    numLetters = letters.length;
    for(i=0;i<letters.length;i++){
        emptyLetters.push("_ ");
    };

    console.log(emptyLetters);
    document.getElementById('btnStart').style.display = "none";
    res.style.display = "flex";
    document.getElementById('guess').style.display = "flex";
    document.getElementById('guessLetter').focus();
    console.log(randomWord);
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
        mistakesDiv.style.display = "block";
        
        if(letters.includes(guessLetter)){
            let howMuch = letters.filter(x => x === guessLetter).length;
            console.log(howMuch);
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
        } else {
            mistakes++
            if(mistakes == 6){
                document.getElementById('final').style.display = "flex";
                document.getElementById('gameTitle').style.display = "none";
                document.getElementById('finalMsg').innerHTML = "YOU LOSE!";
                document.getElementById('main').style.display = "none";
                document.getElementById('guessLetter').value = "";
                startOk = false;
            } else {
                mistakesDiv.innerHTML = `Wrong! You still have ${6-mistakes} tries`;
                document.getElementById('guessLetter').value = "";
                document.getElementById('guessLetter').focus();
            }
        };
        if(numHits == numLetters){
            document.getElementById('final').style.display = "flex";
            document.getElementById('gameTitle').style.display = "none";
            document.getElementById('finalMsg').innerHTML = "CONGRATS! YOU WON!";
            document.getElementById('main').style.display = "none";
            document.getElementById('guessLetter').value = "";
            startOk = false;
        }
    }
};