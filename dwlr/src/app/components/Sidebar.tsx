import React from 'react'
import { MdDashboard } from "react-icons/md";
import { LuBellRing } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";

function Sidebar() {
  return (
    <div className="w-16 bg-white flex flex-col items-center py-6 px-10 justify-between">
    {/* Top Icons */}
    <div className="flex flex-col items-center space-y-4 gap-3">
      <MdDashboard
        size={40}
        className="text-gray-500 hover:text-gray-600 cursor-pointer"
      />
      <LuBellRing
        size={40}
        className="text-gray-500 hover:text-gray-600 cursor-pointer"
      />
    </div>

    {/* Logout Icon */}
    <div>
      <IoIosLogOut
        size={40}
        className="text-gray-500 hover:text-gray-600 cursor-pointer"
      />
    </div>
  </div>
  )
}

export default Sidebar