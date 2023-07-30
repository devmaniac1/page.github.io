const questions = [
    {
        question : "What is the capital city of Sri Lanka?",
        answers : [
            {text: "Colombo", correct:true},
            {text:"Kandy", correct:false},
            {text:" Galle", correct:false},
            {text:"Jaffna", correct:false},
        ]
    },
    {
        question : "Which of the following is a famous UNESCO World Heritage Site in Sri Lanka?",
        answers :[
            {text:"Taj Mahal", correct:false},
            {text:"Maldives Beach", correct:false},
            {text:"Sigiriya", correct:true},
            {text:"Angkor Wat", correct:false},
        ] 
    },
    {
        question : "Sri Lanka is renowned for its production of which precious gemstone?",
        answers :[
            {text:"Diamond", correct:false},
            {text:"Sapphire", correct:true},
            {text:"Ruby", correct:false},
            {text:"Emerald", correct:false},
        ]
    },
    {
        question : "Who was the first European explorer to discover Sri Lanka?",
        answers :[
            {text:"Christopher Columbus", correct:false},
            {text:"Vasco da Gama", correct:true},
            {text:"Ferdinand Magellan", correct:false},
            {text:"James Cook", correct:false},
        ]
    },
    {
        question : "Which industry is a significant contributor to Sri Lanka's economy?",
        answers :[
            {text:"Oil and Gas", correct:false},
            {text:"Automobile manufacturing", correct:false},
            {text:"Aerospace", correct:false},
            {text:"Textiles and Apparel", correct:true},
        ]
    },
    {
        question : "The ancient capital of Sri Lanka, Polonnaruwa, is famous for its well-preserved,",
        answers :[
            {text:"Buddhist stupas", correct:true},
            {text:"Hindu temples", correct:false},
            {text:"Colonial mansions", correct:false},
            {text:"Ancient libraries", correct:false},
        ]
    },
    {
        question : "What year did Sri Lanka gain independence from British colonial rule?",
        answers :[
            {text:"1972", correct:false},
            {text:"1962", correct:false},
            {text:"1956", correct:false},
            {text:"1948", correct:true},
        ]
    },
    {
        question : "Which ancient civilization left behind impressive rock fortress ruins in Sigiriya?",
        answers :[
            {text:"Roman Empire", correct:false},
            {text:"Maurya Empire", correct:false},
            {text:"Sinhalese Kingdom", correct:true},
            {text:"Mongol Empire", correct:false},
        ]
    },
    {
        question : "What is the traditional dance form of Sri Lanka?",
        answers :[
            {text:"Salsa", correct:false},
            {text:"Ballet", correct:false},
            {text:"Kandyan dance", correct:true},
            {text:"Flamenco", correct:false},
        ]
    },
    {
        question : "Which national park in Sri Lanka is famous for its leopard population?",
        answers :[
            {text:"Wilpattu National Park", correct:false},
            {text:"Yala National Park", correct:true},
            {text:"Udawalawe National Park", correct:false},
            {text:"Minneriya National Park", correct:false},
        ]
    }


];

const questionElement = document.getElementById("question");
const answerButtons= document.getElementById("answer-buttons");
const nextButton= document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next" ;
    showQuestion(); 
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question; 

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click" , selectAnswer);
    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect =selectedBtn.dataset.correct === "true" ;
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");

        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
     
}

function showscore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!` ;
    nextButton.innerHTML = "play again" ;
    nextButton.style.display = "block";

}

function handleNextButoon(){
    currentQuestionIndex++;
    if(currentQuestionIndex <questions.length){
        showQuestion();
    }else{
        showscore();
    }
}

nextButton.addEventListener("click" , ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButoon();
    }else{
        startQuiz();
    }
})
startQuiz();
 window.addEventListener('scroll', function() {
        var navbar = document.querySelector('.navbar');
        var scrolled = window.scrollY > 0;

        if (scrolled) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

