import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Gallery from 'react-photo-gallery';
import Particle from './Particle';

// Import all images from the assets folder
const importAll = (r) => r.keys().map(r);
const college_images = importAll(require.context('../Assets/Photos/college', false, /\.(png|jpe?g|svg)$/));
const trip_images = importAll(require.context('../Assets/Photos/trips', false, /\.(png|jpe?g|svg)$/));
const bunny_images = importAll(require.context('../Assets/Photos/bunny', false, /\.(png|jpe?g|svg)$/));
const home_images = importAll(require.context('../Assets/Photos/home', false, /\.(png|jpe?g|svg)$/));
const hyd_images = importAll(require.context('../Assets/Photos/hyd', false, /\.(png|jpe?g|svg)$/));
const quizzing_images = importAll(require.context('../Assets/Photos/quizzing', false, /\.(png|jpe?g|svg)$/));

function Travel() {
    const [collegePhotos, setCollegePhotos] = useState([]);
    const [tripPhotos, setTripPhotos] = useState([]);
    const [bunnyPhotos, setBunnyPhotos] = useState([]);
    const [homePhotos, setHomePhotos] = useState([]);
    const [hydPhotos, setHydPhotos] = useState([]);
    const [quizzingPhotos, setQuizzingPhotos] = useState([]);


    useEffect(() => {
        const loadCollegeImages = async () => {
            const promises = college_images.map((src) => {
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
            setCollegePhotos(loadedPhotos);
        };

        const loadBunnyImages = async () => {
            const promises = bunny_images.map((src) => {
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
            setBunnyPhotos(loadedPhotos);
        };

        const loadHomeImages = async () => {
            const promises = home_images.map((src) => {
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
            setHomePhotos(loadedPhotos);
        };

        const loadHydImages = async () => {
            const promises = hyd_images.map((src) => {
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
            setHydPhotos(loadedPhotos);
        };

        const loadQuizzingImages = async () => {
            const promises = quizzing_images.map((src) => {
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
            setQuizzingPhotos(loadedPhotos);
        };

        const loadTripImages = async () => {
            const promises = trip_images.map((src) => {
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
            setTripPhotos(loadedPhotos);
        };

        loadBunnyImages();
        loadCollegeImages();
        loadHomeImages();
        loadHydImages();
        loadQuizzingImages();
        loadTripImages();
    }, []);

    return (
        <Container fluid >
            <Particle />
        <Container style={{paddingTop: "80px", color: "white"}} >
        <div>
        <h1 style={{fontFamily: "Times New Roman, Times, serif"}}>My Photo Album</h1>
        <h3 style={{fontSize: "1.8em", fontFamily: "Times New Roman, Times, serif", textAlign:"left"}}><strong>College and Mumbai</strong></h3>
        <p style={{textAlign:"left"}}>
            Here are some photos from my college days and my time in Mumbai.
        </p>
        {collegePhotos.length > 0 ? (
            <Gallery photos={collegePhotos} style={{zIndex: 5}} />
        ) : (
            <p>Loading photos...</p>
        )}
        </div>
        </Container>

        <Container style={{paddingTop: "30px", color: "white"}}>
        <div>
        <h3 style={{fontSize: "1.8em", fontFamily: "Times New Roman, Times, serif", textAlign:"left"}}><strong>Bunnies & Kitties</strong></h3>
        <p style={{textAlign:"left"}}>
        I have two super cute bunnies that I love with all my heart; they have helped me through so much, and just sitting and watching them be themselves even for a few minutes is incredibly therapeutic. I also love cats a lot and often find myself petting every stray I see on the street.
        </p>
        {bunnyPhotos.length > 0 ? (
            <Gallery photos={bunnyPhotos} style={{zIndex: 5}} />
        ) : (
            <p>Loading photos...</p>
        )}
        </div>
        </Container>

        <Container style={{paddingTop: "30px", color: "white"}}>
        <div>
        <h3 style={{fontSize: "1.8em", fontFamily: "Times New Roman, Times, serif", textAlign:"left"}}><strong>Home</strong></h3>
        <p style={{textAlign:"left"}}>
            Clicks from around my home in Bangalore, where I live with my family and a couple of photos from Kolkata, my hometown.
        </p>
        {homePhotos.length > 0 ? (
            <Gallery photos={homePhotos} style={{zIndex: 5}} />
        ) : (
            <p>Loading photos...</p>
        )}
        </div>
        </Container>

        <Container style={{paddingTop: "30px", color: "white"}}>
        <div>
        <h3 style={{fontSize: "1.8em", fontFamily: "Times New Roman, Times, serif", textAlign:"left"}}><strong>Hyderabad</strong></h3>
        <p style={{textAlign:"left"}}>
            Photos from my time in Hyderabad, where I spent a few months interning at Wells Fargo featuring some of my co-interns in the pictures.
        </p>
        {hydPhotos.length > 0 ? (
            <Gallery photos={hydPhotos} style={{zIndex: 5}} />
        ) : (
            <p>Loading photos...</p>
        )}
        </div>
        </Container>

        <Container style={{paddingTop: "30px", paddingBottom: "50px", color: "white"}}>
        <div>
        <h3 style={{fontSize: "1.8em", fontFamily: "Times New Roman, Times, serif", textAlign:"left"}}><strong>Trips</strong></h3>
        <p style={{textAlign:"left"}}>
            Photos from some of the trips I've been on wth my college friends, including Lonavala, Pune (for a quiz competition), and Kerala with a my two bestfriends among other places. <span class="purple">(More photos to be added soon)!</span>
        </p>
        {tripPhotos.length > 0 ? (
            <Gallery photos={tripPhotos} style={{zIndex: 5}} />
        ) : (
            <p>Loading photos...</p>
        )}
        </div>
        </Container>

        </Container>
    );
}

export default Travel;
