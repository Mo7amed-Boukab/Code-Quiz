const quizData ={
  htmlQuiz : [
    {
      type: 'mcq',
      question: 'Quel attribut fournit un texte alternatif pour une image ?',
      options: ['title', 'alt', 'src', 'description'],
      correctAnswer: 1,
      explanation: 'L’attribut "alt" fournit un texte alternatif pour une image'
    },
    {
      type: 'boolean',
      question: 'La balise <article> est utilisée pour représenter un contenu autonome.',
      booleanOptions: ['vrai', 'faux'],
      correctAnswer: 'vrai',
      explanation: 'La balise <article> est destinée au contenu autonome pouvant être distribué indépendamment.'
    },
    {
      type: 'mcq',
      question: 'Quel attribut définit un identifiant unique ?',
      options: ['class', 'id', 'unique', 'name'],
      correctAnswer: 1,
      explanation: 'L’attribut "id" définit un identifiant unique'
    },
    {
      type: 'text',
      question: 'Quel attribut HTML est utilisé pour définir une description textuelle pour une image ?',
      correctAnswer: 'alt',
      explanation: 'L\'attribut "alt" fournit une description textuelle pour une image.'
    },
    {
      type: 'mcq',
      question: 'Quelle balise est utilisée pour un lien hypertexte ?',
      options: ['<link>', '<a>', '<href>', '<url>'],
      correctAnswer: 1,
      explanation: 'La balise <a> est utilisée pour un lien hypertexte'
    }
   
  ],

  cssQuiz : [
   
    {
      type: 'mcq',
      question: 'Quelle propriété permet de fixer une image d’arrière-plan ?',
      options: ['background-attachment', 'background-repeat', 'background-fixed', 'background-position'],
      correctAnswer: 0,
      explanation: '"background-attachment" permet de fixer une image d’arrière-plan.'
    },
    {
      type: 'text',
      question: 'Quelle unité est relative à la taille de l\'élément parent ?',
      correctAnswer: 'em',
      explanation: 'em est relative à la taille de la police de l\'élément parent.'
    },
    {
      type: 'mcq',
      question: 'Quelle propriété est utilisée pour ajouter de l\'ombre au texte ?',
      options: ['box-shadow', 'text-shadow', 'shadow', 'filter-shadow'],
      correctAnswer: 1,
      explanation: 'text-shadow est utilisée pour ajouter de l\'ombre au texte.'
    },
    {
      type: 'boolean',
      question: 'La valeur initiale de la propriété "position" est "absolute".',
      booleanOptions: ['vrai', 'faux'],
      correctAnswer: false,
      explanation: 'La valeur par défaut de position est "static".'
    },
    {
      type: 'mcq',
      question: 'Quelle propriété aligne les éléments sur l’axe principal ?',
      options: ['align-items', 'justify-content', 'flex-wrap', 'align-content'],
      correctAnswer: 1,
      explanation: 'justify-content aligne les éléments sur l’axe principal.'
    },
    
  ],

  jsQuiz : [

    {
      type: 'mcq',
      question: 'Comment convertir une chaîne en nombre entier ?',
      options: ['parseInt()', 'toString()', 'Number()', 'parseFloat()'],
      correctAnswer: 0,
      explanation: 'La fonction parseInt() convertit une chaîne en nombre entier.'
    },
  
    {
      type: 'mcq',
      question: 'Quelle méthode ajoute des éléments à la fin d’un tableau ?',
      options: ['push()', 'pop()', 'unshift()', 'concat()'],
      correctAnswer: 0,
      explanation: 'La méthode push() ajoute des éléments à la fin d’un tableau.'
    },
    {
      type: 'text',
      question: 'En JavaScript, quelle méthode permet de convertir une chaîne JSON en objet JavaScript ?',
      correctAnswer: 'JSON.parse',
      explanation: 'La méthode JSON.parse convertit une chaîne JSON en objet JavaScript.'
    },
  
    {
      type: 'boolean',
      question: 'En JavaScript, `==` et `===` comparent à la fois la valeur et le type.',
      booleanOptions: ['vrai', 'faux'],
      correctAnswer: false,
      explanation: '`===` compare la valeur et le type, tandis que `==` compare uniquement la valeur.'
    },
    {
      type: 'mcq',
      question: 'Quelle méthode ajoute des éléments à la fin d’un tableau ?',
      options: ['push()', 'pop()', 'unshift()', 'concat()'],
      correctAnswer: 0,
      explanation: 'La méthode push() ajoute des éléments à la fin d’un tableau.'
    }
  ]
}

const quizCardsInfo = {
  htmlQuiz: {
    title: 'Quiz HTML',
    difficulty: 'Facile',
    duration: 30, 
    numberOfQuestions: 5,
    image: 'html.jpeg',
  },
  cssQuiz: {
    title: 'Quiz CSS',
    difficulty: 'Moyenne',
    duration: 30,
    numberOfQuestions: 5,
    image: 'css.jpeg',
  },
  jsQuiz: {
    title: 'Quiz JavaScript',
    difficulty: 'Difficile',
    duration: 30, 
    numberOfQuestions: 5,
    image: 'js.jpeg',
  }
};

localStorage.setItem("quizCardsInfo",JSON.stringify(quizCardsInfo))
//  ----------------------------------------------
var correctAnswersCount = 0;
var incorrectAnswersCount = 0;
// -----------------------------------------------
var mcqType = document.getElementById("mcq");
var boolType = document.getElementById("boolean");
var textType = document.getElementById("text");
// -----------------------------------------------
var quizBox = document.querySelector(".quizBox");
var quizTitle = document.querySelector(".quizTitle");
var options = document.querySelectorAll(".op");
var nextBtn = document.querySelector(".quizBtn");

// --------------------------------------------------- box modul: Explination
var explanation = document.querySelector(".exp");
// ----------------------------------------------- progress Bar
var progressCount = document.querySelector(".progressCount");
// ----------------------------------------------- 
var questionsCount = 0;
var totalQuestions = 4;
// ----------------------------------------------- Question Number Header (variable)
var QuestionNbr = document.getElementById('QuestionNbr');
var currentQuestionNbr = 1; 
// ----------------------------------------------- Score Header (variable)
var score = document.getElementById("score");
var scoreValue = 0
// ------------------------------------------------ end quiz result
var endQuiz = document.querySelector('.endQuizBoxModul');
var afficheScore = document.getElementById('afficheScore');

var quizdata = "";
var startQuiz = document.querySelectorAll('.startBtn');
startQuiz.forEach(userChoice=> {
  userChoice.addEventListener('click', () => {

    let category = userChoice.getAttribute('data-category');
    quizdata = quizData[category];

    localStorage.setItem("quizData",JSON.stringify(quizdata))
  
    window.location.href = 'quiz.html';
  });
});
   
   var dataquizToJs = JSON.parse(localStorage.getItem("quizData"));
   newQuestionData(dataquizToJs[questionsCount]);
 //============================================ function quiz 

function newQuestionData(quiz){

  let quizTitle = document.getElementById("quizTitle");
  quizTitle.textContent = quiz.question ; 
  mcqType.style.display = 'none';
  boolType.style.display = 'none';
  textType.style.display = 'none'; 
  endQuiz.style.display = 'none';

    // -----------------------------------------------
    
     if(quiz.type ==='mcq')
       {
          // ---------------------------------------------------------- for loop in eash option to add data of option from object
          options.forEach((op , index) => {
            op.textContent = quiz.options[index];
            var optionIndex = index;
            mcqType.style.display = 'block';
           
          // -------------------------- Event click to verify correct/false answer , add colors , disable other options and update score
                op.addEventListener("click", () => {
                  if(optionIndex == quiz.correctAnswer){
                    op.style.backgroundColor = '#38b000';
                    scoreValue += 10; 
                    correctAnswersCount++;   
                  }
                  else{
                    op.style.backgroundColor = 'red';
                    options[quiz.correctAnswer].style.backgroundColor = '#38b000';
                    explanation.style.display = 'block';
                    explanation.textContent = quiz.explanation;
                    incorrectAnswersCount++;
         
                  }
                  updateScore();
                  disableOptions();
                }) 
           })
        }
      // ---------------------------------------------- type boolean
      else if(quiz.type === 'boolean')
        {
          var correctAnswer = quiz.correctAnswer;
          var booleanOptions = document.querySelectorAll(".booleanOp");
          booleanOptions.forEach((op, index) => {
            
            op.textContent = quiz.booleanOptions[index];
            console.log(op.textContent);
            boolType.style.display = 'block';

            op.addEventListener("click", () => {

              if(op.textContent == correctAnswer){
                op.style.backgroundColor = '#38b000';
                scoreValue += 10; 
                correctAnswersCount++;  
              }
              else{
               op.style.backgroundColor = 'red';  
                explanation.style.display = 'block';
                explanation.textContent = quiz.explanation;
                incorrectAnswersCount++; 
              }
              updateScore();
              disableOptions();
            }) 

          });
        }
      // ---------------------------------------------- type text
      else 
        {   
          var input = document.getElementById('input'); 
          var correctAnswer = quiz.correctAnswer;
          
          textType.style.display = 'block';

          input.addEventListener('input', (e) => {
              var userAnswer = e.target.value.trim();
              if (userAnswer === correctAnswer) {
                  input.style.backgroundColor = '#38b000'; 
                  scoreValue += 10;
                  explanation.style.display = 'none'; 
                  input.disabled = true;
                  correctAnswersCount++;
              } else {
                  input.style.backgroundColor = 'red'; 
                  explanation.style.display = 'block';
                  explanation.textContent = quiz.explanation; 
                  incorrectAnswersCount++; 
              }
              updateScore();
  
          });
          
      }  
      afficheScore.textContent = ` ${scoreValue}`;
}
function next() {
  if (questionsCount < totalQuestions ) { 
    questionsCount++;
    currentQuestionNbr++;
    QuestionNbr.textContent = `${currentQuestionNbr}`;
    progressCount.style.width = `calc(${(questionsCount / totalQuestions) * 100}%)`;

    resetOptions();
    newQuestionData(dataquizToJs[questionsCount]);  //================================================ ici
  } else {
    afficherResultat();  }
}

function updateScore() {
  score.textContent = ` ${scoreValue} `;
}
function disableOptions() {
  // ----------------------------------------------- multip choices
   options.forEach((op) => {op.disabled = true})
    // ----------------------------------------------- boolean (vrai / faux)
   document.querySelectorAll(".booleanOp").forEach((op) => {op.disabled = true});
   // ----------------------------------------------- input 
   const input = document.getElementById('input');
   if (input) {
     input.disabled = true;
   }
 }
// --------------------------------------
function afficherResultat() {
  quizBox.style.display = 'none';
  endQuiz.style.display = 'block';
  afficheScore.textContent = ` ${scoreValue} `;
  document.getElementById('correctAnswers').textContent = correctAnswersCount;
  document.getElementById('incorrectAnswers').textContent = incorrectAnswersCount;

  
  var timeSpent = 90 - counter;  
  var min = Math.floor(timeSpent / 60);
  var sec = timeSpent % 60;
  document.getElementById('timeSpent').textContent = `${min < 10 ? '0' : ''}${min} : ${sec < 10 ? '0' : ''}${sec}`;
}
function backHome(){
  window.location.href = 'index.html';
}
function restartQuiz() {
  currentQuestionNbr = 1;
  questionsCount = 0;
  scoreValue = 0;

  QuestionNbr.textContent = ` ${currentQuestionNbr} `;
  progressCount.style.width = '0%';
  updateScore();
  afficheScore.textContent = ` ${scoreValue} `;

  endQuiz.style.display = 'none';
  quizBox.style.display = 'block';

  resetOptions();
  newQuestionData(dataquizToJs[questionsCount]);  //================================================= ici
}

function resetOptions() {
  options.forEach(op => {
    op.style.backgroundColor = '#fff'; 
    op.disabled = false;             
  });

  const booleanOptions = document.querySelectorAll(".booleanOp");
  booleanOptions.forEach(op => {
    op.style.backgroundColor = '#fff';
    op.disabled = false;
  });

  const input = document.getElementById('input');
  if (input) {
    input.disabled = false;
    input.value = '';               
    input.style.backgroundColor = '#fff';
  }

  explanation.style.display = 'none'; 
}
// --------------------------------------

var counter = 90; 
var timer = document.getElementById('delai');

var countInterval = setInterval(function() {
    var min = Math.floor(counter / 60); 
    var sec = counter % 60;
    
    timer.innerHTML =  ` ${min < 10 ? '0' : ''}${min} : ${sec < 10 ? '0' : ''}${sec} `;
    
    counter--;

    if (counter < 0) { 
        clearInterval(countInterval);
        timer.innerHTML = "00 : 00"; 
    }
}, 1000);

// ----------------------------- Dashboard
