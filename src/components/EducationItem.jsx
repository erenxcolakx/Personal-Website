import PropTypes from 'prop-types';

function EducationItem({ imgSrc, imgAlt, title }) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center text-xl">
        <img src={imgSrc} alt={imgAlt} className="w-[108px]" />
      </div>
      <div className="text-center p-3">
        <h3 className="text-2xl text-white">
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
