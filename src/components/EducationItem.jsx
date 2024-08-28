import PropTypes from 'prop-types';

function EducationItem({ imgSrc, imgAlt, title }) {
  return (
    <div className="row d-flex">
      <div className="d-flex align-items-center justify-content-center fs-4">
        <img src={imgSrc} alt={imgAlt} width="108" />
      </div>
      <div className="center p-3">
        <h3 className="fs-2" style={{ color: 'white' }}>
          {title}
        </h3>
      </div>
    </div>
  );
}

EducationItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default EducationItem;
