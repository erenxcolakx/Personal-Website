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
  { imgSrc: '../images/tailwind.png', alt: 'tailwind', name: 'Tailwind' },
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
    <div className="container mx-auto px-4 py-20">
      <div className="text-center">
        <p className="text-6xl font-bebas text-white mb-20">
          Skills
        </p>
        <div className="flex flex-wrap justify-center gap-10">
          {skills.map((skill, index) => (
            <SkillItem
              key={index}
              imgSrc={skill.imgSrc}
              alt={skill.alt}
              name={skill.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
