import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fractal from "../../Assets/mandel_zoom_08_satellite_antenna.png";
import moodle from "../../Assets/dashboard_full.png";
import knn from "../../Assets/knn.png";
import lyrae from "../../Assets/airmass-hourly.jpeg";
import brain from "../../Assets/brain.png";
import omp from "../../Assets/omp.png";
import aml from "../../Assets/aml.png";
import output from "../../Assets/output.png";
import ma4 from "../../Assets/ma4.png";
import p2p from "../../Assets/p2p.png";
import rushhour from "../../Assets/rushhour.png";
import lane from "../../Assets/lane.png";
import android from "../../Assets/android.jpg";
import dh from "../../Assets/DH302_report.pdf";
import AML from "../../Assets/AML_report.pdf";
import stock from "../../Assets/Stock_Market_Prediction.pdf";
import astro from "../../Assets/AstroProjectReport.pdf";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{marginTop:"-70px", fontFamily: "Times New Roman, Times, serif"}}>
          <strong className="purple">Key </strong> Projects
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={knn}
              isBlog={false}
              title="Homomorphic Encryption Scheme for Secure kNN Computation"
              description="A Homomorphic Encryption Scheme was developed for secure kNN computation, enhancing robustness against untrusted query users by incorporating a Cloud Service Provider between the Data Owner and Query User. The scheme's performance was compared with the existing Asymmetric Scalar-Product-Preserving Encryption (ASPE) scheme."
              ghLink="https://github.com/Sandeepan-Naskar/Homomorphic-Encryption-of-the-kNN-algorithm"
              paperLink="https://dl.acm.org/doi/abs/10.1007/978-3-031-49099-6_12"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moodle}
              isBlog={false}
              title="Modular Object-Oriented Dynamic Learning Environment (Moodle)"
              description="A learning platform was developed with Django and PostgreSQL, offering user roles such as Instructor, Student, and Teaching Assistant, each with unique access levels. It included features like login-signup, assignment management, course registration, bulk grading, and automatic evaluation. Additional functionalities like a chat server, announcements section, and remote access via a terminal package were also integrated."
              ghLink="https://github.com/thevaliantthird/Float-Moodle"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lyrae}
              isBlog={false}
              title="Parameter Estimation of an RR Lyrae Variable"
              description="Queried Vizier and used SExtractor to select the source star UZ UMa, an RR Lyrae (RRab) Variable. Performed PSF photometry on the image data with zero-point corrections and fit the Luminosity vs Period data to various signal functions: Sawtooth, Periodic Gaussian, and Sinusoidal. Calculated the related parameters, including Distance, Temperature, and Period, within a 10% error margin."
              ghLink="https://github.com/Sandeepan-Naskar/RR-Lyrae"
              reportLink={astro}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={omp}
              isBlog={false}
              title="Analysis of Orthogonal Pursuit Matching Implementations"
              description="This project delves into the Naive OMP algorithm and various other methods for estimating sparse signals. We compare these methods based on metrics like time taken and margin of error. Approaches include QR and Cholesky matrix decomposition, Matrix Inversion Lemma, and Matrix Inversion Bypass."
              ghLink="https://github.com/ojaswijain/CS754_Project"
              paperLink="https://www.semanticscholar.org/paper/Comparison-of-orthogonal-matching-pursuit-Sturm-Christensen/6d5334f0f85592c4ebc200466fa84e9c16fcef6b?p2df"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={brain}
              isBlog={false}
              title="One-Shot GAN for Brain MRI Generation"
              description="Implemented Vanilla GAN and DCGAN to expand the Brain MRI dataset for improved tumor prediction. Modified the architecture to One-Shot GAN, incorporating an Adversarial Loss Function with Diversity Regularization. This enhancement significantly improved validation results on the confusion matrix using a ResNet152V2 model."
              ghLink="https://github.com/Sandeepan-Naskar/One-Shot-GAN-for-Medical-Image-Generation"
              reportLink={dh}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aml}
              isBlog={false}
              title="Watermarking Diffusion Models"
              description="Implemented the tree-ring watermarking technique with DCT transformation for enhanced structural similarity compared to FFT. Conducted a comparative analysis between FFT and DCT transforms, measuring LPIPS and SSIM metrics to assess image quality preservation."
              ghLink="https://github.com/Harsh-Sensei/Watermarking-diffusion-models"
              reportLink={AML}
            />
          </Col>

        </Row>
        
        <hr style={{ color: "white" }}/>

        <h1 className="project-heading" style={{fontFamily: "Times New Roman, Times, serif"}}>
          <strong className="purple">Other </strong> Projects
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={output}
              isBlog={false}
              title="Image Segmentation using Single Layer Perceptron"
              description="This project focuses on the implementation of a single layer perceptron classifier. A comparitive analysis is performed by a nonlinear transformation of the input data before being fed into the perceptron and the results are compared. This analysis aims to evaluate the effectiveness of polynomial transformation in enhancing the classification performance of the single layer perceptron model with respect to satellite image segmentation."
              ghLink=""
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ma4}
              isBlog={false}
              title="Stock Analysis and Prediction - LSTM Model"
              description="In this project, we examined the stock market using basic models and the Long Short Term Memory (LSTM) method for predicting future stock prices, along with conducting various experiments. We tackled several questions, such as analyzing changes in stock price over time, daily stock return averages, and moving averages of different stocks. To address these questions, we utilized a range of models, starting from Linear Regression, moving to a Feedforward Neural Network, and ultimately implementing an LSTM Recurrent Neural Network."
              ghLink="https://github.com/ojaswijain/CS337-Project"
              reportLink={stock}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fractal}
              isBlog={false}
              title="Mandelbrot Set Zoom"
              description="The project involved implementing the Mandelbrot fractal using mathematical algorithms and optimized escape time techniques. Leveraging the C++ graphics library SFML, it dynamically showcased the fractal's intricate patterns and self-similarity properties. Threading was utilized for optimization, enhancing performance and responsiveness during zoom functionality."
              ghLink="https://github.com/Sandeepan-Naskar/MandelBrot"
            />
          </Col>
          
        <Col md={3} className="project-card">
            <ProjectCard
              imgPath={rushhour}
              isBlog={false}
              title="Rush Hour Puzzle Solver"
              description="Simulated the classical board game Rush Hour, which involves navigating a car in a parking lot maze, as a SAT problem. Constructed relevant Clauses and solved for SAT using Conflict Driven Clause Learning (CDCL) with the Python library Z3py."
              ghLink=""
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={p2p}
              isBlog={false}
              title="Peer-to-Peer File Sharing System"
              description="A local P2P file transfer system was developed in C++ to facilitate searching and downloading files over specified network topologies. The system employed TCP socket programming and polling to establish connections between clients. It utilized the BFS algorithm to search for files up to a depth of 2 and verified file transfers using MD5 hashing to ensure data integrity."
              ghLink="https://github.com/Sandeepan-Naskar/CS-252-Project"
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={lane}
              isBlog={false}
              title="Lane-Emden Equation"
              description="Theoretically derived and interpreted the Lane-Emden equation from equations modeling a star's structure. Utilized scipy, numpy, and matplotlib to obtain possible data points derived from Euler and Runge-Kutta methods for solving the final differential equations. Analytically estimated the best-fit scenario for a Main-Sequence star."
              ghLink="https://github.com/Sandeepan-Naskar/Lane-Emden-Equation"
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={android}
              isBlog={false}
              title="Study Planner - Android Application"
              description="Developed a study planner application using Android Studio and integrated SQLite for efficient database management. Implemented a side navigation bar to facilitate quick access to various features. Incorporated calendar functionality to enable dynamic addition, deletion, and display of study plans, lecture schedules, exam dates, and assignment deadlines."
              ghLink="https://github.com/Sandeepan-Naskar/Android"
            />
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default Projects;
