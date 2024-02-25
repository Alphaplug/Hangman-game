 // STORING ALL THE WORDS DETAILS AS AN OBJECT
 const words = [{
    word: "addition",
    hint: "The process of adding numbers"
},
{
    word: "meeting",
    hint: "Event in which people come together"
},
{
    word: "number",
    hint: "Math symbol used for counting"
},
{
    word: "exchange",
    hint: "The act of trading"
},
{
   word: "airforce",
   hint: "A branch in the military"
},
{
   word: "nigeria",
   hint: "A country in the west of Africa"
},
{
   word: "facebook",
   hint: "A social media application"
},
{
   word: "marriage",
   hint: "The coming together a man and woman"
},
{
   word: "wikipedia",
   hint: "A website known for storing information"
},
{
   word: "sportify",
   hint: "An application used for listening to music"
},
{
    word: "canvas",
    hint: "Piece of fabric for oil painting"
},
{
    word: "garden",
    hint: "Space for planting flower and plants"
},
{
    word: "position",
    hint: "Location of someone or something"
},
{
    word: "feather",
    hint: "Hair like outer covering of a bird"
},
{
    word: "tongue",
    hint: "The muscular organ of the mouth"
},
{
    word: "comfort",
    hint: "A pleasant feeling of relaxation"
},
{
    word: "expansion",
    hint: "The process of increase or grow"
},
{
    word: "country",
    hint: "A political identified region"
},
{
    word: "group",
    hint: "A number of objects or persons"
},
{
    word: "taste",
    hint: "Ability of tongue to detect flavour"
},
{
    word: "store",
    hint: "Large shops where goods are traded"
},
{
    word: "field",
    hint: "Area of land for farming purpose"
},
{
    word: "friend",
    hint: "Some close to you like a family member"
},
{
    word: "pocket",
    hint: "A bag for carrying small items"
},
{
    word: "needle",
    hint: "A thin sharp  metal pin"
},
{
    word: "expert",
    hint: "Person with extensive knowledge"
},
{
    word: "statement",
    hint: "A declaration of something"
},
{
    word: "second",
    hint: "One-sixtieth of a minute"
},
{
    word: "library",
    hint: "Place conataining collection of books"
},

]

const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
inputField = document.querySelector("input"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word");

let correctWord, timer;

const initTimer = maxTime => {
clearInterval(timer);
timer = setInterval(() => {
    if (maxTime > 0) {
        maxTime--;
        return timeText.innerText = maxTime;
    }
    alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
    initGame();
}, 1000);
}

const initGame = () => {
initTimer(30);
let randomObj = words[Math.floor(Math.random() * words.length)];
let wordArray = randomObj.word.split("");
for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
}
wordText.innerText = wordArray.join("");
hintText.innerText = randomObj.hint;
correctWord = randomObj.word.toLowerCase();;
inputField.value = "";
inputField.setAttribute("maxlength", correctWord.length);
}
initGame();

const checkWord = () => {
let userWord = inputField.value.toLowerCase();
if (!userWord) return alert("Please enter the word to check!");
if (userWord !== correctWord) return alert(`Oops! ${userWord} is not a correct word`);
alert(`Congrats! ${correctWord.toUpperCase()} is the correct word`);
initGame();
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);









