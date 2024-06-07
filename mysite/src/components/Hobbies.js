// Create a standard React template jsx listing 2 internships and 1 reserahc project.
// 
// Path: mysite/src/components/Hobbies.js
import React from 'react';
import Particle from './Particle';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Gallery from 'react-photo-gallery';

// Import all images from the assets folder
const importAll = (r) => r.keys().map(r);
const sketch_images = importAll(require.context('../Assets/sketch', false, /\.(png|jpe?g|svg)$/));

function Hobbies () {
    const [sketchPhotos, setSketchPhotos] = useState([]);

    useEffect(() => {
        const loadSketchImages = async () => {
            const promises = sketch_images.map((src) => {
                return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = src;
                img.onload = () => {
                    console.log(`Loaded: ${src}`);
                    resolve({
                    src,
                    width: img.width,
                    height: img.height,
                    });
                };
                img.onerror = (error) => {
                    console.error(`Error loading image: ${src}`, error);
                    // In case of an error, provide default dimensions
                    resolve({
                    src,
                    width: 1,
                    height: 1,
                    });
                };
                });
            });

            const loadedPhotos = await Promise.all(promises);
            setSketchPhotos(loadedPhotos);
        };

        loadSketchImages();
    }, []);
    
    return (
        <Container className="app-container">
            <Particle />
        <Container className="main-content">
            <Row style={{paddingTop: "80px", paddingBottom: "30px", color: "white" }}>
                <Col>
            <Row>
                <div style={{display: "flex"}}>
                <span style={{fontSize: "1.85em", fontFamily: "Times New Roman, Times, serif", flex:1}}><b>Chess</b></span>
                </div>
                { <div>
                <p style={{textAlign:"left"}}>
                    I've been passionate about chess for as long as I can remember, and it became a serious pursuit during my third year. If you're up for a game, you can check out my profiles on <a href="https://www.chess.com/member/bajrangdal69" target="_blank">chess.com</a> and <a href="https://lichess.org/@/Bajrangdal" target="_blank">lichess.org</a>. My peak rating is around <span class="purple">1410</span> across Bullet, Blitz, and Rapid on lichess. I also frequently participate in Swiss tournaments on lichess. Below is a highlight of one of my higher-rated wins where I executed a queen sacrifice.
                </p>

                <iframe src="https://lichess.org/embed/game/XZ5bFXuF?theme=auto&bg=auto#19" width="600" height="340" frameborder="0"></iframe>
                </div>}
                </Row>
                <br/> 
            <Row>
            <div style={{display: "flex"}}>
                <span style={{fontSize: "1.85em", fontFamily: "Times New Roman, Times, serif", flex:1}}><b>And some other things</b></span>
                </div>
                <p style={{textAlign:"left"}}>

            <ul>
                <li>I have 7 years of experience in <span class="purple">karate</span>, holding a brown belt, and have won gold at the state level and bronze in national competitions.</li>
                <li>With 2 years of experience playing the <span class="purple">keyboard</span>, I enjoy it despite getting a bit rusty since not having picked it up for a while.</li>
                <li>I am a big <span class="purple">film buff</span> and there are hundreds I can recommend; and although I haven't watched a lot of series, <span class="purple">"Game of Thrones"</span> and <span class="purple">"Better Call Saul"</span> are some of the best I've ever seen. In music, I love <span class="purple">Dream Pop, Indie Rock</span> and some <span class="purple">slow Bollywood tunes</span>. Recently, I've taken up reading and started working out regularly as well.</li>
            </ul>
</p>

            </Row>
                </Col>
                <Col>
                <div style={{display: "flex"}}>
                <span style={{fontSize: "1.85em", fontFamily: "Times New Roman, Times, serif", flex:1}}><b>Sketching</b></span>
                
                </div>
                { <div>
                    <p style={{textAlign:"left"}}>
    I often find myself picking up a pen or pencil and sketching whatever catches my eye—whether it's a friend's face, the room around me, or random ideas that pop into my head. While I wouldn't call myself a professional artist, sketching is something I genuinely enjoy. Below are a few of my sketches.
</p>

                    {sketchPhotos.length > 0 ? (
            <Gallery photos={sketchPhotos} style={{zIndex: 5}} />
        ) : (
            <p>Loading photos...</p>
        )}
                </div>}
            </Col>
            </Row>
        </Container>
        </Container>
    )
}

export default Hobbies;