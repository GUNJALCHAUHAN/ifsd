import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Function to get a random image URL from Lorem Picsum API
const getRandomImage = () => {
  const randomNumber = Math.floor(Math.random() * 1000);
  return `https://picsum.photos/1920/1080?random=${randomNumber}`;
};

// Login Component
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple login logic (you can replace with real authentication)
    if (username && password) {
      onLogin(true);
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

// Navbar Component
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#home">
        TravelTales
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#blog">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// Home Component with Random Background Image
const Home = () => {
  return (
    <header
      className="jumbotron jumbotron-fluid text-center text-white bg-primary"
      style={{
        backgroundImage: `url(${getRandomImage()})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        height: "100vh",
      }}
    >
      <div className="overlay"></div>
      <div className="container">
        <h1 className="display-4">Welcome to TravelTales</h1>
        <p className="lead">Share your journey, one story at a time.</p>
      </div>
    </header>
  );
};

// BlogPost Component with Image beside the text
const BlogPost = ({ title, date, summary, imageUrl }) => {
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={imageUrl} className="card-img" alt={title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{date}</h6>
            <p className="card-text">{summary}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <p>&copy; 2024 TravelTales. All rights reserved.</p>
    </footer>
  );
};

// App Component (Main Layout)
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Navbar />
      {!isLoggedIn ? (
        <Login onLogin={setIsLoggedIn} />
      ) : (
        <>
          <Home />
          <div className="container my-5">
            <h2>Latest Blog Posts</h2>
            <BlogPost
              title="Exploring the Hidden Gems of Bali"
              date="November 10, 2024"
              summary="Discover the serene beaches and vibrant culture of Bali, far from the crowds."
              imageUrl="https://picsum.photos/200/300?random=1"
            />
            <BlogPost
              title="A Journey Through the Swiss Alps"
              date="October 5, 2024"
              summary="Embark on an adventure through the stunning Swiss Alps, known for their breathtaking views."
              imageUrl="https://picsum.photos/200/300?random=2"
            />
            <BlogPost
              title="The Heart of Kyoto: A Cultural Tour"
              date="September 18, 2024"
              summary="Explore the traditional temples and gardens of Kyoto, Japan's cultural capital."
              imageUrl="https://picsum.photos/200/300?random=3"
            />
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
