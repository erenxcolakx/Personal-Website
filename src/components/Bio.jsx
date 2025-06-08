import '../App.css'
import useScrollAnimation from '../hooks/useScrollAnimation';

function Bio() {
  const [profileRef, profileVisible] = useScrollAnimation(0.2);
  const [titleRef, titleVisible] = useScrollAnimation(0.3);
  const [contentRef, contentVisible] = useScrollAnimation(0.2);
  return (
    <section id="bio" className="bio-section">
      <div className="container mx-auto px-4 py-20 my-20 text-center">
        <div 
          ref={profileRef}
          className={`profile-image-container ${profileVisible ? 'animate-in' : 'animate-out'}`}
        >
          <img
            className="profile-image"
            src="../images/Me.jpg"
            alt="Eren Çolak"
          />
          <div className="profile-ring"></div>
        </div>
        <h2 
          ref={titleRef}
          className={`bio-title ${titleVisible ? 'animate-in' : 'animate-out'}`}
        >
          Who am I ?
        </h2>
        <div 
          ref={contentRef}
          className={`bio-content ${contentVisible ? 'animate-in' : 'animate-out'}`}
        >
          <p className="bio-text">
            I was born in Bandırma district of Balıkesir in 2003. I have been
            using computers since I started primary school. I have been keen on
            astronomy since middle school also interested in photography &
            astrophotography. I studied high school at Bandırma Anatolian High
            School. I have interested in Software Development since the summer
            before university. I have been studying at Marmara University since
            2021 and I am developing myself in the field of{' '}
            <span className="highlight-text">Web Development</span>{' '}
            and{' '}
            <span className="highlight-text">AI.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Bio;
