import '../App.css'
import ProjectItem from './ProjectItem'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Projects() {
  return (
    <section id="Projects" className="gradient-background">
      <p className="center display-5 fw-bold pt-5 bebas-font" style={{ fontSize: '4rem', color: 'white' }}>Projects</p>
      <p className="center fw-light open-sans-font" style={{ color: 'rgb(231, 231, 231)' }}>Click images to go to site.</p>

      <ProjectItem
        href="https://erenxcolakx.github.io/HTML-CSS-JS-Projects/WebDesignAgency_ResponsiveCSSProject/index.html"
        imgSrc="../images/devcom.png"
        alt="dev.com"
        title="CSS Responsive Design Agency Site"
        description="First Responsive Design Exercise of Angela Yu's Web Dev Bootcamp. It was used media queries to make responsive. Also used float and flexbox."
        reverse={true}
        frameType="framehorizontal"
      />

      <ProjectItem
        href="https://erenxcolakx.github.io/HTML-CSS-JS-Projects/Bootstrap%20Components%20Exercise/index.html"
        imgSrc="../images/moveit.png"
        alt="Moveit"
        title="Moveit Bootstrap"
        description="Bootstrap Exercise Project from Angela Yu's Web Dev Bootcamp. Some Bootstrap components used. Navbar - Footer - Features - Carousel etc."
        reverse={false}
        frameType="framevertical"
      />

      <ProjectItem
        href="https://erenxcolakx.github.io/HTML-CSS-JS-Projects/TinDog%20Project/index.html"
        imgSrc="../images/tindog.png"
        alt="dev.com"
        title="Tindog Bootstrap"
        description="Bootstrap Exercise Project from Angela Yu's Web Dev Bootcamp. Bootstrap Snippets Used like Heroes - Features - Pricing - Footer etc."
        reverse={true}
        frameType="framevertical"
      />

      <ProjectItem
        href="https://erenxcolakx.github.io/HTML-CSS-JS-Projects/PianoSite/index.html"
        imgSrc="../images/piano.png"
        alt="Virtual Piano"
        title="Virtual Piano"
        description="I used DOM and Javascript to create a virtual piano."
        reverse={false}
        frameType="framehorizontal"
      />

      <ProjectItem
        href="https://liweather.vercel.app"
        imgSrc="../images/weather.gif"
        alt="weather app"
        title="LiWeatherApp"
        description="Capstone Project of API Part from Angela Yu's Web Dev Bootcamp. Node.js - Express.js - Axios - Bootstrap - JavaScript - Open-Meteo API - React.js - Docker were used. LiWeather app provide current and 14-day weather forecast by the given city name."
        reverse={true}
        frameType="framehorizontal"
      />

      <ProjectItem
        href="https://bweet.vercel.app"
        imgSrc="../images/bweet.png"
        alt="Bweet App"
        title="Bweet - Book Tracking Platform"
        description="A comprehensive book tracking application where users can create personal book lists, get reading recommendations, and share book reviews with the community. Built with modern web technologies for seamless book discovery experience."
        reverse={false}
        frameType="framevertical"
      />

      <ProjectItem
        href="https://dreamerapp.vercel.app"
        imgSrc="../images/dreamer.png"
        alt="Dreamer App"
        title="DreamerApp - AI Dream Interpreter"
        description="An innovative AI-powered application that interprets your dreams with artificial intelligence and discovers the messages of your subconscious. Tell your dreams and get intelligent interpretations through advanced AI technology."
        reverse={true}
        frameType="framehorizontal"
      />

      <ProjectItem
        href="https://smart-test-ai.vercel.app"
        imgSrc="../images/smarttestai.png"
        alt="Smart Test AI"
        title="Smart Test AI - Intelligent Quiz Creator"
        description="An intelligent quiz creation platform that makes learning more effective with modern artificial intelligence technology. Transform your documents into interactive quizzes in seconds and accelerate your learning experience."
        reverse={false}
        frameType="framevertical"
      />

    </section>
  );
}

export default Projects;
