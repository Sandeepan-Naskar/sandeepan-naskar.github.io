// Create a standard React template jsx listing 2 internships and 1 reserahc project.
// 
// Path: mysite/src/components/Extra.js
import React from 'react';
import Particle from './Particle';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineDownload } from 'react-icons/ai';
import ppt from '../Assets/KSP Presentation.pptx';
import { useState } from 'react';
import img from '../Assets/Photos/quizzing/WhatsApp Image 2024-06-03 at 12.27.14.jpeg'
import Button from 'react-bootstrap/Button';

function Extra () {
    return (
        <Container className="app-container">
        <Particle />
    <Container className="main-content">
        <Row style={{paddingTop: "80px", paddingBottom: "40px", color: "white"}}>
            <div style={{display: "flex"}}>
            <span style={{fontSize: "1.85em", fontFamily: "Times New Roman, Times, serif", flex:1}}>Quizzing</span><br/><br/>

            </div>
            <p style={{textAlign:"left"}}>
            My journey in quizzing began when I participated in the <span className="purple">General Quiz GC</span> and came first in my Sophomore year which quickly turned into a passion. After a competitive audition process in my 3rd year, I was thrilled to be selected for the <span className="purple">Inter IIT team</span>, representing IIT Bombay at the Inter IIT Culturals held at IIT Madras that year. In my final year, I channeled my enthusiasm into organizing a <span className="purple">Quizzing 101 session</span>, introducing the exciting world of college quizzing to newcomers. My journey took me to <span className="purple">COEP, Pune</span>, where I participated in the prestigious <span className="purple">Visvesvaraya Memorial Quiz</span>. Additionally, I participated in a couple of weekly quiz gatherings with the <span className="purple">Bombay Quiz Club</span> at Rajyog, deepening my appreciation for the art of quizzing. <br/><br/>

            I organized the auditions for the <span className="purple">MELA Quiz</span> (Music, Entertainment, Literature, Arts) contingent, contributed in creating the set for the <span className="purple">Business Quiz</span> auditions as well as engaging in the overall quiz team selection for the next (and my last) Inter IIT Culturals held at IIT Kharagpur. Our team achieved remarkable progress compared to the previous year, advancing from just two finalists in Sports and SciBizTech Quiz to securing 3rd place overall in the <span className="purple">Quiz Cup</span>. We proudly brought home a <span className="purple">Gold in India Quiz</span>, a <span className="purple">Bronze in Sports Quiz</span>, and finalists in all six quiz genres. This success was a testament to our hard work and team spirit. <br/><br/>

            On campus, I organized and participated in engaging quizzing sessions during my final semester, fostering a sense of camaraderie and intellectual curiosity. I also had the pleasure of co-hosting a quiz at <span className="purple">Literarium</span>, the flagship event of The Literary Arts Club at IITB. Below are two of my quiz sets that I hosted during the Inter IIT Auditions and in Literarium respectively along with the quizzing contingent at this last inter IIT. Feel free to take a look at the sets and let me know how you did!
            </p>


        <div>
        <Row>
            <Col xs={12} md={4}>
            <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vS8xleBI2BeUcms9tQG_GfnpHIq4qGfDQu4og3Br2d1Og_fWqqCTqQdeZgKqzlzvCHkPh2rVcjxL53q/embed?start=false&loop=true&delayms=3000" frameborder="0" width="400" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
            </Col>
            <Col xs={12} md={4}>
            <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTSpaBXkHDfGFsP1tCQwAEMEBtVnwlLoYvjGTkLdg68QPUixe7VSpRLPuLRMhkOUvKB2yWytzxncP-R/embed?start=false&loop=true&delayms=3000" frameborder="0" width="400" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
            </Col>
            <Col xs={12} md={4}>
            <img src={img} alt="Quizzing" className="img-fluid" />            
            </Col>
        </Row>
            
            {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}

        </div>   
        </Row>
        <hr style={{color: "white"}} ></hr>
        <Row style={{paddingTop: "20px", paddingBottom: "40px", color: "white"}}>
            <div style={{display: "flex"}}>
            <span style={{fontSize: "1.85em", fontFamily: "Times New Roman, Times, serif", flex:1}}>Astronomy Club Activities, Summer Projects</span><br/><br/>

            </div>
            <p style={{textAlign:"left"}}>
    My fascination with astronomy began in childhood and only deepened during my college years. In my first year at <span className="purple">IIT Bombay</span>, I earned 2nd place in <span className="purple">Astromania</span>, an astronomy-themed quiz and the flagship event of <span className="purple">Krittika</span>, the astronomy club of IITB. This achievement motivated me to apply for the club, and I served as a team member in my second year. In this role, I managed the club's <span className="purple">social media presence</span>, created questions for the mini league, <span className="purple">Astro(mini)a</span>, and moderated the <span className="purple">summer projects</span> conducted by the club. <br/><br/>

    During my involvement with Krittika, I undertook several summer projects to deepen my knowledge and hands-on experience.<br/>
    In the summer of 2022, I worked on the <span className="purple">Stellar Flares</span> project, where I reviewed multiple research papers on Stellar Flare detection, background removal, and fitting algorithms. I worked with raw data from the <span className="purple">Solar X-ray Monitor (XSM)</span> onboard <span className="purple">Chandrayaan 2</span>, using observations from <span className="purple">GOES</span>, <span className="purple">SphinX</span>, and <span className="purple">NOAA</span> to develop a complete pipeline for the automatic detection of solar flares. This project required me to make the system robust against the variability of raw datasets and tune parameters for better detection results. 
    <Button
        variant="primary"
        href={ppt}
        target="_blank"
        style={{ marginLeft: "10px" }}
    >
        <AiOutlineDownload /> &nbsp;
        {"Download PPT"}
    </Button> &nbsp;&nbsp;
    <Button variant="primary" href="https://github.com/DEVANSH-DVJ/XSM-Analysis-KSP3.0" target="_blank">
        <BsGithub /> &nbsp;
        {"GitHub"}
    </Button>
    <br/>
    <br/>
    In the summer of 2021, I engaged in a project focused on the <span className="purple">Lane-Emden Equation</span>. I theoretically derived and interpreted the equation from the models of stellar structure. Using libraries such as <span className="purple">scipy</span>, <span className="purple">numpy</span>, and <span className="purple">matplotlib</span>, I obtained data points derived from Euler and Runge-Kutta methods to solve the differential equations. This allowed me to analytically estimate the best-fit scenario for a Main-Sequence star. &nbsp;
    <Button variant="primary" href="https://github.com/Sandeepan-Naskar/Lane-Emden-Equation" target="_blank">
        <BsGithub /> &nbsp;
        {"GitHub"}
    </Button> <br/><br/>

    Beyond structured projects, I attended numerous <span className="purple">stargazing sessions</span>, further fueling my passion for astronomy and broadening my understanding of the universe. My journey through these academic and extracurricular pursuits has solidified my commitment to exploring and understanding the cosmos.
</p>


        </Row>
        <hr style={{color: "white"}} ></hr>
        <Row style={{paddingTop: "20px", paddingBottom: "40px", color: "white" }}>
            <div style={{display: "flex"}}>
                <span style={{fontSize: "1.85em", fontFamily: "Times New Roman, Times, serif", flex:1}}>Hostel Sports Councillor</span>
            </div>
            <div className="purple" style={{fontFamily: "Times New Roman, Times, serif", flex:1}}>[October 2023 - May 2024]</div>
            <p style={{textAlign:"left"}}>
                During my tenure as the Hostel Sports Councillor, I assumed a pivotal role that involved meticulous management of a fund totaling <span className="purple">11 lakh rupees</span>, allocated for organizing various sports events within a hostel accommodating approximately <span className="purple">1400 students</span>. As the apex authority responsible for hostel-related sporting activities, I oversaw a team of secretaries and volunteers, ensuring smooth coordination and execution of diverse sporting initiatives. <br/><br/>

                In addition to administrative duties, I also helped enhance the overall security infrastructure of the hostel, implementing biometric access control measures to safeguard facilities. My responsibilities extended beyond internal hostel affairs to encompass the organization and facilitation of Institute-level sports events, commonly referred to as <span className="purple">General Championships</span> and hence, coordinating with the Institute Sports Secretaries and other hostel sports councillors was imperative. From promotional activities and team selections to the procurement of high-quality sporting equipment as well as appointment of captains, teams and prize distribution, I meticulously managed every aspect of these prestigious events. <br/><br/>

                Moreover, I spearheaded initiatives to transform an outdoor space into a functional <span className="purple">badminton court</span> along with populating the newly established hostel gym with the required equipments and ensuring its smooth functioning. Furthermore, I facilitated the telecasting of major sports events within the hostel lounge along with design and distribution of <span className="purple">sports jerseys</span>, fostering a sense of camaraderie and sportsmanship among residents.
                <br/><br/>
                Overall, I endeavored to create a vibrant sports culture within the hostel community, enriching the overall student experience. And when I wasn't occupied with my sports duties, you'd likely catch me shooting hoops on the basketball court, playing football, strategizing over a game of chess, or delivering killer shots on the table tennis and tennis courts. Sports is my passion, both on and off duty!
            </p>

        </Row>
        <hr style={{color: "white"}} ></hr>
        <Row style={{paddingTop: "20px", paddingBottom: "40px", color: "white"}}>
        <div style={{display: "flex"}}>
                <span style={{fontSize: "1.85em", fontFamily: "Times New Roman, Times, serif", flex:1}}>Some other stuff</span>
            </div>
            <p style={{textAlign:"left"}}>
    Alongside my primary endeavors, I've been involved in various enriching activities. During my 11th grade, I participated in the <span className="purple">Vijyoshi National Science Camp</span> at IISER, Kolkata, after securing the KVPY fellowship with an All India Rank of 165. In my second year at IITB, I mentored students through <span className="purple">Seasons of Code</span>, organized by the Web & Coding Club, where I taught the intricacies of Generative Adversarial Networks (GANs) in a course aptly named GANdalf. Back in middle school, I co-organized a student protest to protect the ecosystem of a local Bengaluru lake. More recently, I expanded my knowledge by attending a <span className="purple">Finance Bootcamp</span> hosted by the Finance Club at IITB.
</p>


        </Row>

    </Container>
    </Container>
    )
}

export default Extra;