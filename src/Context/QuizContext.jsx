import { createContext, useContext, useReducer } from "react";
import { QuizReducer } from "../Reducer/QuizReducer";
const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(QuizReducer, {
    CurrentQuiz: {},
    Result: { score: 0, correct: 0, wrong: 0, attempt: 0 },
  });
  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => useContext(QuizContext);

export { useQuiz, QuizProvider };
