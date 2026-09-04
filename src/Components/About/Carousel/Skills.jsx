import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Skills.css";
import { skillCategories } from "../../../data/skills";
import { skillIcons } from "../../../data/skillIcons";

const skills = skillCategories.flatMap((category) => category.items);

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    slidesToSlide: 1,
  },
};

const Skills = () => {
  return (
    <Carousel
      responsive={responsive}
      containerClass="carousel-container"
      autoPlay
      infinite
      slidesToSlide={1}
      autoPlaySpeed={2200}
      customTransition="transform 1s ease-in-out"
      transitionDuration={1000}
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
    >
      {skills.map((skill) => {
        const { Icon, color } = skillIcons[skill] ?? {}
        return (
          <div className="carousel-item" key={skill}>
            {Icon && <Icon className="carousel-item_icon" style={{ color }} />}
            <span>{skill}</span>
          </div>
        )
      })}
    </Carousel>
  );
};

export default Skills;
