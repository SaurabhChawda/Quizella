import { Nav } from "../../components/Nav/Nav";
import { Header } from "../../components/Header/Header";
import { NavForTab } from "../../components/NavForTab/NavForTab";
import { Footer } from "../../components/Footer/Footer";
import { useQuiz } from "../../Context/QuizContext";
import "./report.css";
import "./report-responsive.css";
import { v4 as uuid } from "uuid";
export function Report() {
  const {
    state: {
      Report: { Category_Report, Final_Report },
    },
  } = useQuiz();
  return (
    <div className="report-page">
      <Nav />
      <Header />
      <main className="report__main">
        <div className="report--header">
          <div className="report--header--container">
            <div className="report__img--container">
              <img className="result__img" src="/assets/image/Result/Avatar.png" alt="Star" />
            </div>
            <div className="report--quiz-report">
              {Final_Report &&
                Final_Report.map((item) => {
                  return (
                    <div key={uuid()} className="report--quiz-container">
                      <h1 className="report--quiz-demo report--quiz-total-score">Score : {item.score}</h1>
                      <h1 className="report--quiz-demo report--quiz-attempt-questions">Attempt : {item.attempt}</h1>
                      <h1 className="report--quiz-demo report--quiz-correct-answer">
                        Correct Answer : {item.correct_answer}
                      </h1>
                      <h1 className="report--quiz-demo report--quiz-wrong-score">Wrong Answer : {item.wrong_answer}</h1>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <section className="report">
          {Category_Report &&
            Category_Report.map((item) => {
              return (
                <div key={uuid()} className="report--wrapper">
                  <div className="report--header--wrapper">
                    <h3 className="report--header">{item.category}</h3>
                  </div>
                  <table className="report__table">
                    <tr className="report__table-row">
                      <td className="report__table-data">Score</td>
                      <td className="report__table-data">{item.score}</td>
                    </tr>
                    <tr className="report__table-row">
                      <td className="report__table-data">Correct Answer</td>
                      <td className="report__table-data">{item.correct_answer}</td>
                    </tr>
                    <tr className="report__table-row">
                      <td className="report__table-data">wrong Answer</td>
                      <td className="report__table-data">{item.wrong_answer}</td>
                    </tr>
                    <tr className="report__table-row">
                      <td className="report__table-data">Attempt</td>
                      <td className="report__table-data">{item.attempt}</td>
                    </tr>
                  </table>
                </div>
              );
            })}
        </section>
        <NavForTab />
      </main>
      <Footer />
    </div>
  );
}
