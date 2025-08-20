import React, { useEffect } from "react";
import { infinity } from "ldrs";

const Preloader = () => {
  useEffect(() => {
    infinity.register();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <l-infinity
        size="55"
        stroke="4"
        stroke-length="0.15"
        bg-opacity="0.1"
        speed="1.3"
        color="gold"
      ></l-infinity>
    </div>
  );
};

export default Preloader;
