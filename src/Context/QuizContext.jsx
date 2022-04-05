import { createContext, useContext, useReducer } from "react";
import { QuizReducer } from "../Reducer/QuizReducer";
const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(QuizReducer, {
    CurrentQuiz: {},
    Result: { score: 0, correct_answer: 0, wrong_answer: 0, attempt: 0 },
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
  });
  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => useContext(QuizContext);

export { useQuiz, QuizProvider };
