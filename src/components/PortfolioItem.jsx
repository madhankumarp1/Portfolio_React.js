import React from 'react';

const PortfolioItem = ({ item }) => {
  return (
    <div className="portfolio-item">
      <img src={item.imageUrl} alt={item.title} className="portfolio-item-image" />
      <h3 className="portfolio-item-title">{item.title}</h3>
      <p className="portfolio-item-description">{item.description}</p>
      <a href={item.githubUrl} target="_blank" rel="noopener noreferrer" className="portfolio-item-link">
        <span>View Project</span>
        <i className="arrow-icon">➜</i>
      </a>
    </div>
  );
};

export default PortfolioItem;
