import PropTypes from 'prop-types';

function FooterLink({ href, imgSrc, alt }) {
  return (
    <div className="col">
      <a href={href}>
        <img src={imgSrc} alt={alt} width="32" height="32" />
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
