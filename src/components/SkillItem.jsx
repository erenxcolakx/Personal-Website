import PropTypes from 'prop-types';

function SkillItem({ imgSrc, alt, name }) {
  return (
    <div className="d-flex flex-column align-items-center" style={{width:'100px'}}>
      <img src={imgSrc} alt={alt} className='text-center' height="52px" />
      <p className="text-light mt-2 text-center">{name}</p>
    </div>
  );
}

SkillItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SkillItem;
