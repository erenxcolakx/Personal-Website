import '../App.css';
import EducationItem from './EducationItem';

function Education() {
  return (
    <section className="gradient-background">
      <div className="container px-4 py-5" id="edu">
        <p
          className="center display-5 fw-bold bebas-font"
          style={{ fontSize: '4rem', color: 'white' }}
        >
          Education
        </p>
        <div className="row mt-3 p-5 row-cols-1 row-cols-lg-2 gap-5">
          <EducationItem
            imgSrc="../images/bal.png"
            imgAlt="Bandırma Anatolian Logo"
            title="Bandırma Anatolian High School (2017 - 2021)"
          />
          <EducationItem
            imgSrc="../images/Marmara_Üniversitesi_logo.png"
            imgAlt="Marmara University Logo"
            title="Marmara University / Computer Engineering (2021 - ?)"
          />
        </div>
      </div>
    </section>
  );
}

export default Education;
