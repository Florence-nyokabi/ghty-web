import React from "react";
import './style.css';

const CoffeeOptions = () => {
  return (
    <div className="options-container">
      <div className="coffee-options-image">
        <img src={`${process.env.PUBLIC_URL}/images/coffeeoptions.png`} alt="Coffee Cherries" className="coffee-image" />
      </div>

      <div className="coffee-options-text">
        <h3 className="coffee-subtitle">Various Options</h3>
        <h1 className="coffee-title">Ethiopian Coffee Beans</h1>
        <p className="coffee-description">
          Ethiopia is renowned for its naturally processed, heirloom <br />
          coffee varieties. We source our beans directly from small-scale <br />
          farmers, ensuring they reflect the unique characteristics of their <br />
          regions. From our own processing station, the lush highlands to <br />
          the fertile valleys, our range spans from exquisite specialty <br />
          coffees to comforting commercial blends, promising a <br />
          captivating experience in every cup.
        </p>

        <button className="contact-us-button">Contact Us</button>
      </div>
    </div>
  );
};

export default CoffeeOptions;