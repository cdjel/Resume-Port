import { Link } from "react-router-dom";
import { AvatarSVG, Github, Email, Resume_Icon, Linkedin, RutgersCS } from "../../assets/image";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content grid items-center">
          <div className="header-intro">
            <div className="flex items-end header-intro-wrapper">
              <img src={AvatarSVG} alt="avatar" className="avatar" />
              <h1 className="header-name text-white">
                Crystal "Danikka" Jelski, <br /> Aresty Research Assistant and Student @ Rutgers-NB
              </h1>
              
            </div>
            <p className="header-text text text-white">
            Rising junior majoring in Computer Science at Rutgers-New Brunswick. Aspiring software engineer with an interest in embedded systems and data-driven technologies. Currently interested in the optimization of data processing and network performance.
            </p>
          </div>

          <div className="header-contact">
            <ul className="contact-info-list grid text-white">
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaEnvelope size={13} />
                </span>
                <p className="info-item-text">
                  <span className="header-text text text-white">cdjelski76@gmail.com</span>
                </p>
              </li>
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaPhone size={13} />
                </span>
                <p className="info-item-text ">
                  <span className="header-text text text-white">862-290-0106</span>
                </p>
              </li>
              <li className="grid items-start info-item">
                <span className="info-item-icon">
                  <FaLocationDot size={14} />
                </span>
                <p className="info-item-text">
                  <span className="header-text text text-white">Cedar Grove, NJ</span>
                </p>
              </li>
            </ul>
            <ul className="contact-social-list flex items-center">
                <li className="social-item">
                    <a href="https://github.com/cdjel"target="_blank" rel="noopener noreferrer" >
                        <img src={Github} className="sizing" />
                        <span className="tooltip text">GitHub</span>
                    </a>
                </li>
                <li className="social-item">
                    <a href="https://www.linkedin.com/in/danikka-jelski/" target="_blank" rel="noopener noreferrer">
                        <img src={Linkedin} className="sizing" />
                        <span className="tooltip text">Linkedin</span>
                    </a>
                </li>
                <li className="social-item">
                    <a href="mailto:cdjelski76@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src={Email} className="sizing"/>
                        <span className="tooltip text">Email</span>
                    </a>
                </li>
                <li className="social-item">
                    <a href="https://aresty.rutgers.edu/" target="_blank" rel="noopener noreferrer">
                        <img src={RutgersCS} className="sizing" />
                        <span className="tooltip text">Rutgers Aresty</span>
                    </a>
                </li>
                <li className="social-item">
                    <a href="src/assets/images/jelski_crystal_resume_824_copy.pdf" target="_blank" rel="noopener noreferrer">
                        <img src={Resume_Icon} className="sizing" />
                        <span className="tooltip text">Resume (PDF)</span>
                    </a>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
