import "./portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most Recent Work</span>

      <div className="portfolio_container container grid">
        <div className="portfolio_content"></div>
      </div>
    </section>
  );
};

export default Portfolio;
