import React from 'react';
import './assets/Home.css';

const Home = ({ onLogout }) => {
  return (
    <div className="home-container">
      <div className="profile">
        <img src="src/assets/profile.jpg" alt="Profile" className="profile-picture" />
        <h2>Hi my name is</h2>
        <h3>MUHAMMAD ATSAL RIZANDRI</h3>
        <p>A Mentee of Digistar 2024</p>
        <button className="logout-button" onClick={onLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Home;
