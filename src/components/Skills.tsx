import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import javascriptIcon from "../assets/img/javascript-logo.png";
import reactIcon from "../assets/img/React-icon.png";
import cssIcon from "../assets/img/css-logo.png";
import htmlIcon from "../assets/img/html-logo.png";
import sassIcon from "../assets/img/sass-logo.png";
import colorSharp from "../assets/img/color-sharp.png";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Top Skills</h2>
              <p>
                I have a deep appreciation for clean and maintainable code, and
                I'm always eager to learn and adapt to the latest industry
                trends. With a passion for creating pixel-perfect designs and
                optimizing user experiences, I'm committed to delivering
                high-quality web solutions that exceed expectations.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={reactIcon} alt="javascript-logo" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={javascriptIcon} alt="react-logo" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={cssIcon} alt="css-icon" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={htmlIcon} alt="html-icon" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={sassIcon} alt="sass-icon" />
                  <h5>Sass</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="color-sharp-background"
      />
    </section>
  );
};

export default Skills;
