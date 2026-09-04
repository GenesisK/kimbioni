import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import './Projects.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import ProjectCard from '../ProjectCard/ProjectCard'
import { projects } from '../../data/projects'

const AUTOPLAY_INTERVAL = 14000
const MOBILE_QUERY = '(max-width: 750px)'
const SWIPE_THRESHOLD = 50

const Projects = () => {
  const [pageSize, setPageSize] = useState(() => (window.matchMedia(MOBILE_QUERY).matches ? 1 : 2))

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY)
    const update = () => setPageSize(mq.matches ? 1 : 2)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const pages = useMemo(() => {
    const chunks = []
    for (let i = 0; i < projects.length; i += pageSize) {
      let chunk = projects.slice(i, i + pageSize)
      if (chunk.length < pageSize) {
        chunk = [...chunk, ...projects.slice(0, pageSize - chunk.length)]
      }
      chunks.push(chunk)
    }
    return chunks
  }, [pageSize])

  const isSlider = pages.length > 1
  const [page, setPage] = useState(0)
  const trackRef = useRef(null)
  const [slideHeight, setSlideHeight] = useState(null)

  useEffect(() => {
    setPage(0)
  }, [pageSize])

  useEffect(() => {
    if (!isSlider) return
    const timer = setInterval(() => {
      setPage((current) => (current + 1) % pages.length)
    }, AUTOPLAY_INTERVAL)
    return () => clearInterval(timer)
  }, [isSlider, pages.length])

  useLayoutEffect(() => {
    if (!isSlider) return
    const activeContent = trackRef.current?.children[page]?.firstElementChild
    if (!activeContent) return
    const update = () => setSlideHeight(activeContent.offsetHeight)
    update()
    const observer = new ResizeObserver(update)
    observer.observe(activeContent)
    return () => observer.disconnect()
  }, [isSlider, page, pages])

  const dragStartX = useRef(null)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const handlePointerDown = (e) => {
    dragStartX.current = e.clientX
    setIsDragging(true)
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const handlePointerMove = (e) => {
    if (dragStartX.current === null) return
    setDragOffset(e.clientX - dragStartX.current)
  }

  const endDrag = () => {
    if (dragStartX.current === null) return
    if (dragOffset <= -SWIPE_THRESHOLD) {
      setPage((current) => (current + 1) % pages.length)
    } else if (dragOffset >= SWIPE_THRESHOLD) {
      setPage((current) => (current - 1 + pages.length) % pages.length)
    }
    dragStartX.current = null
    setDragOffset(0)
    setIsDragging(false)
  }

  return (
    <section id='projects' className='projects'>
      <div className="projects-title">
        <h1>
          Automações e{' '}
          <span className="projects-title_highlight">
            Projetos
            <img className='bg-img' src={theme_pattern} alt="" />
          </span>
        </h1>
      </div>

      {isSlider ? (
        <div
          className="projects-slider"
          style={slideHeight ? { height: slideHeight } : undefined}
        >
          <div
            ref={trackRef}
            className="projects-slider-track"
            style={{
              transform: `translateX(calc(-${page * 100}% + ${dragOffset}px))`,
              transition: isDragging ? 'none' : undefined,
            }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onPointerLeave={() => isDragging && endDrag()}
          >
            {pages.map((pageProjects, index) => (
              <div className="projects-slide" key={index}>
                <div className="projects-grid">
                  {pageProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}

      {isSlider && (
        <ul className="projects-dots">
          {pages.map((_, index) => (
            <li key={index}>
              <button
                type="button"
                className={index === page ? 'active' : ''}
                aria-label={`Ir para o slide ${index + 1}`}
                onClick={() => setPage(index)}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Projects
