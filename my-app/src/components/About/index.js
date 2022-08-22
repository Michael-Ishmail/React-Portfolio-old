import React from "react";
import profileImage from "../../assets/large/Profile/Profile_Pic.png";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
              Hello! My name is Michael Ishmail and i am currently a Budget Analyst at Dentsu.
              I am learning how to code so that i can challenge myself and advance in my career.
              Currently, i am enrolled in a coding bootcamp at Michigan State University. Through
              this bootcamp, i am learning web development languages like HTML, CSS, and Javascript.
              I am also learning how to use node packages for javascript like React.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;