import PropTypes from 'prop-types';

function FooterLink({ href, imgSrc, alt }) {
  return (
    <div>
      <a href={href}>
        <img src={imgSrc} alt={alt} className="w-8 h-8" />
      </a>
    </div>
  );
}

FooterLink.propTypes = {
  href: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default FooterLink;
