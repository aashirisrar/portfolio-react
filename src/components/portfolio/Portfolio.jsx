import { useState } from "react";
import "./portfolio.css";
import work1 from "../../assets/work2.jpg";
import work2 from "../../assets/work1.jpg";
import work3 from "../../assets/work3.jpg";
import work4 from "../../assets/work4.jpg";

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
                    <img alt="work-1" src={work1} className="portfolio-image" />
                    <h3 className="portfolio-item__title">AI Generator</h3>
                  </div>

                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://saas-ai-app.vercel.app"
                    className="portfolio-item__button"
                  >
                    View
                    <i className="uil uil-arrow-right portfolio-item__button-icon"></i>
                  </a>
                </div>

                <div className="portfolio-item__content">
                  <div>
                    <img alt="work-2" src={work2} className="portfolio-image" />
                    <h3 className="portfolio-item__title">
                      AI Article Summarizer
                    </h3>
                  </div>

                  <a
                    href="https://articlesummarizergpt4.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-item__button"
                  >
                    View
                    <i className="uil uil-arrow-right portfolio-item__button-icon"></i>
                  </a>
                </div>

                <div className="portfolio-item__content">
                  <div>
                    <img alt="work-3" src={work3} className="portfolio-image" />
                    <h3 className="portfolio-item__title">Recipe App</h3>
                  </div>

                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://react-recipe-app-3.netlify.app/"
                    className="portfolio-item__button"
                  >
                    View
                    <i className="uil uil-arrow-right portfolio-item__button-icon"></i>
                  </a>
                </div>

                <div className="portfolio-item__content">
                  <div>
                    <img alt="work-4" src={work4} className="portfolio-image" />
                    <h3 className="portfolio-item__title">Ecommerce Website</h3>
                  </div>

                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://react-ecommerce-3.netlify.app/"
                    className="portfolio-item__button"
                  >
                    View
                    <i className="uil uil-arrow-right portfolio-item__button-icon"></i>
                  </a>
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
                    <img alt="work-5" src={work1} className="portfolio-image" />
                    <h3 className="portfolio-item__title">AI Generator</h3>
                  </div>

                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://saas-ai-app.vercel.app"
                    className="portfolio-item__button"
                  >
                    View
                    <i className="uil uil-arrow-right portfolio-item__button-icon"></i>
                  </a>
                </div>

                <div className="portfolio-item__content">
                  <div>
                    <img alt="work-6" src={work2} className="portfolio-image" />
                    <h3 className="portfolio-item__title">
                      AI Article Summarizer
                    </h3>
                  </div>

                  <a
                    href="https://articlesummarizergpt4.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-item__button"
                  >
                    View
                    <i className="uil uil-arrow-right portfolio-item__button-icon"></i>
                  </a>
                </div>
              </div>
            </div>

            <div
              className={
                toggleState === 3
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="portfolio-item__container container grid">
                <div className="portfolio-item__content">
                  <div>
                    <img alt="work-7" src={work3} className="portfolio-image" />
                    <h3 className="portfolio-item__title">Recipe App</h3>
                  </div>

                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://react-recipe-app-3.netlify.app/"
                    className="portfolio-item__button"
                  >
                    View
                    <i className="uil uil-arrow-right portfolio-item__button-icon"></i>
                  </a>
                </div>
              </div>
            </div>

            <div
              className={
                toggleState === 4
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="portfolio-item__container container grid">
                <div className="portfolio-item__content">
                  <div>
                    <img alt="work-7" src={work4} className="portfolio-image" />
                    <h3 className="portfolio-item__title">Ecommerce Website</h3>
                  </div>

                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://react-ecommerce-3.netlify.app/"
                    className="portfolio-item__button"
                  >
                    View
                    <i className="uil uil-arrow-right portfolio-item__button-icon"></i>
                  </a>
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
