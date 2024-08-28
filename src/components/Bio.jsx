import '../App.css'


function Bio() {
  return (
    <section id="bio">
      <div className="container px-1 py-5 my-5 text-center">
        <img
          className="d-block mx-auto mb-4 rounded-circle"
          src="../images/Me.jpg"
          alt="Eren Çolak"
          width="200"
          height="200"
        />
        <p
          className="display-5 fw-bold mt-5 bebas-font"
          style={{ color: 'white', fontSize: '4rem' }}
        >
          Who am I ?
        </p>
        <div className="col-lg-10 mx-auto">
          <p
            className="lead my-5"
            style={{
              color: 'rgb(255, 255, 255)',
              fontFamily: "'Open Sans', sans-serif",
              fontSize: '1.5rem',
            }}
          >
            I was born in Bandırma district of Balıkesir in 2003. I have been
            using computers since I started primary school. I have been keen on
            astronomy since middle school also interested in photography &
            astrophotography. I studied high school at Bandırma Anatolian High
            School. I have interested in Software Development since the summer
            before university. I have been studying at Marmara University since
            2021 and I am developing myself in the field of{' '}
            <span style={{ color: 'rgb(135, 61, 255)' }}>Web Development</span>{' '}
            and{' '}
            <span style={{ color: 'rgb(135, 61, 255)' }}>AI.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Bio;
