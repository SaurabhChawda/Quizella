import "./result.css";
import { useQuiz } from "../../Context/QuizContext";
import { useNavigate } from "react-router-dom";
export const Result = () => {
  const { state, dispatch } = useQuiz();
  const navigate = useNavigate();
  return (
    <div className="result-page ">
      <section className="result--container">
        <div className="result--header">
          <div className="result--header--container">
            <div className="result__img--container">
              <img
                className="result__img"
                src="/assets/image/Result/Avatar.png"
                alt="Star"
              />
            </div>
            <div className="result--quiz-report">
              <div className="result--quiz-container">
                <h1 className="result--quiz-demo result--quiz-total-score">
                  Score: {state.Result.score}
                </h1>
                <h1 className="result--quiz-demo result--quiz-attempt-questions">
                  Attempt: {state.Result.attempt}
                </h1>
              </div>
              <div className="result--quiz-container">
                <h1 className="result--quiz-demo result--quiz-correct-answer">
                  Correct: {state.Result.correct_answer}
                </h1>
                <h1 className="result--quiz-demo result--quiz-wrong-score">
                  wrong: {state.Result.wrong_answer}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="result--correct-answer--container">
          {state.CurrentQuiz.ques &&
            state.CurrentQuiz.ques.map((item, index) => {
              console.log(item.length);
              return (
                <div key={item.id} className="result--content">
                  <p className="result__list--question">
                    Q-{index + 1} {item.question}
                  </p>
                  <div className="result--options">
                    {item.options.map((value) => {
                      if (item.correct_answer === value) {
                        return (
                          <div className="result__btn--options">
                            <button
                              className="result__btn"
                              style={{ backgroundColor: "green" }}
                            >
                              {value}
                            </button>
                          </div>
                        );
                      } else {
                        return (
                          <div className="result__btn--options">
                            <button
                              className="result__btn"
                              style={{ backgroundColor: "red" }}
                            >
                              {value}
                            </button>
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              );
            })}
        </div>
        <div className="result-page-close--container">
          <button
            className="result-page--close"
            onClick={() => {
              dispatch({
                type: "categoryReport",
                payload: state.CurrentQuiz.category,
              });
              dispatch({ type: "finalReport" });
              dispatch({ type: "reset" });
              navigate("/");
            }}
          >
            Close
          </button>
        </div>
      </section>
    </div>
  );
};
