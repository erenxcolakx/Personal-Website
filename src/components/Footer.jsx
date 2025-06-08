import '../App.css';
import FooterLink from './FooterLink';

function Footer() {
  return (
    <section id="footer" className="modern-footer">
      <div className="container mx-auto text-center footer-content">
        <div className="footer-name-container">
          <h2 className="footer-name">Eren Çolak</h2>
          <div className="footer-tagline">Full Stack Developer & AI Enthusiast</div>
        </div>
        <div className="footer-links">
          <FooterLink
            href="https://www.linkedin.com/in/erenncolak/"
            imgSrc="../images/linkedin.png"
            alt="linkedin"
          />
          <FooterLink
            href="https://www.kaggle.com/erenncolak"
            imgSrc="../images/kaggle.png"
            alt="kaggle"
          />
          <FooterLink
            href="https://www.instagram.com/eren_colakk/"
            imgSrc="../images/instagram.png"
            alt="instagram"
          />
          <FooterLink
            href="https://github.com/erenxcolakx"
            imgSrc="../images/github.png"
            alt="github"
          />
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Eren Çolak. Built with passion and modern web technologies.</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
