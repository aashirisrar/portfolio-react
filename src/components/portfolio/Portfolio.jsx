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
          <div className="portfolio__tabs">
            <div
              onClick={() => toggleTab(1)}
              className={
                toggleState === 1
                  ? "portfolio__button portfolio__active button--flex"
                  : "portfolio__button button--flex"
              }
            >
              All
            </div>
            <div
              onClick={() => toggleTab(2)}
              className={
                toggleState === 2
                  ? "portfolio__button portfolio__active button--flex"
                  : "portfolio__button button--flex"
              }
            >
              Web
            </div>
            <div
              onClick={() => toggleTab(3)}
              className={
                toggleState === 3
                  ? "portfolio__button portfolio__active button--flex"
                  : "portfolio__button button--flex"
              }
            >
              App
            </div>
            <div
              onClick={() => toggleTab(4)}
              className={
                toggleState === 4
                  ? "portfolio__button portfolio__active button--flex"
                  : "portfolio__button button--flex"
              }
            >
              Design
            </div>
          </div>

          <div className="portfolio__sections">
            <div
              className={
                toggleState === 1
                  ? "portfolio__content portfolio__content-active"
                  : "portfolio__content"
              }
            >
              <div className="portfolio-item__container container grid">
                <div className="portfolio-item__content">
                  <div>
                    <i className="uil uil-web-grid portfolio-item__icon"></i>
                    <h3 className="portfolio-item__title">
                      Product <br /> Designer
                    </h3>
                  </div>

                  <span className="portfolio-item__button">
                    Demo
                    <i className="uil uil-arrow-right portfolio-item__button-icon"></i>
                  </span>
                </div>

                <div className="portfolio-item__content">
                  <div>
                    <i className="uil uil-arrow portfolio-item__icon"></i>
                    <h3 className="portfolio-item__title">
                      UI/UX <br /> Designer
                    </h3>
                  </div>

                  <span className="portfolio-item__button">
                    Demo
                    <i className="uil uil-arrow-right portfolio-item__button-icon"></i>
                  </span>
                </div>

                <div className="portfolio-item__content">
                  <div>
                    <i className="uil uil-edit portfolio-item__icon"></i>
                    <h3 className="portfolio-item__title">
                      Visual
                      <br />
                      Designer
                    </h3>
                  </div>

                  <span className="portfolio-item__button">
                    Demo
                    <i className="uil uil-arrow-right portfolio-item__button-icon"></i>
                  </span>
                </div>
              </div>
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="portfolio-item__container container grid">
                <div className="portfolio-item__content">
                  <div>
                    <i className="uil uil-web-grid portfolio-item__icon"></i>
                    <h3 className="portfolio-item__title">
                      Product <br /> Designer
                    </h3>
                  </div>

                  <span className="portfolio-item__button">
                    Demo
                    <i className="uil uil-arrow-right portfolio-item__button-icon"></i>
                  </span>
                </div>

                <div className="portfolio-item__content">
                  <div>
                    <i className="uil uil-arrow portfolio-item__icon"></i>
                    <h3 className="portfolio-item__title">
                      UI/UX <br /> Designer
                    </h3>
                  </div>

                  <span className="portfolio-item__button">
                    Demo
                    <i className="uil uil-arrow-right portfolio-item__button-icon"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
