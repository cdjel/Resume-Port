import TechStack from "../../components/TechStack/TechStack"
import Experience from "../../components/experience/Experience"
import Header from "../../components/header/Header"
import Projects from "../../components/relevantProjects/RelevantProjects"
import Language from "../../components/Language/Language"

const HomeScreen = () => {
  return (
    <div className="page-container">
        <Header />
        <Experience />
        <Language />
        <TechStack />
        <Projects />
    </div>
  )
}

export default HomeScreen
