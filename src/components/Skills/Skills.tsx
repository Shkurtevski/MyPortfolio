import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../../assets/img/color-sharp.png";
import { skillsData } from "../../data/data";
import SkillItem from "./sub-components/SkillItem";
import SkillText from "./sub-components/SkillText";

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
              <SkillText
                skillTitle="Skills"
                skillParagraph="I have a deep appreciation for clean and maintainable code, and I'm
        always eager to learn and adapt to the latest industry trends. With a
        passion for creating pixel-perfect designs and optimizing user
        experiences, I'm committed to delivering high-quality web solutions that
        exceed expectations."
              />
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {skillsData.map((skill) => (
                  <SkillItem
                    key={skill.id}
                    icon={skill.icon}
                    title={skill.title}
                  />
                ))}
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
