import useFetch from './useFetch';
import ProjectsList from './ProjectsList';
import { motion } from 'framer-motion';

const Projects = () => {
    let { data: pastProjectList, loading, loadingMessage } = useFetch("http://localhost:3002/pastProjects");
    let { data: currProjectList, loading1, loadingMessage1 } = useFetch("http://localhost:3002/currProjects");
    
    return (
        <motion.div className="projects"
        initial={{scale: 0, opacity: 0}}
        animate={{scale: 1, opacity: 1}}
        transition={{delay: 0.27, duration: 0.6, type: "spring", stiffness: 85}}>
            <h2 className="projectsHeader">Cool Projects c:</h2>
                <span className="currProjectsHeader">Currently Working On</span>
                {loading && <span>{loadingMessage}</span>}
                {currProjectList &&
                <div className="currProjects"><ProjectsList projects={currProjectList}/></div>}
                {loading1 && <span>{loadingMessage1}</span>}
                <span className="pastProjectsHeader">Past Works</span>
                <ProjectsList projects={pastProjectList}/>
        </motion.div>
    );
}
 
export default Projects;