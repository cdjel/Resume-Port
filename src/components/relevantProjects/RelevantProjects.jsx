import PropTypes from "prop-types";
import Title from "../common/Title";
import DATA from "../../constant/mockData";

const Projects = () => {
  return (
    <div className="project-sc resume-block">
      <div className="container">
        <div className="project-content dotted-border-left">
          <Title titleText={"Relevant Projects"} />
          <div className="project-list grid">
            {DATA.relevantProjects?.map((item) => (
              <ProjectItem key={item.id} item={item} />
            ))}
          </div>
          <div className="dots-shape"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

const ProjectItem = ({ item }) => {
  return (
    <div className="project-item" key={item.id}>
      <div className="project-title flex items-center flex-wrap">
        <p className="project-title-text">{item.name}</p>
      </div>
      <div className="project-language flex items-center flex-wrap">
        <p className="project-language-text">🪷 {item.language}</p>
      </div>

      <p className="project-description text">{item.description}</p>
        {item.github && (
          <a
            className="project-link"
            href={item.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            ➣ Github
          </a>)}
    </div>
  );
};

ProjectItem.propTypes = {
  item: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
  }).isRequired,
};
