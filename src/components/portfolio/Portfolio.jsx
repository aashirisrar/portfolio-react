import { useState } from "react";
import "./portfolio.css";

const Portfolio = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most Recent Work</span>

      <div className="portfolio_container container grid">
        <div className="portfolio_content">
          <div className="qualification__tabs">
            <div
              onClick={() => toggleTab(1)}
              className={
                toggleState === 1
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }
            >
              All
            </div>
            <div
              onClick={() => toggleTab(2)}
              className={
                toggleState === 2
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }
            >
              Web
            </div>
            <div
              onClick={() => toggleTab(3)}
              className={
                toggleState === 3
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }
            >
              App
            </div>
            <div
              onClick={() => toggleTab(4)}
              className={
                toggleState === 4
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }
            >
              Design
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
