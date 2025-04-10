import React from "react";
import Hero from "../../components/Herro/Hero";
import LatestCollection from "../../components/LatestCollections/LatestCollection";
import BestSeller from "../../components/BestSellers/BestSeller";
import OurPolicy from "../../components/OurPolicy/OurPolicy";
import NewsLetterBox from "../../components/NewsLetters/NewsLetterBox";

function Home() {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsLetterBox />
    </div>
  );
}

export default Home;
