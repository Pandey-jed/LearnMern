 class QuizApp {
      constructor(questions, timeLimit = 60) {
        this.questions = questions;
        this.currentIndex = 0;
        this.score = 0;
        this.timeLeft = timeLimit;
        this.timerInterval = null;
        this.quizContainer = document.getElementById('quiz-container');
        this.timerDisplay = document.getElementById('timer');
      }

      start() {
        this.startTimer();
        this.showQuestion();
      }

      startTimer() {
        this.timerInterval = setInterval(() => {
          this.timeLeft--;
          this.timerDisplay.textContent = `Time left: ${this.timeLeft}s`;
          if (this.timeLeft <= 0) {
            clearInterval(this.timerInterval);
            this.endQuiz();
          }
        }, 1000);
      }

      showQuestion() {
        if (this.currentIndex >= this.questions.length) {
          this.endQuiz();
          return;
        }

        const current = this.questions[this.currentIndex];
        const optionsHtml = current.options.map((opt, i) =>
          `<div class="option" onclick="quiz.selectOption(${i})">${opt}</div>`
        ).join('');

        this.quizContainer.innerHTML = `
          <div class="question-box">
            <h3>${current.question}</h3>
            ${optionsHtml}
          </div>
        `;
      }

      selectOption(index) {
        const correct = this.questions[this.currentIndex].answerIndex;
        if (index === correct) this.score++;

        this.currentIndex++;
        this.showQuestion();
      }

      endQuiz() {
        clearInterval(this.timerInterval);
        this.quizContainer.innerHTML = `<h2>Quiz Over!</h2>
          <p>Your Score: ${this.score}/${this.questions.length}</p>`;
      }
    }

    const quizData = [
      {
        question: "What is the capital of France?",
        options: ["London", "Paris", "Berlin", "Rome"],
        answerIndex: 1
      },
      {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answerIndex: 1
      },
      {
        question: "Which language runs in a web browser?",
        options: ["Java", "Python", "C", "JavaScript"],
        answerIndex: 3
      }
    ];

    // Make quiz accessible in global scope for click handling
    const quiz = new QuizApp(quizData);
    quiz.start();