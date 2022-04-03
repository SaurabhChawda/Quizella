import "./quiz-question.css";
import { useNavigate } from "react-router-dom";
export const QuizQuestion = () => {
  const navigate = useNavigate();
  return (
    <div className="quiz-question-page ">
      <section className="quiz-question--container">
        <div className="quiz-question--content-container">
          <div className="quiz-question--header">
            <h4 className="quiz-question--header-demo quiz-question--counter">
              Q- 10/10
            </h4>
            <h1 className="quiz-question--title">Category</h1>
            <h4 className="quiz-question--header-demo quiz-question--timer">
              00:00
            </h4>
          </div>
          <ul className="quiz-question__list">
            <li className="quiz-question__list-item">
              Question 1 :- Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Dolor magni reiciendis eveniet, maxime tenetur officiis
              optio ipsam quisquam nisi doloribus commodi eligendi quaerat?
              Molestiae autem expedita officia consequatur distinctio harum.
            </li>
          </ul>
          <div className="quiz-question--options">
            <div className="quiz-question__btn--options">
              <button className="quiz-question__btn-demo quiz-question__btn-one">
                Option one
              </button>
              <button className="quiz-question__btn-demo quiz-question__btn-two">
                Option two
              </button>
            </div>
            <div className="quiz-question__btn--options">
              <button className="quiz-question__btn-demo quiz-question__btn-three">
                Option three
              </button>
              <button className="quiz-question__btn-demo quiz-question__btn-four">
                Option four
              </button>
            </div>
          </div>
          <div className="quiz-question__button--container">
            <button className=" quiz-question__btn quiz-question__button--primary">
              Quit
            </button>
            <button
              className="quiz-question__btn quiz-question__button--secondary"
              onClick={() => navigate("/result/")}
            >
              Skip
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
