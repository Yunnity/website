const ProjectsList = ({projects}) => {
    return (
        <div className="projectsList">
            {projects && projects.map(project => (
                <div className="projectView" key={project.projectName}>
                    <p className="projectTitle"><i>{project.projectName}</i> — {project.projectType}</p>
                    <p className="projectDates">Project Dates: {project.projectDate}</p>
                    <p className="projectDetails"><b>Desc</b>: {project.projectDesc}</p>
                </div>
            ))}
        </div>
    );
}
 
export default ProjectsList;