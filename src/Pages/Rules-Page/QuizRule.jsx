import "./quizrule.css";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../Context/QuizContext";
export const QuizRule = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useQuiz();
  return (
    <div className="quiz-rules-page ">
      <div className="quiz-rules--header">
        <h1 className="quiz-rules__title">{state.CurrentQuiz.category}</h1>
      </div>
      <section className="quiz-rules--container">
        <div className="quiz-rules--content-container">
          <div className="quiz-rules--header">
            <h1 className="quiz-rules__sub-title">Rules</h1>
          </div>
          <ul className="quiz-rules__list">
            <li className="quiz-rules__list-item">Read the Questions Carefully</li>
            <li className="quiz-rules__list-item">Each question in the quiz is of multiple-choice.</li>
            <li className="quiz-rules__list-item">There are total 10 Question based on the selected Category.</li>
            <li className="quiz-rules__list-item">Each correct answer will get you 10 points.</li>
            <li className="quiz-rules__list-item">Each wrong answer will have 3 negative point.</li>
            <li className="quiz-rules__list-item">There will be no negative point for skipping the question.</li>
          </ul>
          <div className="quiz-rules__button--container">
            <button
              className=" quiz-rules__btn quiz-rules__button--primary"
              onClick={() => {
                dispatch({ type: "reset" });
                navigate("/");
              }}
            >
              Back
            </button>
            <button
              className="quiz-rules__btn quiz-rules__button--secondary"
              onClick={() => {
                dispatch({ type: "resetPreviousData" });
                navigate("/question/");
              }}
            >
              Start
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
