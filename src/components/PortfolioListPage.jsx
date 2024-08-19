import React from "react";
import PortfolioItem from "./PortfolioItem";

function PortfolioListPage() {
  const portfolioItems = [
    {
      id: 1,
      title: "Project XO Game",
      description:
        "You are X , your friend (or the computer in this case) is O. Players take turns putting their marks in empty squares.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/1200px-Tic_tac_toe.svg.png",
      githubUrl: "https://madhankumarp1.github.io/XO_Game/",
    },
    {
      id: 2,
      title: "Project Memory Card Game",
      description:
        "The first player flips 2 cards, keeps them if they match and tries again, or turns them back if they don't and passes left. Players remember card locations to make matches on their turns.",
      imageUrl: "https://images.squarespace-cdn.com/content/v1/5a1c55737131a549d166c965/1530638150697-8CULO6YAZB0V8KR07R6F/Family+Memory+Game+Cards.jpg",
      githubUrl: "https://madhankumarp1.github.io/memory-card-game-/",
    },
    {
      id: 3,
      title: "Project Weather Report",
      description:
        "More detailed weather reports also contain information about precipitation, wind speed and direction, relative humidity, atmospheric pressure, and other things as well.",
      imageUrl: "https://cdn.dribbble.com/userupload/5818728/file/still-b44916d546b9f20303a60368ad8c7dec.png",
      githubUrl: "https://madhankumarp1.github.io/weather_task/",
    },
    
    
  ];

  return (
    <div className="port-head">
      <div className="port-sub">
        <div className="port-about-head">
          <h2 className="port-h2"> My Portfolio</h2>
        </div>

        <div className="portfolio-about">
          <p className="port-about">
            Explore my design services, from user interface and experience to prototyping and testing. Let's craft exceptional digital experiences together.
          </p>
        </div>
      </div>
      <div className="portfolio-list">
        <div className="portfolio-items">
          {portfolioItems.map((item) => (
            <PortfolioItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortfolioListPage;
