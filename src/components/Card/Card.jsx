import "./card.css";
import { useSearch } from "../../Context/SearchContext";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../Context/QuizContext";
export function Card() {
  const { updatedData } = useSearch();
  const navigate = useNavigate();
  const { state, dispatch } = useQuiz();
  return (
    <div>
      <section className="card">
        {updatedData &&
          updatedData.map((item) => {
            return (
              <div className="card__wrapper">
                <div className="card__primary--actions">
                  <div className="card__bg">
                    <img
                      className="card__bg--img"
                      src={item.img}
                      alt="History category"
                    />
                  </div>
                  <div className="card__content">
                    <h3 className="card__content--title">{item.category}</h3>
                  </div>
                </div>
                <div className="card__secondary--actions">
                  <button
                    className="card__btn card__button--primary"
                    onClick={() => {
                      navigate("/rule/");
                      dispatch({
                        type: "Category",
                        payload: updatedData.filter(
                          (dataitem) => dataitem.category === item.category
                        ),
                      });
                    }}
                  >
                    Start Now
                  </button>
                  <div className="card__badge">
                    <span className="card__badge-text">10 Q</span>
                  </div>
                </div>
              </div>
            );
          })}
      </section>
    </div>
  );
}
