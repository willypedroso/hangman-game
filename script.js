const words = [
    "Node",
    "React",
    "Npm",
    "Vue",
    "Angular",
    "Javascript",
    "HTML",
    "CSS",
    "Tailwind"
]

function start(){
    let random = Math.floor(Math.random()*words.length)
    let randomWord = words[random]
    let letters = randomWord.split("")
    document.getElementById('btnStart').style.display = "none"
    document.getElementById('res').style.display = "flex"
    document.getElementById('guess').style.display = "flex"
    console.log(randomWord)
    letters.map(letter => document.getElementById('res').innerHTML += "_ ")
}