const questions = [
    {
        question: "Which of the following is not a drawback of file systems when compared to DBMS?",
        answers: [
            { text: 'Inconsistent data', correct: false},
            { text: 'Lack of data integrity', correct: false},
            { text: 'Ease of initial setup', correct: true},
            { text: 'Difficult to support concurrency', correct: false}
        ]
    },
    {
        question: "Which of the following creates and maintains the schema of a database?",
        answers: [
            { text: 'Data Definition Language', correct: true},
            { text: 'Data Manipulation Language', correct: false},
            { text: 'Data Control Language', correct: false},
            { text: 'None of the above', correct: false}
        ]
    },
    {
        question: "Which of the following describes the concept that any change made to the physical schema should not affect the logical level of the DBMS?",
        answers: [
            { text: 'Physical Data Isolation', correct: false},
            { text: 'Physical Data Independence', correct: true},
            { text: 'Logical Data Isolation', correct: false},
            { text: 'Logical Data Independence', correct: false}
        ]
    },
    {
        question: "Which of the following is not an example of DBMS?",
        answers: [
            { text: 'Oracle DB', correct: false},
            { text: 'Postgre SQL', correct: false},
            { text: 'MySQL', correct: false},
            { text: 'Microsoft Excel', correct: true}
        ]
    },
    {
        question: "Which among the following is a Python library for parsing HTML?",
        answers: [
            { text: 'Request', correct: true},
            { text: 'Beutiful soup', correct: false},
            { text: 'Sklearn', correct: false},
            { text: 'Paramiko', correct: false}
        ]
    },
    {
        question: "A relational schema R is said to be in 3NF if for every FD X→A,",
        answers: [
            { text: 'X is a superkey of R', correct: true},
            { text: 'A is superkey', correct: false},
            { text: 'A is candidate key', correct: false},
            { text: 'All of the above', correct: false}
        ]
    },
    {
        question: "If we decompose a relation into a set of relations which are in BCNF, then ",
        answers: [
            { text: 'It may preserve the dependencies', correct: false},
            { text: 'Redundancy is high as compared to 3NF', correct: false},
            { text: 'The decomposition is lossless', correct: true},
            { text: 'The decomposition is lossy', correct: false}
        ]
    },
];

const quearea = document.getElementById("que");
const optarea = document.getElementById("options");
const nextarea = document.getElementById("next");

let number = 0;
let score = 0;

function start(){
    number = 0;
    score = 0;
    nextarea.innerHTML = 'Next';
    showque();
}
function showque(){
    resetque();
    let currentque = questions[number];
    let quenumber = number + 1;
    quearea.innerHTML = quenumber + ". " + currentque.question;
    
    currentque.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add('btn');
        optarea.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectans);
    });

}
function resetque(){
    nextarea.style.display = 'none';
    while(optarea.firstChild){
        optarea.removeChild(optarea.firstChild);
    }
}

function selectans(e){
    const selectedbut = e.target;
    const iscorrect = selectedbut.dataset.correct === 'true';
    if(iscorrect){
        selectedbut.classList.add("correct");
        score++;
    }else{
        selectedbut.classList.add('incorrect');
    }
    Array.from(optarea.children).forEach(button =>{
        if (button.dataset.correct === "true"){
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextarea.style.display = 'inline';
}

function showscore(){
    resetque();
    quearea.innerHTML = `Your score: ${score}/${questions.length}`;
    nextarea.innerHTML = 'Start Again?';
    nextarea.style.display = 'inline'

}

function handlenext(){
    number++;
    if (number < questions.length){
        showque();
    } else{
        showscore();
    }
}

nextarea.addEventListener('click',()=>{
    if (number < questions.length){
        handlenext();
    }else{
        start();
    }
})

start();