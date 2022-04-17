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
          <h3>A Lovely Wedding on Beach</h3>
        </div>
        

        <div className="img-portfolio">
          <img
            src="https://i.ibb.co/wQCwdwv/pexels-cinestyle-india-1589216.png"
            alt=""
          />
          <h3>Punjabi Couple</h3>
        </div>

        <div className="img-portfolio">
          <img
            src="https://i.ibb.co/JpGsZMb/pexels-soulseeker-1589820.png"
            alt=""
          />
          <h3>San Francisco Wedding Couple</h3>
        </div>

        <div className="img-portfolio">
          <img
            src="https://i.ibb.co/qJmchMR/wedding-couple-france-1.png"
            alt=""
          />
          <h3>Wedding Couple Bridge Shoot</h3>
        </div>

        <div className="img-portfolio">
          <img
            src="https://i.ibb.co/Hh8f1qQ/pexels-kaushal-moradiya-2781104.png"
            alt=""
          />
          <h3>A Bengali Wedding Couple</h3>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
