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

const res = document.getElementById('res');
const mistakesDiv = document.getElementById('mistakes');

function start(){
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

function guess(){
    let guessLetter = (document.getElementById('guessLetter').value).toUpperCase();
    mistakesDiv.style.display = "block";
    
    if(letters.includes(guessLetter)){
        let spot = letters.indexOf(guessLetter);
        emptyLetters.splice(spot, 1, `${guessLetter} `);
        numHits++
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
    }
};