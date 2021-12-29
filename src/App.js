import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./component/homePage/Main";
import Assignment from "./component/QuestionPage/Assignment";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/qna" element={<Assignment />}></Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </div>
  );
}

export default App;
