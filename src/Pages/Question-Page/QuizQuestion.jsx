import "./quiz-question.css";
import { useQuiz } from "../../Context/QuizContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../components/Modal/Modal.jsx";
import uuid from "react-uuid";

export const QuizQuestion = () => {
  const [nextQuestion, setnextQuestion] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const { state, dispatch } = useQuiz();
  const navigate = useNavigate();

  return (
    <div className="quiz-question-page">
      {isOpen && <Modal value={{ isOpen, setIsOpen }} />}

      {nextQuestion === 10 && navigate("/result/")}

      {state.CurrentQuiz.ques &&
        state.CurrentQuiz.ques
          .filter((item, index) => index === nextQuestion)
          .map((item) => {
            return (
              <section key={item.id} className="quiz-question--container">
                <div className="quiz-question--content-container">
                  <div className="quiz-question--header">
                    <h4 className="quiz-question--header-demo quiz-question--counter">
                      Q- {nextQuestion + 1}/10
                    </h4>
                    <h1 className="quiz-question--title">
                      {state.CurrentQuiz.category}
                    </h1>
                    <h4 className="quiz-question--header-demo quiz-question--timer">
                      00:00
                    </h4>
                  </div>
                  <p className="quiz-question__list">{item.question}</p>
                  <div className="quiz-question--options">
                    {item.options.map((value) => {
                      return (
                        <button
                          key={uuid()}
                          className="quiz-question__btn"
                          onClick={() => {
                            dispatch({
                              type: "result",
                              payload: value,
                              correct_answer: item.correct_answer,
                            });
                            setnextQuestion(nextQuestion + 1);
                          }}
                        >
                          {value}
                        </button>
                      );
                    })}
                  </div>
                  <div className="quiz-question__button--container">
                    <button
                      className="quiz-question__btn--demo quiz-question__button--primary"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      Quit
                    </button>
                    <button
                      className="quiz-question__btn--demo quiz-question__button--secondary"
                      onClick={() => {
                        setnextQuestion(nextQuestion + 1);
                      }}
                    >
                      Skip
                    </button>
                  </div>
                </div>
              </section>
            );
          })}
    </div>
  );
};
