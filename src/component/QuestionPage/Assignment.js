import React, { useRef, useState } from "react";
import Result from "../outputPage/Result";
import Timer from "../timer/Timer";
import QuestionPage from "./QuestionPage.js/QuestionPage";
import questions from "./questions";
import "./Assignment.css";

const Assignment = () => {
  const Ref = useRef(null);

  const [isTimeCompleted, setIsTimeCompleted] = useState(false);
  const [onSubmitClick, setOnSubmitClick] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [submittedAnswers, setSubmittedAnswers] = useState([
    { index: 0, answer: "" },
  ]);

  const updateAnswers = (index, value) => {
    let answerList = [...submittedAnswers];
    let newAnswer = { index: index, answer: value };
    answerList[index] = newAnswer;
    setSubmittedAnswers(answerList);
  };

  const onPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => {
        return prev - 1;
      });
    }
  };

  const onNextQuestion = () => {
    if (!submittedAnswers[currentQuestion + 1]) {
      submittedAnswers[currentQuestion + 1] = {
        index: currentQuestion + 1,
        answer: "",
      };
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prevState) => prevState + 1);
    }
  };

  const calculateScore = (index, userAnswer) => {
    const actualAnswer = questions[index].answer;
    if (
      actualAnswer === submittedAnswers[index.answer] &&
      actualAnswer !== userAnswer
    ) {
      setTotalScore((prev) => prev - 1);
    } else if (
      actualAnswer !== submittedAnswers[index.answer] &&
      actualAnswer === userAnswer
    ) {
      setTotalScore((prev) => prev + 1);
    }
  };

  const onAssignmentSubmit = () => {
    clearInterval(Ref.current);
    setOnSubmitClick(true);
  };

  return (
    <div className="assignmentpage">
      {isTimeCompleted || onSubmitClick ? (
        <div className="resultPage">
          <Result
            totalScore={totalScore}
            totalQuestions={questions.length}
            submittedAnswers={submittedAnswers}
          />
        </div>
      ) : (
        <div className="middle_container">
          <div className="timer">
            <Timer
              Ref={Ref}
              setIsTimeCompleted={setIsTimeCompleted}
              calculateScore={calculateScore}
            />
          </div>
          <div className="assignment">
            <div className="questions">
              <QuestionPage
                questions={questions[currentQuestion]}
                index={currentQuestion}
                updateAnswers={updateAnswers}
                optionSelected={submittedAnswers[currentQuestion]}
                calculateScore={calculateScore}
              />
            </div>
            <div className="buttons">
              <div>
                <button
                  disabled={currentQuestion === 0 ? true : false}
                  className={`button ${
                    currentQuestion === 0 ? "disable" : null
                  }`}
                  onClick={onPreviousQuestion}
                >
                  Prev
                </button>
              </div>
              <div>
                <button
                  className={`button ${
                    currentQuestion === questions.length - 1 ? "disable" : null
                  }`}
                  onClick={onNextQuestion}
                >
                  Next
                </button>
              </div>
            </div>
            <div>
              {currentQuestion === questions.length - 1 ? (
                <button className="submit" onClick={onAssignmentSubmit}>
                  SUBMIT
                </button>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Assignment;
