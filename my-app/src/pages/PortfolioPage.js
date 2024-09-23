import React from 'react';
import './PortfolioPage.css'; // We'll use this for custom styling

function PortfolioPage() {
  return (
    <div className="portfolio-container">
      <h1>My Portfolio</h1>
      <p>Here is a selection of my work:</p>
      <div className="portfolio-grid">
        <div className="portfolio-item">
          <h3>Project 1</h3>
          <p>Description of project 1...</p>
        </div>
        <div className="portfolio-item">
          <h3>Project 2</h3>
          <p>Description of project 2...</p>
        </div>
        <div className="portfolio-item">
          <h3>Project 3</h3>
          <p>Description of project 3...</p>
        </div>
        <div className="portfolio-item">
          <h3>Project 4</h3>
          <p>Description of project 4...</p>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
