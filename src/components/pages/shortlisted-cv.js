import React from 'react';
import './shortlistedCV.css';
import IMAGE1 from '../images/img1.jpeg';
import IMAGE2 from '../images/img2.jpeg';
import IMAGE3 from '../images/img3.jpeg';
import IMAGE4 from '../images/img4.jpeg';
import IMAGE5 from '../images/img5.jpeg';
import IMAGE6 from '../images/img6.jpeg';

function ShortlistedCV() {
  const h1Style = {
    position: 'relative',
    top: '40px',
    left: '70px',
    width: '262px',
    height: '47px',
    textAlign: 'left',
    font: 'normal normal 600 33px/32px Poppins',
    letterSpacing: '0px',
    color: '#151515',
    opacity: '1'
  };
  const cvData = [
    { id: 1, imgSrc: IMAGE1, name:"John Doe", description: "From France, Paris. I have rich experience in web design, also I am good at wordpress. I love to talk with you about our unique.", skillLevel: "Advanced" },
    { id: 2, imgSrc: IMAGE2, name:"John Doe", description: "From France, Paris. I have rich experience in web design, also I am good at wordpress. I love to talk with you about our unique.", skillLevel: "Intermediate" },
    { id: 3, imgSrc: IMAGE3, name:"John Doe",description: "From France, Paris. I have rich experience in web design, also I am good at wordpress. I love to talk with you about our unique.", skillLevel: "Beginner" },
    { id: 4, imgSrc: IMAGE4, name:"John Doe", description: "From France, Paris. I have rich experience in web design, also I am good at wordpress. I love to talk with you about our unique.", skillLevel: "Advanced" },
    { id: 5, imgSrc: IMAGE5, name:"John Doe", description: "From France, Paris. I have rich experience in web design, also I am good at wordpress. I love to talk with you about our unique.", skillLevel: "Intermediate" },
    { id: 6, imgSrc: IMAGE6, name:"John Doe", description: "From France, Paris. I have rich experience in web design, also I am good at wordpress. I love to talk with you about our unique.", skillLevel: "Expert" },
  ];


  return (
    <div>
      <h1 style={h1Style}>Shortlisted CV's</h1>
      <div className="cv-boxes">
      {cvData.map((cv) => (
        <div className="cv-box" key={cv.id}>
          <div className="cv-box-content">
            <img className="cv-box-img" src={cv.imgSrc} alt="CV Thumbnail" />
            <div className="cv-box-name">{cv.name}</div>
            <div className="cv-box-description">{cv.description}</div>
            <div className="cv-box-skill">{cv.skillLevel}</div>
          </div>
          <button className="cv-box-download">Download</button>
        </div>
      ))}
    </div>
    </div>
    
  );
}

export default ShortlistedCV;
