import React from "react";

import "./homepage-style.scss";

import Diretory from "../../components/directorys/directory-component";

const HomePage = () => (
  <div className="homepage">
    <h1>Welcome To My Home Page</h1>
    <Diretory />
  </div>
);

export default HomePage;
