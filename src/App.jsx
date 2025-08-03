import React, { useState } from "react";
import quizzes from "./data"; // 👈 updated import
import Question from "./components/Question";
import Result from "./components/Result";
import "./App.css"; // Assuming you have some styles in App.css

function App() {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [showStart, setShowStart] = useState(true);

  const handleAnswer = (selectedOption) => {
    const currentQuestion = quizzes[selectedQuiz][currentIndex];
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
    }

    const nextIndex = currentIndex + 1;
    if (nextIndex < quizzes[selectedQuiz].length) {
      setCurrentIndex(nextIndex);
    } else {
      setIsFinished(true);
    }
  };

  const restartQuiz = () => {
    setSelectedQuiz(null);
    setCurrentIndex(0);
    setScore(0);
    setIsFinished(false);
    setShowStart(true);
  };

  const startQuiz = (quizKey) => {
    setSelectedQuiz(quizKey);
    setShowStart(false);
  };

  // ✅ Start screen with multiple tasks
  if (showStart) {
    return (
      <div className="start-screen">
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.6RGDI0BWoi2OiaFE5hceMQHaHa?pid=Api&P=0&h=180&w=180"
          alt="Quiz"
          className="start-image"
        />
        <h2>Select a Quiz</h2>
        <button onClick={() => startQuiz("general")}>🧠 General Knowledge</button>
        <button onClick={() => startQuiz("programming")}>💻 Programming</button>
      </div>
    );
  }

  return (
    <div className="app">
      <h1>🧠 Quiz App</h1>
      {isFinished ? (
        <Result score={score} total={quizzes[selectedQuiz].length} restartQuiz={restartQuiz} />
      ) : (
        <Question
          questionData={quizzes[selectedQuiz][currentIndex]}
          handleAnswer={handleAnswer}
          currentIndex={currentIndex}
        />
      )}
    </div>
  );
}

export default App;
