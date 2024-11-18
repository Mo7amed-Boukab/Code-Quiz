

var dashboard = document.querySelector('.navbar-button');
dashboard.addEventListener('click', ()=>{
window.location.href = 'dashboard.html';
})

let quizCartContainer = document.querySelector('.quiz-home-container')
let CardsInfo = JSON.parse(localStorage.getItem('CardsInfo'));

    CardsInfo.forEach((card , index) => {
        if(index > 2){
            let newCard = document.createElement('div');
            newCard.classList.add('quiz-card');
            newCard.innerHTML = `
                <img src="/images/img.png" alt="">
                <h3>${card.title}</h3>
                <p>${card.numberOfQuestions} questions - ${card.duration} secondes</p>
                <p class="level">Difficulté : <span id="${card.difficulty}">${card.difficulty}</span></p>
                 <button class="startBtn">Commencer</button>
            `;
            quizCartContainer.appendChild(newCard); 
        }
      
    });

let quizData = JSON.parse(localStorage.getItem('quizData'));
 
var data;
var startQuiz = document.querySelectorAll('.startBtn');
console.log(startQuiz);
    startQuiz.forEach((userChoice , index)=> {
    userChoice.addEventListener('click', () => {
        console.log(index);
        console.log(userChoice)
        data = quizData[index];
        console.log(data);
        
        localStorage.setItem("quizchosen",JSON.stringify(data));
        window.location.href = 'quiz.html';
    });
    });