import PropTypes from 'prop-types';

function SkillItem({ imgSrc, alt, name, index, isVisible }) {
  const animationDelay = index * 0.1;

  return (
    <div 
      className={`skill-item ${isVisible ? 'animate-in' : 'animate-out'}`}
      style={{ 
        animationDelay: isVisible ? `${animationDelay}s` : '0s' 
      }}
    >
      <div className="skill-icon-container">
        <img src={imgSrc} alt={alt} className="skill-icon" />
      </div>
      <p className="skill-name">{name}</p>
    </div>
  );
}

SkillItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default SkillItem;
