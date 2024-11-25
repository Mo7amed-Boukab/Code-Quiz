//------------------------------------------ Data ----------------------------------------
if (!localStorage.getItem("quizData")) {
  const quizData = [
    [
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
   
   [
      
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
         options: ['text-shadow','box-shadow', 'shadow', 'filter-shadow'],
         correctAnswer: 0,
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
   
     [
   
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
  ];
  localStorage.setItem("quizData", JSON.stringify(quizData));
}

if (!localStorage.getItem("CardsInfo")) {
  const CardsInfo = [
      {
          title: 'Quiz HTML',
          difficulty: 'Facile',
          duration: 30, 
          numberOfQuestions: 5,
          image: 'html.jpeg',
      },
      {
          title: 'Quiz CSS',
          difficulty: 'Moyenne',
          duration: 30,
          numberOfQuestions: 5,
          image: 'css.jpeg',
      },
      {
          title: 'Quiz JavaScript',
          difficulty: 'Difficile',
          duration: 30, 
          numberOfQuestions: 5,
          image: 'js.jpeg',
      }
  ];
  localStorage.setItem("CardsInfo", JSON.stringify(CardsInfo));
}
let GetQuizData = JSON.parse(localStorage.getItem('quizData'));
let GetCardsInfo = JSON.parse(localStorage.getItem('CardsInfo'));