import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Introduction from "../components/Introduction";

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <Introduction />
      <Footer />
    </div>
  );
};

export default Home;
