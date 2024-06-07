import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" , fontSize: "0.8em"}}>   
          Hello! I'm Sandeepan, an <span className="purple">IIT Bombay graduate</span> from the <span className="purple">Class of 2024</span> with a <span className="purple">Bachelor's degree in Computer Science & Engineering</span>, with <span className="purple">Honors</span> and a <span className="purple">Minor in Artificial Intelligence and Data Science</span>.
          <br/><br/>

          Currently, I'm a <span className="purple">software developer</span> at <span className="purple">Wells Fargo</span>, where I tackle coding challenges, often with my favorite tunes playing in the background. My experience covers various domains, including <span className="purple">full stack development</span>, <span className="purple">image processing</span>, <span className="purple">reinforcement learning</span>, and <span className="purple">deep learning</span>.
          <br/><br/>

          Beyond software development, I'm passionate about <span className="purple">data-driven and observational astronomy</span>, having undertaken several projects to delve into the complexities of the universe. This interest fuels my ongoing learning in this fascinating field.
          <br/><br/>

          In college, I was an avid <span className="purple">quizzer</span>, actively participating in and contributing to the <span className="purple">Inter IIT contingent</span>. Quizzing sharpened my knowledge across various subjects and honed my analytical skills. I also have a growing interest in the <span className="purple">finance and quant industry</span>, constantly exploring how technology can innovate and drive efficiency.
          <br/><br/>

          I firmly believe in maintaining a work-life balance. As much as I enjoy my professional pursuits, I find it equally, if not more, important to challenge myself creatively and indulge in healthy distractions. This dynamic keeps me motivated and fresh.
          <br/><br/>

          Outside of work and academics, I'm always eager to dive into new technologies, hobbies, or complex problems. I thrive on the excitement of discovery and learning. Feel free to reach out to discuss potential opportunities or share our passions for innovation!
          </p>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
