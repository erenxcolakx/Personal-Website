import PropTypes from 'prop-types';

function ProjectItem({ href, imgSrc, alt, title, description, reverse, frameType }) {
  const isGif = imgSrc.toLowerCase().endsWith('.gif');
  
  return (
    <div className="container px-4 py-5 mx-auto">
      <div className={`flex flex-col lg:flex-row ${reverse ? 'lg:flex-row-reverse' : ''} justify-around items-center`}>
        <div className={`${
          frameType === 'framehorizontal' ? 'w-[500px] h-[250px]' : 'w-[500px] h-[200px]'
        } rounded-lg overflow-hidden relative group`}>
          <a href={href}>
            <img 
              src={imgSrc} 
              className={`w-full absolute top-0 left-0 ${
                !isGif && 'transition-all duration-[3000ms] ease-in-out group-hover:-translate-y-[calc(100%-250px)]'
              }`}
              alt={alt} 
              style={{ height: 'auto', minHeight: '100%' }}
            />
          </a>
        </div>

        <div className="lg:w-5/12 pt-4">
          <h1 className="text-4xl font-bold font-bebas text-white mb-3">
            {title}
          </h1>
          <p className="text-xl font-opensans text-gray-100">
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
