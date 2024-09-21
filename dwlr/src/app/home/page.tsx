import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Status from "../components/Status";
import StatusDropdown from "../components/StatusDropdown";

export default function Page() {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-1 bg-slate-200 ">
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col p-4 ">
          {/* Status Component */}
          <Status />

          <div className="flex flex-grow space-x-4 mt-4 h-[500px]">
            {/* Left Half */}
            <div className="flex-1 p-2 bg-white rounded shadow-md">
              <StatusDropdown />
            </div>

            {/* Right Half */}
            <div className="flex-1 p-2 bg-white rounded shadow-md flex justify-center items-center">
              <img
                src="https://i.postimg.cc/FFZqKGZy/411px-India-locator-language-map.png"
                alt="Map"
                className="w-auto h-auto object-cover" // Ensures the image scales while maintaining aspect ratio
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
