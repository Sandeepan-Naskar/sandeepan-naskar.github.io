// Create a standard React template jsx listing 2 internships and 1 reserahc project.
// 
// Path: mysite/src/components/Interns.js
import React from 'react';
import Particle from './Particle';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useState } from 'react';
import pdf from "../Assets/RnD_Project.pdf";
import Button from 'react-bootstrap/Button';
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import image1 from "../Assets/a.png";
import image2 from "../Assets/imageX.png";
import image3 from "../Assets/image (2).png";


function Interns () {
    const [isExpanded1, setIsExpanded1] = useState(false);
    const [isExpanded2, setIsExpanded2] = useState(false);
    const [isExpanded3, setIsExpanded3] = useState(false);

    const toggleExpand1 = () => {
        setIsExpanded1(!isExpanded1);
    };
    const toggleExpand2 = () => {
        setIsExpanded2(!isExpanded2);
    };
    const toggleExpand3 = () => {
        setIsExpanded3(!isExpanded3);
    };
    return (
        <Container className="app-container">
            <Particle />
        <Container className="main-content">
            <Row style={{paddingTop: "80px", color: "white" }}>
                <div style={{display: "flex"}}>
                <span style={{fontSize: "1.85em", fontFamily: "Times New Roman, Times, serif", flex:1}}>Research Project: <span className="purple">Cross Domain Image Captioning and Style Transfer</span></span>
                <Button variant="primary" onClick={toggleExpand2} style={{flex:0}}>
                    {isExpanded2 ? <div style={{width:"90px"}}>Show Less</div> : <div style={{width:"90px"}}>Show More</div>}
                </Button>
                </div>
                <p>
                        <strong className="purple">Guide:</strong> <i>Dr. Biplab Banerjee, Associate Professor, Indian Institute of Technology Bombay</i>
                        <br></br>
                        <span className="purple" style={{fontFamily: "Times New Roman, Times, serif"}}>[January 2024 - May 2024]</span>
                    </p>
                    {isExpanded2 && 
                    <div style={{textAlign:"left"}}>
                    <h2 style={{fontSize: "1.6em", fontFamily: "Times New Roman, Times, serif"}}><u>Objective</u>   </h2>
                    <p>The primary objective of this project is to enhance traditional <span className="purple">image captioning mechanisms</span> by integrating features from the <span className="purple">GPT-2 model</span>. Additionally, it aims to explore and implement advanced techniques for <span className="purple">image cross-styling</span> using neural networks, resulting in improved contextual relevance and human-like captions for images.</p>

                    <h2 style={{fontSize: "1.6em", fontFamily: "Times New Roman, Times, serif"}}><u>Summary of the Project</u>  </h2>

                    <h3 style={{fontSize: "1.4em", fontFamily: "Times New Roman, Times, serif"}}><strong>Introduction</strong></h3>
                    <p>This project explores advanced techniques in <span className="purple">image captioning</span> and <span className="purple">cross-styling</span>. By integrating <span className="purple">GPT-2 features</span> into traditional image captioning models, the project aims to generate more contextually relevant and human-like captions. Additionally, it investigates methods to apply different styles to images using state-of-the-art neural networks, enhancing the overall aesthetic and contextual quality of the generated captions.</p>

                    <h3 style={{fontSize: "1.4em", fontFamily: "Times New Roman, Times, serif"}}><strong>Papers Reviewed</strong></h3>
                    <p>The literature review covers several pivotal papers that lay the foundation for this project. These include "<span className="purple">Attention is All You Need</span>," which focuses on the Transformer model and its attention mechanism, and "<span className="purple">Multi-Modality Cross Attention Network for Image and Sentence Matching</span>," which explores aligning images with textual descriptions using cross-attention. Other significant papers include "<span className="purple">CAT: Cross Attention in Vision Transformer</span>," which discusses the use of cross-attention in vision transformers, and "<span className="purple">Deep Reinforcement Learning-Based Image Captioning with Embedding Reward</span>," which utilizes reinforcement learning for image captioning. Additionally, the review covers "<span className="purple">Bridging the Semantic Gap Between Image and Text</span>," which studies methods to reduce the semantic gap between visual and textual data, and "<span className="purple">SDEdit: Guided Image Synthesis and Editing</span>," which introduces an image synthesis and editing method using stochastic differential equations.</p>

                    <h3 style={{fontSize: "1.4em", fontFamily: "Times New Roman, Times, serif"}}><strong>Implementation</strong></h3>
                    <p>The implementation phase of the project is divided into three main components: <span className="purple">Image Captioning</span>, <span className="purple">Prompt Generation</span>, and <span className="purple">Stable Diffusion Generator</span>.</p>

                    <ul>
                    <li><strong><span className="purple">Image Captioning</span></strong></li>
                    <p>The project implemented an <span className="purple">image captioning mechanism</span> using a modified model architecture that incorporated features of the <span className="purple">GPT-2 model</span>. Traditional image captioning frameworks, which typically involve an encoder-decoder architecture, were adapted to integrate GPT-2’s capabilities. The process involved encoding images using a pre-trained convolutional neural network (CNN) to extract features and then incorporating these features into the decoder part of the model using various strategies. The model was trained and fine-tuned on a dataset of images with corresponding captions, optimizing the parameters to minimize the difference between predicted and ground truth captions. The performance was evaluated using <span className="purple">BLEU scores</span>, leveraging the strengths of both image processing and natural language understanding to generate more contextually relevant and human-like captions.</p>

                    <li><strong><span className="purple">Prompt Generation</span></strong></li>
                    <p>Captions for each image were stored in a directory and tokenized into styling prompts. A random shuffling function generated new prompts, which were then processed using a prompt-generator script to populate the style-prompt directory. These styled prompts, combined with the captions, were used in the Diffusion model to enhance the overall aesthetic quality of the images.</p>

                    <li><strong><span className="purple">Stable Diffusion Generator</span></strong></li>
                    <p>The project employed <span className="purple">SDEdit</span> (Stochastic Differential Editing) for guided image synthesis and editing. Input images were resized to ensure consistent dimensions across all inputs. The SDEdit process involved adding noise to the input images based on diffusion model parameters and iteratively denoising them through a stochastic differential equation. User guidance, in the form of styling prompts, was incorporated into the denoising process to enhance the realism and faithfulness to user input. This iterative process allowed for the generation of photo-realistic images, balancing realism and user guidance effectively.</p>
                    </ul>

                    {/* <h3 style={{fontSize: "1.4em", fontFamily: "Times New Roman, Times, serif"}}><strong>Experiments and Results</strong></h3>
                    <p>Experiments were conducted to test the implemented models and methods. The results demonstrated the effectiveness of the integrated approach, with the generated captions and styled images stored in the output-images directory. The project code was provided to ensure reproducibility and facilitate further research.</p> */}

                    <h3 style={{fontSize: "1.4em", fontFamily: "Times New Roman, Times, serif"}}><strong>Conclusion</strong></h3>
                    <p>This project successfully combined advanced techniques in <span className="purple">image processing</span> and <span className="purple">natural language processing</span> to enhance image captioning and cross-styling. By leveraging the capabilities of GPT-2 and SDEdit, the project achieved significant improvements in the contextual relevance and aesthetic quality of generated captions and images. The interdisciplinary approach and practical implementation provided valuable insights and hands-on experience in integrating complex neural network architectures for advanced image synthesis and captioning tasks.</p>
                    <Row>
                        <Col xs={12} md={4}><img src={image1} style={{ marginBottom: "10px" }} width="133%" className="img-fluid" alt="about" /></Col>
                        <Col xs={12} md={4}><img src={image2} style={{ marginBottom: "10px" }} width="133%" className="img-fluid" alt="about" /></Col>
                        <Col xs={12} md={4}><img src={image3} style={{ marginBottom: "10px" }} className="img-fluid" alt="about" /></Col>
                    </Row>
                    <br></br>
                    <br></br>
                    <Row>        
                    <Col style={{padding: "0px", width: "20px"}}>
                        <h2 style={{fontSize: "1.6em", fontFamily: "Times New Roman, Times, serif"}}><u>Skills Utilized</u>  </h2>

                        <ul>
                            <li><span className="purple">Machine Learning:</span> Deep Learning, Reinforcement Learning, Neural Networks</li>
                            <li><span className="purple">Natural Language Processing:</span> GPT-2, Language Models</li>
                            <li><span className="purple">Image Processing:</span> Convolutional Neural Networks, Diffusion Models</li>
                            <li><span className="purple">Programming:</span> Python, PyTorch, TensorFlow</li>
                            <li><span className="purple">Evaluation Metrics:</span> BLEU Score</li>
                        </ul>
                        <div style={{textAlign:"center"}}>
                        <Button variant="primary" href="https://github.com/Sandeepan-Naskar/Style-transfer-for-image-captioning" target="_blank">
                            <BsGithub /> &nbsp;
                            {"GitHub"}
                        </Button>
                        <Button
                            variant="primary"
                            href={pdf}
                            target="_blank"
                            style={{ marginLeft: "10px" }}
                        >
                            <CgWebsite /> &nbsp;
                            {"Download Report"}
                        </Button>
                        </div>
                    </Col>              
                    <Col style={{padding: "0px", width: "80%"}}>
                        <h2 style={{fontSize: "1.6em", fontFamily: "Times New Roman, Times, serif"}}><u>Learning/Take-Aways</u>  </h2>
                        <ul>
                            <li><span className="purple">Integration of Language and Vision Models:</span> Understanding the integration of NLP models like GPT-2 with image processing frameworks.</li>
                            <li><span className="purple">Advanced Image Synthesis Techniques:</span> Practical knowledge of SDEdit and its applications in guided image synthesis.</li>
                            <li><span className="purple">Hands-On Experience:</span> Practical skills in implementing and fine-tuning complex neural network architectures.</li>
                            <li><span className="purple">Cross-Domain Knowledge:</span> Insights into the interdisciplinary approach combining machine learning, natural language processing, and image processing.</li>
                        </ul>
                    </Col>
                    </Row>
                </div>}
            </Row>
            <hr style={{color: "white"}} ></hr>
            <Row style={{paddingTop: "20px", color: "white"}}>
                <div style={{display: "flex"}}>
                <span style={{fontSize: "1.85em", fontFamily: "Times New Roman, Times, serif", flex:1}}>Wells Fargo International Solutions PVT LTD - <span className="purple">Software Developer Intern</span></span>
                <Button variant="primary" onClick={toggleExpand1} style={{flex:0}}>
                    {isExpanded1 ? <div style={{width:"90px"}}>Show Less</div> : <div style={{width:"90px"}}>Show More</div>}
                </Button>
                </div>
                <p>
                    <strong className="purple">Supervisor(s):</strong> <i>Sushma Yaramalla, Engineering Manager, Wells Fargo</i><strong className="purple"> and </strong>
                            <i>Suman Malepati, Software Engineering Manager, Wells Fargo</i>
                    <br></br>
                    <span className="purple" style={{fontFamily: "Times New Roman, Times, serif"}}>[May 2023 - July 2023]</span>
                </p>
                {isExpanded1 &&       <div style={{textAlign: "left"}}>
                    <h2 style={{fontSize: "1.6em", fontFamily: "Times New Roman, Times, serif"}}><u>Objective</u></h2>
                    <p>The main objective of this project was to develop a <span className="purple">Virtual Credit Card (VCC) platform</span> at <span className="purple">Wells Fargo</span>, enabling users to create, manage, and utilize virtual credit cards linked to their parent credit cards issued by the bank. Users can set limits and expiry dates for these virtual cards, view transaction histories, and analyze their spending patterns. Additionally, the platform includes features for making payments using QR codes or receiver details, freezing or deleting VCCs, and unregistering parent credit cards. A comprehensive notification system using SMS and email was also developed to keep users informed about their VCC activities.</p>

                    <h2 style={{fontSize: "1.6em", fontFamily: "Times New Roman, Times, serif"}}><u>Development</u></h2>

                    <p>The project was implemented using a <span className="purple">React frontend</span> and an <span className="purple">H2 database</span>, with a microservices-based architecture to ensure scalability and maintainability. The platform's main components included:</p>

                    <ul>
                        <li><strong><span className="purple">Virtual Credit Card Management</span></strong></li>
                        <p>Users can create virtual credit cards by registering their parent credit cards and setting limits and expiry dates. The platform ensures that the limits and expiry dates of the VCCs are always less than those of the parent cards. Users can view the transaction history for each parent card and Virtual Credit Cards that are given to them linked to parent cards of other users as well as those created for other users linked to their parent cards. The transaction history is presented with graphical representations of spending patterns, providing users with insights into their spending behavior.</p>

                        <li><strong><span className="purple">Payment Features</span></strong></li>
                        <p>The platform includes a payment page that allows users to make payments by scanning QR codes or using receiver details. This feature enhances the convenience and security of online transactions. Additionally, users can freeze or delete their VCCs, as well as unregister their parent credit cards, providing them with full control over their virtual credit card management.</p>

                        <li><strong><span className="purple">Notification System</span></strong></li>
                        <p>A robust notification system was implemented to keep users informed about their VCC activities. Users receive real-time updates via SMS, email and a notifications section within the web-app itself for actions such as creating, freezing, deleting VCCs, and making payments. This system ensures that users are always aware of the status and activities related to their virtual credit cards.</p>
                    </ul>

                    <p>Development was managed using <span className="purple">JIRA stories</span> for task tracking. Biweekly meetings with supervisors provided a feedback loop for ongoing feature development, ensuring alignment with project goals and user requirements.</p>

                    <Row>        
                        <Col style={{padding: "0px", width: "20px"}}>
                    <h2 style={{fontSize: "1.6em", fontFamily: "Times New Roman, Times, serif"}}><u>Skills Utilized</u></h2>
                    <ul>
                        <li><span className="purple">Frontend Development:</span> React</li>
                        <li><span className="purple">Backend Development:</span> Microservices Architecture</li>
                        <li><span className="purple">Database Management:</span> H2 Database, MongoDB</li>
                        <li><span className="purple">Data Visualization:</span> Graphical representation of spending patterns</li>
                        <li><span className="purple">Notification Systems:</span> SMS and Email notifications</li>
                        <li><span className="purple">Security:</span> Credit card management and transaction security</li>
                        <li><span className="purple">Project Management:</span> JIRA </li>
                    </ul>
                    </Col>
                    <Col style={{padding: "0px", width: "20px"}}>
                    <h2 style={{fontSize: "1.6em", fontFamily: "Times New Roman, Times, serif"}}><u>Learning/Take-Aways</u></h2>
                    <ul>
                        
                        <li><span className="purple">Microservices Architecture:</span> Understanding the benefits and implementation of microservices over monolithic architecture.</li>
                        <li><span className="purple">Scalability:</span> Designing scalable systems capable of handling a growing user base and transitioning to MongoDB.</li>
                        <li><span className="purple">Full Stack Development:</span> Hands-on experience with both frontend and backend technologies.</li>
                        <li><span className="purple">Project Management:</span> Effective use of JIRA for task management and biweekly feedback loops.</li>
    
                    </ul>
                    </Col>
                    </Row>
                </div>}
            </Row>
            <hr style={{color: "white"}} ></hr>
            <Row style={{paddingTop: "20px", paddingBottom: "40px", color: "white"}}>
                <div style={{display: "flex"}}>
                <span style={{fontSize: "1.85em", fontFamily: "Times New Roman, Times, serif", flex:1}}>HARTING India Corporate - <span className="purple">Junior Research Assistant</span></span>
                <Button variant="primary" onClick={toggleExpand3} style={{flex:0}}>
                    {isExpanded3 ? <div style={{width:"90px"}}>Show Less</div> : <div style={{width:"90px"}}>Show More</div>}
                </Button>
                </div>
                <p>
                    <strong className="purple">Supervisor:</strong> <i>Suhas K, Senior Key Expert, Harting</i> <br></br>
                    <span className="purple" style={{fontFamily: "Times New Roman, Times, serif"}}>[June 2022 - July 2022]</span>
                </p>
                {isExpanded3 && <div style={{textAlign:"left"}}>
                <h2 style={{fontSize: "1.6em", fontFamily: "Times New Roman, Times, serif"}}><u>Objective</u></h2>
    <p>During my internship at <span className="purple">Harting</span>, I aided in the development of a sophisticated <span className="purple">Knowledge Management System (KMS)</span> as a cutting-edge web application by developing its initial pilot MVP. The primary goal was to establish a centralized platform for managing the company's intern knowledge and evaluation system, ensuring seamless collaboration and knowledge transfer among team members with varying roles and responsibilities.</p>
    
    <h2 style={{fontSize: "1.6em", fontFamily: "Times New Roman, Times, serif"}}><u>Development</u></h2>
    <p>My pivotal role in the internship involved orchestrating the development of an innovative web-based platform using the robust <span className="purple">Django</span> framework and <span className="purple">PostgreSQL</span> database management system. This platform served as the cornerstone of the company's intern knowledge and evaluation system, facilitating seamless interaction and collaboration among interns and mentors.</p>
    <p>The KMS system boasted advanced features, including the creation, sharing, and management of knowledge and information pertinent to internship project tasks. Leveraging my expertise in <span className="purple">Spacy</span> and <span className="purple">NLTK</span>, I integrated automatic question and answer generation capabilities, laying the groundwork for future implementation of an AI-powered chatbot for enhanced knowledge dissemination.</p>
    <Row>        
                        <Col style={{padding: "0px", width: "20px"}}>
    <h2 style={{fontSize: "1.6em", fontFamily: "Times New Roman, Times, serif"}}><u>Skills Utilized</u></h2>
    <ul>
        <li><span className="purple">Web Development:</span> Proficiency in Django for creating robust and scalable web applications.</li>
        <li><span className="purple">Database Management:</span> Expertise in PostgreSQL for efficient data storage and retrieval.</li>
        <li><span className="purple">Natural Language Processing (NLP):</span> Application of Spacy and NLTK for text analysis and generation.</li>
        <li><span className="purple">Project Management:</span> Leadership in developing features based on user roles and access control.</li>
    </ul>
    </Col>
                        <Col style={{padding: "0px", width: "20px"}}>
                    <h2 style={{fontSize: "1.6em", fontFamily: "Times New Roman, Times, serif"}}><u>Learning/Take-Aways</u></h2>
    <ul>
        <li><span className="purple">Strategic Development:</span> Acquired insights into architecting sophisticated web platforms to meet organizational needs.</li>
        <li><span className="purple">Innovative Problem-Solving:</span> Cultivated a solutions-oriented mindset in addressing complex challenges in web application development.</li>
        <li><span className="purple">Technological Proficiency:</span> Enhanced proficiency in utilizing cutting-edge technologies, particularly in NLP and database management.</li>
        <li><span className="purple">Leadership Skills:</span> Honed leadership abilities through effective project management and collaboration with cross-functional teams.</li>
    </ul>
    </Col>
    </Row>
</div>}
            </Row>
        </Container>
        </Container>
    )
}

export default Interns;