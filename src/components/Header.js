import React from "react";
import { GoChevronLeft } from "react-icons/go";

export default function Header() {
  return (
    <div className="flex items-center justify-between p-4 border-b bg-pink-100 h-32">
      <div className="flex items-center gap-2">
        <GoChevronLeft  className="text-3xl font-semibold cursor-pointer" />
        <h1 className="text-lg font-semibold">Back</h1>
        
      </div>
      <h1 className="items-center font-bold text-lg">Dashboard</h1>
      <img
        src="https://i.pravatar.cc/40"
        alt="profile"
        className="w-10 h-10 rounded-full"
      />
    </div>
  );
}
