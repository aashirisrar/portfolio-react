const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">2 Year Working</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">48+ Projects</span>
      </div>

      <div className="about__box">
        <i className="uil uil-bolt about__icon"></i>
        <h3 className="about__title">Focused</h3>
        <span className="about__subtitle">Work</span>
      </div>
    </div>
  );
};

export default Info;
