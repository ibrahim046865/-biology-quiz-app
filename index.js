const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const welcomeMsg = document.getElementById('welcome-message');
const questBox = document.getElementById('question-container');
const currentDiv = document.getElementById('current');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const scoreContainer = document.getElementById('score-container');
const scoreDisplay = document.getElementById('score-display');
const questionNumberDisplay = document.getElementById('question-number');
const quizHeader = document.getElementsByTagName('h1')[0];
const congMsg = document.getElementById('congMsg');
const controlButtons = document.getElementById('restart-control');
const score = document.getElementById('score');
const percentage = document.getElementById('percentage');
const restartBtn = document.getElementById('restart-btn');
nextButton.disabled = true;


const questions = [
    {
    question: "If a DNA strand has a base sequence TCA, its complementary strand must be?",
    choices: ["A. ATG", "B. TAG", "C. GAT", "D. AGT"],
    answer: "D. AGT"
  },
  {
    question: "The most abdundant group of organisms in the animal kingdom?",
    choices: ["A. Mammals", "B. Aves", "C. Insecta", "D. Annelida"],
    answer: "C. Insecta"
  },
  {
    question: "How many chromosomes are in a human cell?",
    choices: ["A. 23", "B. 46", "C. 44", "D. 92"],
    answer: "B. 46"
  },
  {
    question: "Which blood group is the universal donor?",
    choices: ["A. A", "B. B", "C. AB", "D. O"],
    answer: "D. O"
  },
  {
    question: "What pigment is responsible for photosynthesis?",
    choices: ["A. Carotene", "B. Xanthophyll", "C. Chlorophyll", "D. Melanin"],
    answer: "C. Chlorophyll"
  },
  {
    question: "How many chambers does the human heart have?",
    choices: ["A. Two", "B. Three", "C. Four", "D. Five"],
    answer: "C. Four"
  },
  {
    question: "Which system controls body activities?",
    choices: ["A. Digestive", "B. Skeletal", "C. Nervous", "D. Respiratory"],
    answer: "C. Nervous"
  },
  {
    question: "Which blood cells fight infections?",
    choices: ["A. Red blood cells", "B. Platelets", "C. White blood cells", "D. Plasma"],
    answer: "C. White blood cells"
  },
  {
    question: "Which of the following produces both hormones and enzymes?",
    choices: ["A. Ileum", "B. Pancreas", "C. Gall bladder", "D. Kidney"],
    answer: "D. Vitamin D"
  },
  {
    question: "What is the largest organ in the human body?",
    choices: ["A. Liver", "B. Skin", "C. Lungs", "D. Heart"],
    answer: "B. Skin"
  }
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function showQuiz() {
    welcomeMsg.classList.add('hide');
    questBox.classList.remove('hide'); 
    currentDiv.classList.remove('hide');
    startButton.classList.add('hide'); 
};

let currentIndex = 0;

function getQuestions() {
  nextButton.disabled = true;
    answerButtonsElement.innerHTML = "";
    questionElement.innerHTML = questions[currentIndex].question;
    shuffleArray(questions[currentIndex].choices);
    questions[currentIndex].choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerHTML = choice;
        button.value = choice;
        button.classList.add('btn');
        answerButtonsElement.appendChild(button);
        button.addEventListener("click",  () => {
            Array.from(answerButtonsElement.children).forEach(btn => btn.disabled = true);
            nextButton.disabled = false;
            if (button.value === questions[currentIndex].answer) {
                button.classList.add('green');
                button.innerHTML = `${button.value} <span>&#10004;</span> `;
                let currentScore = parseInt(scoreDisplay.textContent) || 0;
                scoreDisplay.textContent = `${currentScore + 1} / ${questions.length}`;
            }
            else if (button.value !== questions[currentIndex].answer) { 
                button.classList.add('red');
                button.innerHTML = `${button.value} <span>&#10008;</span> `;
                Array.from(answerButtonsElement.children).forEach(btn => {
                    if (btn.value === questions[currentIndex].answer) {
                        btn.classList.add('green');
                        btn.innerHTML = `${btn.value} <span>&#10004;</span> `;
                    }
            });
            }
            nextButton.classList.remove('hide');
        })
    });
};

function getResult() {
    currentIndex++;
    if (currentIndex < questions.length) {
        questionNumberDisplay.textContent = `${currentIndex + 1} of ${questions.length}`;
        getQuestions();
    } 
    else if (currentIndex === questions.length) {
        quizHeader.innerHTML = 'Quiz Completed!'
        questBox.classList.add('hide');
        nextButton.classList.remove('hide');
        scoreContainer.classList.remove('hide');
        congMsg.classList.remove('hide');
        controlButtons.classList.remove('hide');
        nextButton.classList.add('hide');
        currentDiv.classList.add('hide');

        let totalScore = parseInt(scoreDisplay.textContent);
        let percent = (totalScore / questions.length) * 100;
        score.textContent = `${totalScore} / ${questions.length} Correct`;
        percentage.textContent = `${percent}% Score`;

        if (percent >= 80) {
            congMsg.innerHTML = "<span style='color: var(--biology-green);'>Congratulations!</span> &#127881 You're a genius!";
        } else if (percent >= 60) {
            congMsg.innerHTML = "<span style='color: var(--biology-green);'>Good job!</span> &#128293 You're doing well!";
        } else {
            congMsg.innerHTML = "Keep practicing! You'll get better!";
        }
    }
};

function reset() {
    currentIndex = 0;
    scoreDisplay.textContent = `0 / ${questions.length}`;
    questionNumberDisplay.textContent = `1 of ${questions.length}`; 
    scoreContainer.classList.add('hide');
    congMsg.classList.add('hide');
    controlButtons.classList.add('hide');
    quizHeader.innerHTML = 'Biology Quiz';
    shuffleArray(questions);
    showQuiz();
    getQuestions();
};

startButton.addEventListener('click', () => {
    shuffleArray(questions);
    showQuiz();
    getQuestions();
});
nextButton.addEventListener('click', getResult);
restartBtn.addEventListener('click', reset);


