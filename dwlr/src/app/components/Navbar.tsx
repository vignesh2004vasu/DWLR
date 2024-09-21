import React from "react";

const Navbar = () => {
  return (
    <nav className="">
      <div className=" p-4 container mx-auto flex items-center border-b-4 border-black border">
        <div className="flex-shrink-0 ">
          <img
            src="https://i.postimg.cc/nrQrs560/Ministry-of-Jal-Shakti.png" // Use the direct image URL here
            alt="Logo"
            className="h-20 w-40" // Adjusted size
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
