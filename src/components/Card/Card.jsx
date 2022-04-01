import "./card.css";
export function Card() {
  return (
    <div>
      <section className="card">
        <div className="card__wrapper">
          <div className="card__primary--actions">
            <div className="card__bg">
              <img
                className="card__bg--img"
                src="/assets/image/Category/History.jpg"
                alt="History category"
              />
            </div>
            <div className="card__content">
              <h3 className="card__content--title">History</h3>
            </div>
          </div>
          <div className="card__secondary--actions">
            <button className="card__btn card__button--primary">
              Start Now
            </button>
            <div className="card__badge">
              <span className="card__badge-text">10 Q</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
