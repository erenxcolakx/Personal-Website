import PropTypes from 'prop-types';
import useScrollAnimation from '../hooks/useScrollAnimation';

function ProjectItem({ href, imgSrc, alt, title, description, reverse, frameType }) {
  const [projectRef, projectVisible] = useScrollAnimation(0.2);
  return (
    <div 
      ref={projectRef}
      className={`container-fluid col-xxl-12 px-4 py-5 ${projectVisible ? 'animate-in' : 'animate-out'}`}
    >
      <div
        className={`row d-flex justify-content-lg-around justify-content-center align-items-center ${
          reverse ? 'flex-lg-row-reverse' : 'flex-lg-row'
        } project-row`}
        style={{ margin: 0, width: '100%' }}
        onClick={() => window.open(href, '_blank')}
      >
        <div className={`${frameType} justify-content-center col-12 col-lg-6`} style={{ height: '300px' }}>
          <img  src={imgSrc} className="img-fluid" alt={alt} />
        </div>

        <div className="col-lg-5 pt-4 project-content">
          <h1 className="project-title">
            {title}
          </h1>
          <p className="project-description">
            {description}
          </p>
          <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-link-button"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="project-link-indicator">
              <span>Click to visit</span>
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M7 17L17 7M17 7H7M17 7V17" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

ProjectItem.propTypes = {
  href: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
  frameType: PropTypes.string.isRequired,
};

export default ProjectItem;
