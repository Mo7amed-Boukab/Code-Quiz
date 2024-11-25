let quizBox = document.querySelector(".quizBox");
let options = document.querySelectorAll(".op");
let booleanOptions = document.querySelectorAll(".booleanOp");
let input = document.getElementById('input'); 

// -------------------------------------------------- button next 
let nextBtn = document.querySelector(".quizBtn");
// --------------------------------------------------- box modul: Explination
let explanation = document.querySelector(".exp");
// --------------------------------------------------- progress Bar
let progressCount = document.querySelector(".progressCount");
// ---------------------------------------------------- 
let questionsCount = 0;
let totalQuestions;
// ---------------------------------------------------- Question Number Header (variable)
let QuestionNbr = document.getElementById('QuestionNbr');
let currentQuestionNbr = 1; 
// ---------------------------------------------------- Score Header (variable)
let score = document.getElementById("score");
let scoreValue = 0;
let totalScore = 0;
//------------------------------------------------------ Show User Responces
let correctResponce = document.getElementById("correctResponce");
let incorrectResponce = document.getElementById("incorrectResponce");
let correctResponceCount = 0;
let incorrectResponceCount = 0;
let countNotification = 0;
// ---------------------------------------------------- end quiz result
let endQuiz = document.querySelector('.endQuizBoxModul');
let afficheScore = document.getElementById('afficheScore');

let quizChosen = JSON.parse(localStorage.getItem("quizchosen"));
newQuizData(quizChosen[questionsCount], quizChosen.length);
totalQuestions = quizChosen.length;
 //============================================ function quiz 

function newQuizData(quiz, length){
  
  let mcqType = document.getElementById("mcq");
  let boolType = document.getElementById("boolean");
  let textType = document.getElementById("text");
  let quizTitle = document.getElementById("quizTitle");

  QuestionNbr.innerHTML = `Q ${currentQuestionNbr} / ${length}`;
  quizTitle.textContent = quiz.question ;

  mcqType.style.display = 'none';
  boolType.style.display = 'none';
  textType.style.display = 'none'; 
  endQuiz.style.display = 'none';
  startTimer();
    // -----------------------------------------------
     if(quiz.type ==='mcq') {

          mcqType.style.display = 'block';
          options.forEach((op , index) => {
            op.textContent = quiz.options[index];
            var optionIndex = index;   
          // ------------------------------------------
                op.addEventListener("click", () => {
                  if(optionIndex === quiz.correctAnswer){
                    op.style.backgroundColor = '#38b000';
                    scoreValue = 10; 
                    countNotification = 1;
                  }
                  else{
                    op.style.backgroundColor = 'red';
                    explanation.style.display = 'block';
                    explanation.textContent = quiz.explanation;
                  }
                  disableOptions();
                }) 
           })         
        }
    
      // ---------------------------------------------- type boolean
      else if(quiz.type === 'boolean')
        {
          var correctAnswer = quiz.correctAnswer;
          boolType.style.display = 'block';
          booleanOptions.forEach((op, index) => {
            op.textContent = quiz.booleanOptions[index];
            op.addEventListener("click", () => {
              if(op.textContent == correctAnswer){
                op.style.backgroundColor = '#38b000';
                scoreValue = 10;
                countNotification = 1;
              }
              else{
               op.style.backgroundColor = 'red';  
                explanation.style.display = 'block';
                explanation.textContent = quiz.explanation;
              }
              disableOptions();
            }) 

          });
        }
      // ---------------------------------------------- type text
      else 
        {   
          var correctAnswer = quiz.correctAnswer;
          textType.style.display = 'block';
          input.addEventListener('input', (e) => {
              var userAnswer = e.target.value.trim();
              if (userAnswer === correctAnswer) {
                  input.style.backgroundColor = '#38b000'; 
                  scoreValue = 10;
                  countNotification = 1;
                  explanation.style.display = 'none'; 
                  input.disabled = true;
                  explanation.style.display = 'block';
              } else {
                  input.style.backgroundColor = 'red'; 
                  explanation.textContent = quiz.explanation;
              }
              
          });     
      } 
      
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
function next() {
  clearInterval(timer2Interval); 
  if (questionsCount < (totalQuestions - 1)) {
    questionsCount++;
    currentQuestionNbr++;
    QuestionNbr.innerHTML = `Q ${currentQuestionNbr} / ${totalQuestions}`;
    updateScore();
    // ------------------------------------------
    progressCount.style.width = `calc(${(questionsCount / (totalQuestions - 1)) * 100}%)`;  
    //-------------------------------------------
    resetOptions();
    newQuizData(quizChosen[questionsCount], quizChosen.length);
  } else {
    updateScore();
    afficherResultat();
  }
}

function updateScore() {
  totalScore += scoreValue; 
  score.textContent = ` ${totalScore} `; 
  afficheScore.textContent = score.textContent;
  scoreValue = 0;

  if (countNotification == 1) {
    correctResponceCount += 1;
    correctResponce.textContent = ` ${correctResponceCount} `; 
  }
  else{
    incorrectResponceCount += 1;
    incorrectResponce.textContent = ` ${incorrectResponceCount} `; 
  }
  countNotification = 0;
}

 // -------------------------------------- timers

let counter1 = 30; 
let timer1 = document.getElementById('delai');
let timer1Interval = setInterval(function() {
      
     timer1.innerHTML =  ` 00 : ${counter1} `;
     
     counter1--;

     if (counter1 < 0) { 
         clearInterval(timer1Interval);
         timer1.innerHTML = "00 : 00"; 
     }
 }, 1000);


let timer2 = document.getElementById('timer'); 
let timerInterval; 
 
function startTimer() {
  let counter2 = 5;
  timer2Interval = setInterval(function () {
     timer2.innerHTML = `${counter2}`; 

     counter2--; 

     if (counter2 < 0) { 
      clearInterval(timer2Interval);
      timer1.innerHTML = "0"; 
      next(); 
    }
  }, 1000);    
 }

// --------------------------------------
function afficherResultat() {
  quizBox.style.display = 'none';
  endQuiz.style.display = 'block';
}
function backHome(){
  window.location.href = 'index.html';
}
function restartQuiz() {
  window.location.reload();
}

function resetOptions() {
  scoreValue = 0;
  options.forEach(op => {
    op.style.backgroundColor = '#fff'; 
    op.disabled = false;             
  });

  var booleanOptions = document.querySelectorAll(".booleanOp");
  booleanOptions.forEach(op => {
    op.style.backgroundColor = '#fff';
    op.disabled = false;
  });

  var input = document.getElementById('input');
  if (input) {
    input.disabled = false;
    input.value = '';               
    input.style.backgroundColor = '#fff';
  }

  explanation.style.display = 'none'; 
}