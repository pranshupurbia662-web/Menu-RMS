import React from "react";

import Lefthome from "../atoms/Lefthome";
import Mocktail from "../atoms/Mocktail";
import Cocktail from "../atoms/Cocktail";
import Vegstarter from "../atoms/Vegstarter";
import Nonvegstarter from "../atoms/Nonvegstarter";
import Mainc from "../atoms/Mainc";
import Nonveg from "../atoms/Nonveg";
import Desserts from "../atoms/Desserts";
import Footer from "../atoms/Footer";

const Home = () => {

  return (

    <div className="min-h-screen ">

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start px-3 sm:px-4 lg:px-6 pt-4 lg:pt-6">

        {/* LEFT SIDEBAR */}

        <div className="w-full lg:w-[280px] xl:w-[320px] lg:sticky lg:top-6 lg:self-start">

          <Lefthome />

        </div>

        {/* RIGHT CONTENT */}

        <div className="flex-1 flex flex-col gap-5 sm:gap-6 w-full">

          <Mocktail />

          <Cocktail />

          <Vegstarter />

          <Nonvegstarter />

          <Mainc />

          <Nonveg />

          <Desserts />

        </div>

      </div>

      <Footer />

    </div>

  );

};

export default Home;