import '../App.css';
import FooterLink from './FooterLink';

function Footer() {
  return (
    <section id="footer">
      <div className="container mx-auto text-center">
        <div>
          <p className="font-bebas text-5xl pt-4">Eren Çolak</p>
        </div>
        <div className="flex justify-center gap-20 mt-8">
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
