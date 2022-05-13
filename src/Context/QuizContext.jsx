import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
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

  useEffect(() => {
    if (authState.isUserLoggedIn) {
      (async () => {
        try {
          await axios.post("/api/user/report", state.Report, {
            headers: { authorization: authState.token },
          });
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [authState, state.Report]);

  useEffect(() => {
    if (authState.isUserLoggedIn) {
      (async () => {
        try {
          const {
            data: { report },
          } = await axios.get("/api/user/report", { headers: { authorization: authState.token } });
          dispatch({ type: "Load_Report", payload: report });
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [authState]);

  return <QuizContext.Provider value={{ state, dispatch }}>{children}</QuizContext.Provider>;
};

const useQuiz = () => useContext(QuizContext);

export { useQuiz, QuizProvider };
