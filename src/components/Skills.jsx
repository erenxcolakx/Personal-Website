import '../App.css'
import SkillItem from './SkillItem.jsx';
const skills = [
  { imgSrc: '../images/python.png', alt: 'python', name: 'Python' },
  { imgSrc: '../images/numpy.png', alt: 'numpy', name: 'Numpy' },
  { imgSrc: '../images/pandas.png', alt: 'pandas', name: 'Pandas' },
  { imgSrc: '../images/seaborn.png', alt: 'seaborn', name: 'Seaborn' },
  { imgSrc: '../images/matplot.png', alt: 'matplot', name: 'Matplot' },
  { imgSrc: '../images/clang.png', alt: 'c', name: 'C' },
  { imgSrc: '../images/java.png', alt: 'java', name: 'Java' },
  { imgSrc: '../images/js.png', alt: 'javascript', name: 'Javascript' },
  { imgSrc: '../images/html.png', alt: 'html5', name: 'HTML5' },
  { imgSrc: '../images/css.png', alt: 'css3', name: 'CSS3' },
  { imgSrc: '../images/bootstrap.png', alt: 'bootstrap', name: 'Bootstrap' },
  { imgSrc: '../images/jquery.png', alt: 'jquery', name: 'jQuery' },
  { imgSrc: '../images/node.png', alt: 'node.js', name: 'Node.js' },
  { imgSrc: '../images/express.png', alt: 'express.js', name: 'Express.js' },
  { imgSrc: '../images/postgresql.png', alt: 'postgresql', name: 'PostgreSQL' },
  { imgSrc: '../images/react.webp', alt: 'react', name: 'React.js' },
  { imgSrc: '../images/nextjs.png', alt: 'nextjs', name: 'Next.js' },
  { imgSrc: '../images/docker.webp', alt: 'docker', name: 'Docker' },
];

function Skills() {
  return (
    <section id="skills">
      <div className="d-flex justify-content-center px-4 py-5">
        <p
          className="center display-5 fw-bold bebas-font"
          style={{ fontSize: '4rem', color: 'white' }}
        >
          Tech Stack
        </p>
      </div>
      <div className="container mb-5">
        <div className="d-flex flex-wrap gap-5 gap-lg-0 justify-content-evenly align-items-center">
          {skills.map((skill) => (
            <SkillItem
              key={skill.name}
              imgSrc={skill.imgSrc}
              alt={skill.alt}
              name={skill.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
