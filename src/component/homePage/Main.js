import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="welcomeText">WELCOME TO TIME BOUNDED MCQ QUIZ</div>
      <div className="totalTimetext">TOTAL TIME : 2 minutes</div>
      <div>
        <Link className="startButton" to="/qna">
          START
        </Link>
      </div>
    </div>
  );
};

export default Main;
