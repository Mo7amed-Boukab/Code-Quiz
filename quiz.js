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
let totalQuestions = 4;
// ---------------------------------------------------- Question Number Header (variable)
let QuestionNbr = document.getElementById('QuestionNbr');
let currentQuestionNbr = 1; 
// ---------------------------------------------------- Score Header (variable)
let score = document.getElementById("score");
let scoreValue = 0
// ---------------------------------------------------- end quiz result
let endQuiz = document.querySelector('.endQuizBoxModul');
let afficheScore = document.getElementById('afficheScore');


let quizChosen = JSON.parse(localStorage.getItem("quizchosen"));
newQuestionData(quizChosen[questionsCount]);

 //============================================ function quiz 

function newQuestionData(quiz){
  
  let mcqType = document.getElementById("mcq");
  let boolType = document.getElementById("boolean");
  let textType = document.getElementById("text");
  let quizTitle = document.getElementById("quizTitle");

  quizTitle.textContent = quiz.question ; 
  mcqType.style.display = 'none';
  boolType.style.display = 'none';
  textType.style.display = 'none'; 
  endQuiz.style.display = 'none';

    // -----------------------------------------------
    
     if(quiz.type ==='mcq') {
       
          options.forEach((op , index) => {
            op.textContent = quiz.options[index];
            var optionIndex = index;
     
            mcqType.style.display = 'block';
           
          // -------------------------- Event click to verify correct/false answer , add colors , disable other options and update score
                op.addEventListener("click", () => {
                 
                  if(optionIndex === quiz.correctAnswer){
                    op.style.backgroundColor = '#38b000';
                    scoreValue += 10; 
                  }
                  else{
                    op.style.backgroundColor = 'red';
                    explanation.style.display = 'block';
                    explanation.textContent = quiz.explanation;
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
          boolType.style.display = 'block';
          booleanOptions.forEach((op, index) => {
            op.textContent = quiz.booleanOptions[index];
            op.addEventListener("click", () => {
              if(op.textContent == correctAnswer){
                op.style.backgroundColor = '#38b000';
                scoreValue += 10; 
              }
              else{
               op.style.backgroundColor = 'red';  
                explanation.style.display = 'block';
                explanation.textContent = quiz.explanation;
              }
              updateScore();
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
                  scoreValue += 10;
                  explanation.style.display = 'none'; 
                  input.disabled = true;
                  explanation.style.display = 'block';
              } else {
                  input.style.backgroundColor = 'red'; 
                  explanation.textContent = quiz.explanation;
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
    newQuestionData(quizChosen[questionsCount]); 
  } else {
    afficherResultat();
  }
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
 // -------------------------------------- timer

  var counter =   30; 
  var timer = document.getElementById('delai');

  var countInterval = setInterval(function() {

      timer.innerHTML =  ` 00 : ${counter} `;
      
      counter--;

      if (counter < 0) { 
          clearInterval(countInterval);
          timer.innerHTML = "00 : 00"; 
      }
  }, 1000);

// --------------------------------------
function afficherResultat() {
  quizBox.style.display = 'none';
  endQuiz.style.display = 'block';
  afficheScore.textContent = ` ${scoreValue} `;
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
  endQuiz.style.display = 'none';
  quizBox.style.display = 'block';

  resetOptions();
  counter = 30;
  timer.innerHTML =  ` 00 : ${counter} `;

}

function resetOptions() {
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