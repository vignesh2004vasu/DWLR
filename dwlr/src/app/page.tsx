"use client";
import CarouselComponent from "./components/CarouselComponent";
import Navbar from "./components/Navbar";
import { useRouter } from "next/navigation";
import React from "react";

export default function Login() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/home");
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 flex-col md:flex-row">
        <div className="flex justify-center items-center w-full md:w-1/2 bg-gray-200">
          <div className="w-full max-w-md p-4">
            {/* Carousel will be hidden on screens smaller than md */}
            <div className="hidden md:block">
              <CarouselComponent />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full md:w-1/2 bg-gray-100">
          <div className="w-full max-w-md p-8 space-y-4 bg-white rounded shadow-lg">
            <h2 className="text-2xl font-bold text-center">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
