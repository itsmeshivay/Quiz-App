import React, { useState } from "react";
import quizData from "./data";
import Question from "./components/Question";
import Result from "./components/Result";
import "./App.css"; // Assuming you have some styles in App.css

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [showStart, setShowStart] = useState(true); // 👈 for start screen

  const handleAnswer = (selectedOption) => {
    const currentQuestion = quizData[currentIndex];
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
    }

    const nextIndex = currentIndex + 1;
    if (nextIndex < quizData.length) {
      setCurrentIndex(nextIndex);
    } else {
      setIsFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setIsFinished(false);
    setShowStart(true); // 👈 back to start screen
  };

  // ✅ Start screen
  if (showStart) {
    return (
      <div className="start-screen">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Quiz"
          className="start-image"
        />
        <h2>Welcome to the Quiz!</h2>
        <p>Test your knowledge with our fun quiz.</p>
        <button onClick={() => setShowStart(false)}>Start Quiz</button>
      </div>
    );
  }

  return (
    <div className="app">
      <h1>🧠 Quiz App</h1>
      {isFinished ? (
        <Result score={score} total={quizData.length} restartQuiz={restartQuiz} />
      ) : (
        <Question
          questionData={quizData[currentIndex]}
          handleAnswer={handleAnswer}
          currentIndex={currentIndex}
        />
      )}
    </div>
  );
}

export default App;
