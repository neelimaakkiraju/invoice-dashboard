import React from "react";
import { FiArrowLeft } from "react-icons/fi";

export default function Header() {
  return (
    <div className="flex items-center justify-between p-4 border-b bg-white shadow-sm">
      <div className="flex items-center gap-2">
        <FiArrowLeft className="text-xl cursor-pointer" />
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
