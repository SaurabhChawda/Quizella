import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home, QuizQuestion, QuizRule, Report, Result, Login, Signup } from "./Pages/Index";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import Mockman from "mockman-js";
function App() {
  return (
    <div>
      <ToastContainer autoClose={2000} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login/" element={<Login />}></Route>
        <Route path="/signup/" element={<Signup />}></Route>
        <Route
          path="/rule/"
          element={
            <PrivateRoute>
              <QuizRule />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/question/"
          element={
            <PrivateRoute>
              <QuizQuestion />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/result/"
          element={
            <PrivateRoute>
              <Result />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/report/"
          element={
            <PrivateRoute>
              <Report />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/mock" element={<Mockman />}></Route>
      </Routes>
    </div>
  );
}

export default App;
