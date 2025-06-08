import '../App.css';
import EducationItem from './EducationItem';

function Education() {
  return (
    <section className="gradient-background">
      <div className="container mx-auto px-4 py-20" id="edu">
        <p className="text-center text-6xl font-bebas text-white">
          Education
        </p>
        <div className="mt-12 p-20 grid grid-cols-1 lg:grid-cols-2 gap-20">
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
