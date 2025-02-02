import PropTypes from 'prop-types';

function SkillItem({ imgSrc, alt, name }) {
  return (
    <div className="flex flex-col items-center w-[100px]">
      <img src={imgSrc} alt={alt} className="h-[52px]" />
      <p className="text-white mt-2 text-center">{name}</p>
    </div>
  );
}

SkillItem.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SkillItem;
