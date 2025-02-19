"use client";

import React from "react";

const syllabusData = [
  { title: "HTML Tools, Forms, History", progress: 80, color1: "bg-blue-500", color2:"bg-blue-100" },
  { title: "Tags & References in HTML", progress: 60, color1: "bg-orange-500", color2:"bg-orange-100" },
  { title: "Tables & References in HTML", progress: 24, color1: "bg-red-500", color2:"bg-red-100" },
  { title: "Tables & CSS Basics", progress: 96, color1: "bg-green-500", color2:"bg-green-100" },
];

export default function SyllabusAnalysis() {
  return (
    <div className="border border-gray-200 rounded-lg p-4 md:p-6 w-full max-w-2xl mx-auto font-sans ">
      <h2 className="text-sm md:text-lg font-semibold mb-3">Syllabus Wise Analysis</h2>
      
      {syllabusData.map((item, index) => (
        <div key={index} className="mb-4">
          <div className="flex justify-between items-center gap-3 md:gap-4 space-y-3 md:space-y-5">
            <span className="text-gray-600 text-xs md:text-sm">{item.title}</span>
            <span className={`font-semibold text-sm md:text-lg `} style={{ color: item.color1 }}>
              {item.progress}%
            </span>
          </div>
          
          <div className={`w-full bg-gray-200 h-2 rounded-full mt-1 ${item.color2}`}>
            <div
              className={`h-2 rounded-full ${item.color1}`}
              style={{ width: `${item.progress}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}