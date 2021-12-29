import React from "react";
import { Link } from "react-router-dom";
import "./Result.css";

const Result = ({ totalQuestions, totalScore, submittedAnswers }) => {
  return (
    <div className="resultPage">
      <div className="quizComplete">Quiz Completed</div>
      <div className="result_container">
        <div>
          <div className="resulttext">Results</div>
        </div>
        <div className="resultData">
          <div> Total Number of questions : {totalQuestions}</div>
          <div> Total correct answer : {totalScore}</div>
          <div> Total Score : {totalScore}</div>
        </div>
      </div>
      <div>Thank you for taking the skill quiz</div>
      <div>
        <Link to="/">Home Page </Link>
      </div>
    </div>
  );
};

export default Result;
