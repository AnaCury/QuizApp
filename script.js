const quizData = [
    {
      question: "What's the name of the dog guarding the Sorcerer’s Stone?",
      a: "Padfoot",
      b: "Fluffy",
      c: "The Grim",
      d: "Fang",
      correct: "b"
    },
    {
      question:
        "In a Quidditch game, what type of ball is a Beater most likely to hit?",
      a: "Snitch",
      b: "Nimbus",
      c: "Bludger",
      d: "Quaffle",
      correct: "c"
    },
    {
      question:
        "What spell does Ron use against the troll in Harry Potter and the Sorcerer's Stone?",
      a: "Alohomora",
      b: "Expelliarmus",
      c: "Stupefy",
      d: "Wingardium Leviosa",
      correct: "d"
    },
    {
      question: "Who is the Heir of Slytherin?",
      a: "Rubeus Hagrid",
      b: "Harry Potter",
      c: "Draco Malfoy",
      d: "Tom Riddle",
      correct: "d"
    }
  ];
  
  const quiz = document.getElementById("quiz");
  const answerEls = document.querySelectorAll(".answer");
  const questionEl = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitBtn = document.getElementById("submit");
  
  let currentQuiz = 0;
  let score = 0;
  
  loadQuiz();
  
  function loadQuiz() {
    deselectAnswers();
  
    const currentQuizData = quizData[currentQuiz];
  
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  }
  
  function deselectAnswers() {
    answerEls.forEach((answerEl) => (answerEl.checked = false));
  }
  
  function getSelected() {
    let answer;
  
    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.id;
      }
    });
  
    return answer;
  }
  
  submitBtn.addEventListener("click", () => {
    const answer = getSelected();
  
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++;
      }
  
      currentQuiz++;
  
      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        quiz.innerHTML = `
                  <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                  <button onclick="location.reload()">Reload</button>
              `;
      }
    }
  });
  