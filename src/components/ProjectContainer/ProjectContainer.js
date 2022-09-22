import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.scss'

const ProjectContainer = ({ project }) => (
  <div className='card'>
    <div className='card_side card_side--front'>
      <h3>{project.name}</h3>

      <p className='project__description'>{project.description}</p>

      <p style={{ margin: 20 }}>{project.DeploymentSite}</p>

      {project.sourceCode && (
        <a
          href={project.sourceCode}
          aria-label='source code'
          className='link link--icon'
        >
          <GitHubIcon />
        </a>
      )}

      {project.livePreview && (
        <a
          href={project.livePreview}
          aria-label='live preview'
          className='link link--icon'
        >
          <LaunchIcon />
        </a>
      )}
    </div>
    {project.stack && (
      <>
        <div className='card_side card_side--back'>
          <h4>Tech Utilized for this project</h4>
          <ul className='project__stack'>
            {project.stack.map((item) => (
              <li key={uniqid()} className='project__stack-item'>
                {item}
              </li>
            ))}
            <br />
          </ul>
        </div>
      </>
    )}
  </div>
)

export default ProjectContainer
