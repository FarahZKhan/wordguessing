
var word = "";
var wordGuess = [];
var wrongGuess = [];
var allowedGuesses = 0;
var winCount = 1;
var guess = "";
var dif = 0;

function difficultylevel1() {
    // this function defines the difficulty variable "var dif"
    // and displays the startButton div

}



function wordw() {
    // this function generates random word
    var randomWords = ["humor", "miniature", "amusing", "creepy", "fact", "risk", "verse", "land", "lumpy", "holiday", "glorious", "weigh", "brake", "pretty", "grin", "capricious", "bite-sized", "misty", "ignore", "certain", "sloppy", "dress", "true", "zonked", "observation", "action", "various", "want", "direful", "suck", "dress", "scarecrow", "judge", "madly", "quizzical", "consist", "fierce", "love", "arrest", "serve", "fit", "hug", "tan", "curve", "eatable", "tub", "race", "innocent", "open", "preach", "steady", "acoustics", "lock", "field", "arrange", "rifle", "learned", "toe", "flow", "competition", "ill-fated", "oatmeal", "match", "male", "measure", "loaf", "smile", "wrestle", "dull", "food", "locket", "bell", "beg", "strengthen", "responsible", "enchanting", "loutish", "switch", "idea", "nine", "squeamish", "pig", "bat", "dear", "trains", "owe", "frogs", "assorted", "lonely", "hurry", "natural", "sun", "snow", "obnoxious", "broken", "friend", "bright", "cake", "sour", "permit", "economic", "lovely", "quick", "van", "tempt", "apparel", "decay", "business", "adjustment", "blushing", "makeshift", "slippery", "load", "winter", "exist", "tongue", "country", "roll", "fast", "moor", "possess", "pat", "pass", "books", "impartial", "hospitable", "dust", "naughty", "extra-large", "tacky", "produce", "committee", "fuzzy", "judicious", "nebulous", "stick", "ear", "copy", "friendly", "press", "distinct", "vegetable", "upset", "venomous", "statement", "sulky", "spell", "x-ray", "square", "taste", "great", "thumb", "adjoining", "chilly", "test", "ancient", "green", "badge", "work", "repeat", "free", "elderly", "doctor", "difficult", "grubby", "approval", "turn", "vivacious", "thundering", "cherries", "rest", "plan", "crime", "sticks", "wealthy", "phone", "suspend", "gullible", "fence", "note", "wall", "interest", "coil", "jump", "enchanted", "funny", "racial", "greasy", "polish", "elbow", "smart", "bore", "crowd", "glistening", "oval", "eggs", "nauseating", "detailed", "veil", "coal"]
    var raNum = Math.floor(Math.random() * 70);
    return randomWords[raNum]
    }


function wordStart() {
    //update wordGuess array with tiles equal to the length 
    // of the randomly selected word
}

function winCountFunc() {
    /* this function is returning the number of 
    letters which is used to decide the winning state in 
    guessWord() function*/
    var num = 0;
    var lettUsed = "";
    var count = word.length;

    while(count > 0) {
        if(lettUsed.includes(word[count - 1])) {

        }

        else{
            num += 1;
            lettUsed += word[count - 1];
        }

        count -= 1;
    }

    return num;
}

function start() {
    /* this main function displayed the "mainGame" div and 
    calls the helper function wordStart(), it also displays 
    the word progress, number of guesses remaining and the wrong 
    guesses by user. */
    word = wordw();
    winCount = winCountFunc();

    // allowedGuesses = //set up the allowed guesses



    document.getElementById("question").innerHTML = "Enter your first guess";

    wordStart();

}

function enterGuess() {
    // this function will use the helper function isRightOnot()
    // newCW(), gameLose(), gameWin()
    
}

function isRightOnot(a) {
    var n = word.includes(a);
    return n;
}

function NewCW(letter) {
    var count = 0;
    winCount -= 1;

    while (count <= word.length - 1) {
        if (letter === word[count]) {
            if(wordGuess[count] === letter) {
            }
            else {
            }

            wordGuess[count] = letter;
            count += 1;
        }

        else {
            count += 1;
        }

    }

}

function gameLose() {

}

function gameWin() {

}

function restart() {


//reset the variables defined on the top of this script
}