import "./result.css";
export const Result = () => {
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
                  Score:
                </h1>
                <h1 className="result--quiz-demo result--quiz-attempt-questions">
                  Attempt:
                </h1>
              </div>
              <div className="result--quiz-container">
                <h1 className="result--quiz-demo result--quiz-correct-answer">
                  Correct:
                </h1>
                <h1 className="result--quiz-demo result--quiz-wrong-score">
                  wrong:
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="result--correct-answer--container">
          <div className="result--content">
            <p className="result__list--question">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore repellendus beatae odio sed minima hic ad dolor quasi,
              nisi tenetur qui molestias maxime adipisci asperiores quidem
              praesentium mollitia tempora ducimus.
            </p>
            <div className="result--options">
              <div className="result__btn--options">
                <button className="result__btn">opt1</button>
              </div>
              <div className="result__btn--options">
                <button className="result__btn">opt2</button>
              </div>
              <div className="result__btn--options">
                <button className="result__btn">opt3</button>
              </div>
              <div className="result__btn--options">
                <button className="result__btn">opt4</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
