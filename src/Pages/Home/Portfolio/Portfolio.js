import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h2>Recent Wedding Click</h2>
      <div className="portfolio">
        <div className="img-portfolio">
          <img
            src="https://i.ibb.co/jGrMd3D/pexels-asad-photo-maldives-169198.png"
            alt=""
          />
        </div>
        
        <div className="img-portfolio">
          <img
            src="https://i.ibb.co/wQCwdwv/pexels-cinestyle-india-1589216.png"
            alt=""
          />
        </div>

        <div className="img-portfolio">
          <img
            src="https://i.ibb.co/JpGsZMb/pexels-soulseeker-1589820.png"
            alt=""
          />
        </div>

        <div className="img-portfolio">
          <img
            src="https://i.ibb.co/sbxQy18/pexels-studio-negarin-3650446.jpg"
            alt=""
          />
        </div>

        <div className="img-portfolio">
          <img
            src="https://i.ibb.co/Hh8f1qQ/pexels-kaushal-moradiya-2781104.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
