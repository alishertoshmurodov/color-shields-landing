import "./About.css";
import RedLineSVG from "../Shared/RedLineSVG";

function About() {
  return (
    <section className="about">
      <article>
        <h1>
          <RedLineSVG />
          About Color Shields
        </h1>
        <p>
          Color Shields is your trusted partner in creating stunning and
          functional epoxy and polyaspartic floors. We specialize in innovative
          flooring solutions, providing high quality, durability and aesthetic
          appeal.
          <br />
          <br />
          Our products are a unique combination of technology and design,
          allowing us to create customized coatings that meet the highest
          standards. Whether you need flooring for residential, commercial or
          industrial applications, we have solutions to meet your requirements.
        </p>
      </article>
    </section>
  );
}

export default About;
