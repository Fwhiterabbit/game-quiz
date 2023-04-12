//this would be the object shape for storing the questions  
 //you can change the questions to your own taste or even add more questions..
 const questions = [
    {
        question: "In the game 'Minecraft,' what is the main objective?",
        optionA: "Build structures",
        optionB: "Collect resources",
        optionC: "Survive against monsters",
        optionD: "All of the above",
        correctOption: "optionD"
    },

    {
        question: "Which of these is NOT a playable character in 'Super Smash Bros. Ultimate'?",
        optionA: "Mario",
        optionB: "Sonic",
        optionC: "Master Chief",
        optionD: "Pikachu",
        correctOption: "optionC"
    },

    {
        question: "What is the name of the main character in the game 'Assassin's Creed'?",
        optionA: "Ezio Auditore",
        optionB: "Altaïr Ibn-La'Ahad",
        optionC: "Desmond Miles",
        optionD: "Bayek of Siwa",
        correctOption: "optionB"
    },

    {
        question: "In 'Call of Duty: Black Ops Cold War,' what is the name of the main antagonist?",
        optionA: "Viktor Reznov",
        optionB: "Raul Menendez",
        optionC: "Friedrich Steiner",
        optionD: "Perseus",
        correctOption: "optionD"
    },

    {
        question: "What is the name of the character you play as in 'The Legend of Zelda: Breath of the Wild'?",
        optionA: "Link",
        optionB: "Zelda",
        optionC: "Ganon",
        optionD: "Mipha",
        correctOption: "optionA"
    },

    {
        question: "Which game franchise is known for its parkour-style gameplay?",
        optionA: "Assassin's Creed",
        optionB: "Far Cry",
        optionC: "Watch Dogs",
        optionD: "Grand Theft Auto",
        correctOption: "optionA"
    },

    {
        question: "In 'World of Warcraft,' what is the name of the primary villain?",
        optionA: "Kil'jaeden",
        optionB: "Sargeras",
        optionC: "Arthas Menethil",
        optionD: "Gul'dan",
        correctOption: "optionB"
    },

    {
        question: "What is the name of the playable character in 'Half-Life 2'?",
        optionA: "Gordon Freeman",
        optionB: "Alyx Vance",
        optionC: "Isaac Clarke",
        optionD: "Chell",
        correctOption: "optionA"
    },

    {
        question: "Which of these characters is NOT in 'Overwatch'?",
        optionA: "Tracer",
        optionB: "Solider: 76",
        optionC: "Ryu",
        optionD: "Junkrat",
        correctOption: "optionC"
    },

    {
        question: "What is the name of the protagonist in 'Red Dead Redemption 2'?",
        optionA: "John Marston",
        optionB: "Arthur Morgan",
        optionC: "Dutch van der Linde",
        optionD: "Bill Williamson",
        correctOption: "optionB"
    },

    {
        question: "Which game series is known for its 'Nuka-Cola' soft drink?",
        optionA: "Deus Ex",
        optionB: "BioShock",
        optionC: "Doom",
        optionD: "Fallout",
        correctOption: "optionD"
    },

    {
        question: "What is the name of the first level in the original 'Super Mario Bros.' game?",
        optionA: "Mushroom World",
        optionB: "World 1-0",
        optionC: "Bowser's Path",
        optionD: "World 1-1",
        correctOption: "optionD"
    },


    {
        question: "Which of these is NOT a playable race in 'The Elder Scrolls V: Skyrim'?",
        optionA: "Nord",
        optionB: "Orc",
        optionC: "High Elf",
        optionD: "Sylph",
        correctOption: "optionD"
    },

    {
        question: "In 'Portal,' what is the name of the AI character that guides you through the game?",
        optionA: "GLaDOS",
        optionB: "Wheatley",
        optionC: "Turret",
        optionD: "Companion Cube",
        correctOption: "optionA"
    },

    {
        question: "What is the name of the enemy faction in 'Halo'?",
        optionA: "The Covenant",
        optionB: "The Flood",
        optionC: "The Prometheans",
        optionD: "The Banished",
        correctOption: "optionA"
    },

    {
        question: "Which game series features the character 'Solid Snake'?",
        optionA: "Metal Gear",
        optionB: "Resident Evil",
        optionC: "Silent Hill",
        optionD: "Dead Space",
        correctOption: "optionA"
    },

    {
        question: "What is the name of the main character in the game 'Horizon Zero Dawn'?",
        optionA: "Aloy",
        optionB: "Sylens",
        optionC: "Rost",
        optionD: "Erend",
        correctOption: "optionA"
    },

    {
        question: "What is the name of the main character in 'God of War'?",
        optionA: "Zeus",
        optionB: "Sasuke",
        optionC: "Kratos",
        optionD: "Odus",
        correctOption: "optionC"
    },

    {
        question: "In 'The Witcher 3: Wild Hunt,' what is the name of the main character?",
        optionA: "Triss Merigold",
        optionB: "Yennefer",
        optionC: "Ciri",
        optionD: "Geralt of Rivia",
        correctOption: "optionD"
    },

    {
        question: "Which game franchise features the character Nathan Drake?",
        optionA: "Uncharted",
        optionB: "Tomb Raider",
        optionC: "Assassin's Creed",
        optionD: "Grand Theft Auto",
        correctOption: "optionA"
    },

    {
        question: "In 'Dark Souls,' what is the name of the main protagonist?",
        optionA: "The Chosen Undead",
        optionB: "The Ashen One",
        optionC: "The Hunter",
        optionD: "The Dragonborn",
        correctOption: "optionA"
    },

    {
        question: "What is the name of the enemy faction in 'Destiny'?",
        optionA: "The Cabal",
        optionB: "The Fallen",
        optionC: "The Vex",
        optionD: "The Taken",
        correctOption: "optionB"
    },

    {
        question: "Which of these is NOT a playable character in 'League of Legends'?",
        optionA: "Ashe",
        optionB: "D.Va",
        optionC: "Lux",
        optionD: "Jinx",
        correctOption: "optionB"
    },

    {
        question: "In 'Borderlands 3,' what is the name of the main antagonist ?",
        optionA: "Handsome Jack",
        optionB: "Tyreen Calypso",
        optionC: "Rhys Strongfork",
        optionD: "Zer0",
        correctOption: "optionB"
    },

    {
        question: "What is the name of the playable character in 'Devil May Cry' ?",
        optionA: "Dante",
        optionB: "Vergil",
        optionC: "Nero",
        optionD: "All of the above",
        correctOption: "optionD"
    },

    {
        question: "Which of these is NOT a playable character in 'Street Fighter V' ?",
        optionA: "Ryu",
        optionB: "Ken",
        optionC: "Akuma",
        optionD: "Sub-Zero",
        correctOption: "optionD"  
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 15 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 14) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}

// function for when next question is called

function handleNextQuestion() {
    checkForAnswer() // checking if player picked the  right or wrong answer
    unCheckRadioButtons() // delay next question for a second to not rush the player
    setTimeout(() => {
        if (indexNumber <= 14 ) { //dispaly question as long as indext isnt greater than 14 ( which is 15)
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame() // game end if index > 9 
        }
        resetOptionBackground()
    }, 1000);
}

//  function that sets background back to null after displaying right or wrong answer
function resetOptionBackground() {
    const options = document.getElementsByName('option');
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// function that uncheck all radio buttons for next question
function unCheckRadioButtons() {
    const options = document.getElementsByName('option');
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answer..
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition for check players remark and remarks color
    if ( playerScore <= 3) {
        remark = "Bad Gamer - You Should Play More"
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Not too bad, not too bad. But still"
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Not too chabby, keep on going"
        remarkColor = "orange"
    }
    else if (playerScore >= 10) {
        remark = "Love it ! You're kind of a gamer"
        remarkColor = "green"
    }
    else if (playerScore = 15) {
        remark = "WELL DONE, YOU'RE PROPER GAMING LAD !"
        remarkColor = "gold"
    }
    const playerGrade = Math.round((playerScore / 15) * 100 )

    //data for score board display
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"
}

// closing score modal, reseting the game and reshuffles question

function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}