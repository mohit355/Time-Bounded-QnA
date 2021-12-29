import React from "react";
import "./QuestionPage.css";

const QuestionPage = ({
  questions,
  index,
  updateAnswers,
  optionSelected,
  calculateScore,
}) => {
  const onOptionChange = (event) => {
    calculateScore(index, event.target.value);
    updateAnswers(index, event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="questionPage">
      <div className="qno">Question No: {index + 1}</div>
      <div className="questionText">{questions.question}</div>
      <div className="options">
        {questions.options.map((option, ind) => (
          <label key={ind} className={"question-option"}>
            <input
              type="radio"
              value={option.value}
              checked={optionSelected && optionSelected.answer === option.value}
              onChange={onOptionChange}
            />
            {option.displayText}
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuestionPage;
