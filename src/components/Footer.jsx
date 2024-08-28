import '../App.css';
import FooterLink from './FooterLink';

function Footer() {
  return (
    <section id="footer">
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <p className="namefooter mt-4 bebas-font">Eren Çolak</p>
          </div>
        </div>
        <div className="row row-cols-auto gx-5 justify-content-center">
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
      </div>
    </section>
  );
}

export default Footer;
