import '../App.css'


function Bio() {
  return (
    <section id="bio">
      <div className="container mx-auto px-4 py-20 my-20 text-center">
        <img
          className="mx-auto mb-16 rounded-full w-[200px] h-[200px]"
          src="../images/Me.jpg"
          alt="Eren Çolak"
        />
        <p className="font-bebas text-6xl text-white mt-20">
          Who am I ?
        </p>
        <div className="max-w-4xl mx-auto">
          <p className="text-2xl font-opensans text-white my-20">
            I was born in Bandırma district of Balıkesir in 2003. I have been
            using computers since I started primary school. I have been keen on
            astronomy since middle school also interested in photography &
            astrophotography. I studied high school at Bandırma Anatolian High
            School. I have interested in Software Development since the summer
            before university. I have been studying at Marmara University since
            2021 and I am developing myself in the field of{' '}
            <span className="text-[rgb(135,61,255)]">Web Development</span>{' '}
            and{' '}
            <span className="text-[rgb(135,61,255)]">AI.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Bio;
