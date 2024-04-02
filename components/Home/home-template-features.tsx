import Image from "next/image";
import React from "react";

function HomeTemplateFeatures() {
  return (
    <div className="">
      <div className="md:w-1/2 w-full mx-auto flex flex-col items-center justify-center pb-7 gap-5 px-3 md:px-10 mt-10">
        <h2
          className="md:text-4xl text-center text-2xl  font-bold"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Designs Available
        </h2>
        <p
          className="text-center text-sm md:text-base"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          A versatile eCommerce Platform for different purposes that emphasizes
          creativity, efficiency, and diversity.
        </p>
      </div>
      <Image
        src="https://images.unsplash.com/photo-1608841802877-d37c913623e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="theme image"
        width={1000}
        height={1000}
        priority={true}
        className=" h-full w-full object-cover object-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      />
    </div>
  );
}

export default HomeTemplateFeatures;
