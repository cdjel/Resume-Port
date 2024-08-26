import DATA from "../../constant/Data";
import Title from "../common/Title";
import PropTypes from "prop-types";

const TechStack = () => {
  return (
    <div className="tech-stack-sc resume-block">
      <div className="container">
        <div className="cert-award-content dotted-border-left">
          <Title titleText={"Other Tech Stack"} />
          <div className="tech-stack-list grid">
            {DATA.techStack?.map((item) => (
              <TechStackItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;

const TechStackItem = ({ item }) => {
  return (
    <div className="cert-award-item grid text-center">
      <div className="cert-award-course">{item.course}
        <div className="cert-award-info-l"></div>  
      </div>
    </div>
  );
};

TechStackItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
  }).isRequired,
};
