// import { Link } from "react-router-dom";
import { AvatarSVG, Github, Email, Resume_Icon, Linkedin, RutgersCS, Resume} from "../../assets/image";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content grid items-center">
            
          <div className="header-contact">
            <p>
              Message:
            </p>
            <p className="header-text text text-black">
              My name is Danikka and I am student studying computer science at Rutgers-New Brunswick. I am a research assistant in the computer science department, working on a project involving compiler optimizations for parallel network packet processing in the Linux kernel with eBPF. Currently, I am interested in deepening my knowledge in systems software and embedded systems, with a focus on computer architecture, performance optimization, and low-level programming. 
            </p>
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
                    <a href={Resume} target="_blank" rel="noopener noreferrer">
                        <img src={Resume_Icon} className="sizing" />
                        <span className="tooltip text">Resume (PDF)</span>
                    </a>
                </li>
            </ul>


          </div>
          <div className="header-intro"> 
          
            <div className="flex items-end header-intro-wrapper">
              {/**REMOVED IMG HERE TO MOVE SOMEWHERE ELSE */}
              <img src={AvatarSVG} alt="avatar" className="avatar" />
              <p>From:</p>
              <p className="header-name text-white" >
                Crystal "Danikka" Jelski, <br /> Aresty Research Assistant and Student @ Rutgers-NB
              </p>
              
            </div>
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
