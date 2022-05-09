import { createContext, useContext, useReducer, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { QuizReducer } from "../Reducer/QuizReducer";
import { useAuth } from "../Context/AuthContext";
const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const { authState } = useAuth();

  const [state, dispatch] = useReducer(QuizReducer, {
    CurrentQuiz: {},
    Result: { score: 0, correct_answer: 0, wrong_answer: 0, attempt: 0 },
    Report: {
      Category_Report: [
        {
          category: "History",
          score: 0,
          correct_answer: 0,
          wrong_answer: 0,
          attempt: 0,
        },
        {
          category: "Politics",
          score: 0,
          correct_answer: 0,
          wrong_answer: 0,
          attempt: 0,
        },
        {
          category: "Geography",
          score: 0,
          correct_answer: 0,
          wrong_answer: 0,
          attempt: 0,
        },
        {
          category: "Sports",
          score: 0,
          correct_answer: 0,
          wrong_answer: 0,
          attempt: 0,
        },
        {
          category: "Technical",
          score: 0,
          correct_answer: 0,
          wrong_answer: 0,
          attempt: 0,
        },
      ],
      Final_Report: [
        {
          score: 0,
          attempt: 0,
          correct_answer: 0,
          wrong_answer: 0,
        },
      ],
    },
  });
  const [showReport, setShowReport] = useState(state.Report);

  useEffect(() => {
    if (authState.isUserLoggedIn) {
      (async () => {
        try {
          await axios.post("/api/user/report", state.Report, {
            headers: { authorization: authState.token },
          });
          const {
            data: { report },
          } = await axios.get("/api/user/report", { headers: { authorization: authState.token } });
          setShowReport(report);
          toast.success("update Report Successfully");
        } catch (error) {
          console.log(error);
        }
      })();
    } else {
      toast.success("You are not Logged In");
    }
  }, [authState, state.Report]);

  return <QuizContext.Provider value={{ state, dispatch, showReport }}>{children}</QuizContext.Provider>;
};

const useQuiz = () => useContext(QuizContext);

export { useQuiz, QuizProvider };
