
const quizData = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      answer: 'Paris'
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Jupiter', 'Mars', 'Venus'],
      answer: 'Mars'
    },
    {
      question: 'What is the largest mammal in the world?',
      options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
      answer: 'Blue Whale'
    }
  ];
  
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const submitButton = document.getElementById('submit');
  
  let currentQuestion = 0;
  let score = 0;
  
  
  function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    optionsElement.innerHTML = '';
  
    currentQuizData.options.forEach((option, index) => {
      const optionElement = document.createElement('div');
      optionElement.classList.add('option');
      optionElement.innerText = option;
      optionElement.dataset.index = index;
      optionElement.addEventListener('click', selectOption);
      optionsElement.appendChild(optionElement);
    });
  }
  
  
  function selectOption(event) {
    const selectedOption = event.target;
    const selectedOptionIndex = parseInt(selectedOption.dataset.index);
    
   
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    
   
    selectedOption.classList.add('selected');
  }
  
  
  function submitAnswer() {
    const selectedOption = document.querySelector('.option.selected');
    if (!selectedOption) return;
  
    const selectedIndex = parseInt(selectedOption.dataset.index);
    const currentQuizData = quizData[currentQuestion];
    const correctAnswerIndex = currentQuizData.options.indexOf(currentQuizData.answer);
  
    if (selectedIndex === correctAnswerIndex) {
      score++;
    }
  
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  
  function showResult() {
    const resultText = `You scored ${score} out of ${quizData.length}!`;
    questionElement.innerText = resultText;
    optionsElement.innerHTML = '';
    submitButton.style.display = 'none';
  }
  
  submitButton.addEventListener('click', submitAnswer);
  
  
  loadQuestion();
  