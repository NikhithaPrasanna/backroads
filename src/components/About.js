import aboutImg from '../images/about.jpeg'
import Title from './Title'

const About = () => {
    return (
        <section className="section" id="about">
        <Title title = 'about' subTitle= 'us' />     

      <div className="section-center about-center">
        <div className="about-img">
          <img
            src={aboutImg}
            className="about-photo"
            alt="awesome beach"
          />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            The customer himself, the customer will be able to 
            pursue the adipiscing of the company. Is any one of these aspersed?
          </p>
          <p>
            The customer himself, the customer will be able to pursue the adipiscing of the company. It is roughened
            For any of these times I will explain the pains with a wise hatred
            whence pain?
          </p>
          <a href="#about" className="btn">read more</a>
        </article>
      </div>
    </section>
    )
}

export default About;
