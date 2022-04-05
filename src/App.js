import "./App.css";
import { Home } from "../src/Pages/Home-Page/Home";
import { Login } from "../src/Pages/Login-Page/Login";
import { Signup } from "../src/Pages/Signup-Page/Signup";
import { QuizRule } from "./Pages/Rules-Page/QuizRule";
import { QuizQuestion } from "./Pages/Question-Page/QuizQuestion";
import { Report } from "./Pages/Report-Page/Report";
import { Result } from "./Pages/Result-Page/Result";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login/" element={<Login />}></Route>
        <Route path="/signup/" element={<Signup />}></Route>
        <Route path="/rule/" element={<QuizRule />}></Route>
        <Route path="/question/" element={<QuizQuestion />}></Route>
        <Route path="/result/" element={<Result />}></Route>
        <Route path="/report/" element={<Report />}></Route>
      </Routes>
    </>
  );
}

export default App;
