import "../../../App.css";
import HeaderContent from "../../HeaderContent/HeaderContent";
import BodyContent from "../../BodyContent/BodyContent";
import FooterContent from "../../FooterContent/FooterContent";
import "./About.css";
import TeamImage from "../../../assets/pic16.jpg"; // Ensure this image exists

function About() {
  return (
    <>
      <HeaderContent />

      <div className="About-container">

      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay">
          <h1>About Us</h1>
          <p>Discover our journey and what makes us unique.</p>
        </div>
      </section>

      {/* Main Content */}
      <BodyContent>
        <div className="about-container">
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              We are a team of passionate developers, designers, and innovators
              committed to creating the best digital experiences.
            </p>
            <p>
              Our mission is to deliver high-quality solutions that help
              businesses and individuals achieve their goals.
            </p>
          </div>

          <div className="about-image">
            <img src={TeamImage} alt="Our Team" />
          </div>
        </div>
      </BodyContent>

      <FooterContent />

      </div>
    </>
  );
}

export default About;
