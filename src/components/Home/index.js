import React from "react";
import './style.css';

const Home = () => {
    return (
        <div className="home">
            <div className="home-divs">
                <div className="home-div-one">
                    <h1 className="journey">
                        Elevating Coffee
                        <br />
                        Experiences, Worldwide.
                    </h1>
                    <p className="our-app">
                        Our mission is to elevate coffee experiences globally, ensuring every sip
                        <br/>
                        tells a unique story of quality, flavor, and craftsmanship.
                    </p>
                    <div className="home-buttons">
                        <button className="read-more-button">Read More</button>
                        <button className="contact-us-button">Contact Us</button>
                    </div>
                </div>

                <div className="home-div-two">
                    <div className="coffee-image-wrapper">
                        <img src={`${process.env.PUBLIC_URL}/images/coffee-splash.png`} alt="Coffee Beans" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;