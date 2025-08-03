import React from "react";

const Question = ({ questionData, handleAnswer, currentIndex }) => {
  return (
    <div className="question-card">
      <h2>Question {currentIndex + 1}</h2>
      <p>{questionData.question}</p>
      <div className="options">
        {questionData.options.map((option, idx) => (
          <button key={idx} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
