import PropTypes from 'prop-types';

function ProjectItem({ href, imgSrc, alt, title, description, reverse, frameType }) {
  return (
    <div className="container col-xxl-12 px-4 py-5 g-5">
      <div
        className={`row d-flex justify-content-lg-around justify-content-start align-items-center ${
          reverse ? 'flex-lg-row-reverse' : 'flex-lg-row'
        }`}
      >
        <div className={`${frameType} justify-content-center col-12 col-lg-6`} style={{ height: '300px' }}>
            <a href={href}>
              <img  src={imgSrc} className="img-fluid" alt={alt} />
            </a>
        </div>

        <div className="col-lg-5 pt-4">
          <h1
            className="display-5 fw-bold lh-1 mb-3 bebas-font"
            style={{ color: 'white' }}
          >
            {title}
          </h1>
          <p
            className="lead open-sans-font"
            style={{ color: 'azure', fontSize: '1.5rem' }}
          >
            {description}
          </p>
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
