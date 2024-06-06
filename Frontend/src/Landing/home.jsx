import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import hero from "../assets/hero.png";
import banner from "../assets/banner.png";
import HowItWorks from "../components/howitworks";
import { Button } from "@/components/ui/button";
import WhatWeDo from "../components/whatwedo";

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGetStarted = () => {
   //navigate("http://localhost:3000/auth/google")
   //http://localhost:3000/auth/google/callback
   

   //uncomment for production
   // window.open("https://www.kaabil.me/api/auth/google?scope=email",

   window.open("http://localhost:3000/api/auth/google?scope=email",
   "_self"
  );
  };

  return (
    <section id="home" className="min-h-screen w-full">
      <div className="md:flex min-h-screen sm:items-center w-full flex-col">
        <Navbar onGetStarted={handleGetStarted}/>
        <div className="flex flex-col w-full mt-24">
          <div className="flex flex-col md:flex-row items-center md:justify-between">
            <div className="flex-grow text-center md:px-12 md:text-left sm:mr-0 mb-8 sm:mb-0">
              <h1 className="text-6xl font-bold mb-4">
                AI-Powered Exam <br />
                <span className="whitespace-no-wrap">Preparation Platform</span>
              </h1>
              <p className="text-lg mb-4">
                Learning with Kabil is fun, and research shows that it works! With quick
                bite-sized lessons, you’ll earn points and unlock new levels while
                gaining real-world communication skills.
              </p>
              <div className="flex justify-center md:justify-start">
                <Button onClick={handleGetStarted} className="py-8 px-12 rounded-full flex mt-16 text-center md:items-center items-center">
                  Get Started
                </Button>
              </div>
            </div>
            <div className="flex-grow mt-40 flex justify-center sm:justify-end">
              <img src={hero} className="w-full h-auto" alt="hero" />
            </div>
          </div>
          <div className="relative w-full ">
            <img src={banner} alt="banner"></img>
          </div>
          <WhatWeDo />
          <HowItWorks />
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default Home;
