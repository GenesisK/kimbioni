import './ProjectCard.css'

const ProjectCard = ({ project }) => {
  const { title, technologies, description, problem, solution, result, link, isCorporate } = project

  return (
    <article className='project-card'>
      <h3>{title}</h3>

      <ul className='project-card_tech'>
        {technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <p className='project-card_description'>{description}</p>

      <dl className='project-card_details'>
        <div>
          <dt>Problema</dt>
          <dd>{problem}</dd>
        </div>
        <div>
          <dt>Solução</dt>
          <dd>{solution}</dd>
        </div>
        <div>
          <dt>Resultado</dt>
          <dd>{result}</dd>
        </div>
      </dl>

      <div className='project-card_footer'>
        {link ? (
          <a href={link} target='_blank' rel='noopener noreferrer' className='project-card_link'>
            Ver projeto
          </a>
        ) : isCorporate ? (
          <span className='project-card_badge'>Projeto corporativo — código não disponível</span>
        ) : null}
      </div>
    </article>
  )
}

export default ProjectCard
