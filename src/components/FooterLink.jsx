import PropTypes from 'prop-types';

function FooterLink({ href, imgSrc, alt }) {
  return (
    <a href={href} className="footer-social-link">
      <div className="footer-icon-container">
        <img src={imgSrc} alt={alt} className="footer-icon" />
      </div>
    </a>
  );
}

FooterLink.propTypes = {
  href: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default FooterLink;
