var statistiquePage = document.getElementById('statistiqueBtn');
var addQuizPage = document.getElementById('AddQuiz');
var voirQuizPage = document.getElementById('voirQuiz');
// --------------------------------------------------------------
var addQuizForm = document.querySelector('.addQuiz-form');
var displayStatistique = document.getElementById('displayStatistique');
var displayQuizManagement = document.getElementById('displayQuizManagement');
// --------------------------------------------------------------
var displayBoxModul = document.getElementById('displayBoxModul');
var addQuizBtn = document.getElementById('addQuizBtn');
// --------------------------------------------------------------
var container = document.querySelector('.main-container'); 
var dashboardMainContainer = document.getElementById('content-contrainer');
var questionsForm = document.getElementById('questionsForm');
    container.style.display = 'none';
    addQuizForm.style.display = 'none';
    displayBoxModul.style.display = 'none';

statistiquePage.addEventListener('click', ()=>{
  displayStatistique.style.display = 'flex';
  displayQuizManagement.style.display = 'block';
  addQuizForm.style.display = 'none';
  container.style.display = 'none';
  questionsForm.style.display = 'none';
     
})


addQuizPage.addEventListener('click', ()=>{
displayStatistique.style.display = 'none';
displayQuizManagement.style.display = 'none';
container.style.display = 'none';
addQuizForm.style.display = 'block';
questionsForm.style.display = 'none';

})

voirQuizPage.addEventListener('click', ()=>{
displayStatistique.style.display = 'none';
displayQuizManagement.style.display = 'none';
addQuizForm.style.display = 'none'
container.style.display = 'flex';
container.style.gap = '20px';
container.style.flexWrap = 'wrap';
container.style.justifyContent = 'center'; 
questionsForm.style.display = 'none';
})
// ------------------------------------------------- back to home
var home = document.getElementById('home');
home.addEventListener('click', ()=>{
window.location.href = 'index.html';
})

let CardsInfo = JSON.parse(localStorage.getItem('CardsInfo'));
// ---------------------------------------- show quiz cards in dashboard
CardsInfo.forEach((card) => {
    let newCard = document.createElement('div');
        newCard.classList.add('quiz-card');
        newCard.innerHTML = `
            <img src="/images/img.png" alt="">
            <h3>${card.title}</h3>
            <p>${card.numberOfQuestions} questions - ${card.duration} secondes</p>
            <p class="level">Difficulté : <span id="${card.difficulty}">${card.difficulty}</span></p>
            <button class="startBtn deleteQuiz" data-category="${card.category}">Supprimer</button>
        `;
         container.appendChild(newCard); 
});
// ---------------------------------------- show new cards in dashboard 
let buttonAddQuiz = document.getElementById('addQuizBtn');
    buttonAddQuiz.addEventListener('click', () => {
        let quizTitle = document.getElementById('quiz-Title').value.trim();
        let quizDifficulty = document.getElementById('quizDifficulty').value.trim();
        let quizQuestionsCount = parseInt(document.getElementById('quizQuestions').value);
        let quizDuration = parseInt(document.getElementById('quizDuration').value);
        let quizCategory = document.getElementById('quizCategory').value.trim();

        let newCardQuiz = {
            title: quizTitle,
            difficulty: quizDifficulty,
            numberOfQuestions: quizQuestionsCount,
            duration: quizDuration,
            category: quizCategory
        };

    CardsInfo.push(newCardQuiz);
    console.log(CardsInfo);
    localStorage.setItem('CardsInfo', JSON.stringify(CardsInfo));
    addQuizForm.style.display = 'none';
    dashboardMainContainer.style.alignItems = 'center';
    displayBoxModul.style.display = 'block';
    displayBoxModul.style.width = '100%';

});
var Quiz = document.querySelectorAll('.deleteQuiz');

for (let i = 0; i < Quiz.length; i++) {
    Quiz[i].addEventListener('click', () => {
        CardsInfo.splice(i, 1);
        localStorage.setItem("CardsInfo", JSON.stringify(CardsInfo));
        Quiz[i].closest('.quiz-card').remove();
    });
}

var totalQuestions;
var currentQuestion = 0;
function PassToAddQuestion() {
  totalQuestions = document.getElementById('inputNbrQuestions').value; 
  document.getElementById('displayBoxModul').style.display = 'none';
  document.getElementById('questionsForm').style.display = 'block';
  afficheMessageNbrQuestion();
}

function ChoiceQuestionType() {
   
    let quizType = document.getElementById('quizType').value;
    let mcqType = document.getElementById('mcqOptions');
    let boolean = document.getElementById('booleanOptions');
    let textType = document.getElementById('textAnswer');
    
    if( quizType === 'mcq'){
        mcqType.style.display = 'block';
        boolean.style.display = 'none';
        textType.style.display = 'none';
    }
    else if(quizType === 'boolean'){
        boolean.style.display = 'block';
        textType.style.display = 'none'; 
        mcqType.style.display = 'none';
    }
    else{
        textType.style.display = 'block';
        mcqType.style.display = 'none';
        boolean.style.display = 'none';
    }
}
var newArray=[];
function addQuestion() {
    let quizData = JSON.parse(localStorage.getItem('quizData'));  
if (currentQuestion < totalQuestions) {
    let quizType = document.getElementById('quizType').value;
    let questionText = document.getElementById('questionText').value;
    let correctAnswer = document.getElementById('correctAnswer').value;
    let explanation = document.getElementById('explanation').value;
    let newQuestion;
   

  
    if (quizType === 'mcq') {
      let options = [
        document.getElementById('option1').value,
        document.getElementById('option2').value,
        document.getElementById('option3').value,
        document.getElementById('option4').value,
      ];
  
      newQuestion = {
        type: 'mcq',
        question: questionText,
        options: options,
        correctAnswer: correctAnswer,
        explanation: explanation
      };
  
    } else if (quizType === 'boolean') {
    
      const correctAnswer = document.getElementById('booleanAnswer').value;
      newQuestion = {
        type: 'boolean',
        question: questionText,
        booleanOptions: ['vrai', 'faux'],
        correctAnswer: correctAnswer,
        explanation: explanation
      };
  
    } else if (quizType === 'text') {
      const correctAnswer = document.getElementById('correctTextAnswer').value;
  
      newQuestion = {
        type: 'text',
        question: questionText,
        correctAnswer: correctAnswer,
        explanation: explanation
      };
    }
    newArray.push(newQuestion);
    currentQuestion++;
    afficheMessageNbrQuestion();
    clearForm();
} 
else {
    quizData.push(newArray);
    console.log(quizData)
    localStorage.setItem('quizData', JSON.stringify(quizData));
    alert("Toutes les questions sont ajoutées .. Merci !!");
}

}

function clearForm() {
    document.getElementById('questionText').value = '';
    document.getElementById('option1').value = '';
    document.getElementById('option2').value = '';
    document.getElementById('option3').value = '';
    document.getElementById('option4').value = '';
    document.getElementById('correctAnswer').value = '';
    document.getElementById('booleanAnswer').value = 'vrai';
    document.getElementById('correctTextAnswer').value = '';
    document.getElementById('explanation').value = '';
  }
  function afficheMessageNbrQuestion() {
    document.getElementById('progressMessage').innerText = `Questions ajoutées: ${currentQuestion} / ${totalQuestions}`;
  }

