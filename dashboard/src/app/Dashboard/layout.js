"use client";

import { useState, useEffect } from "react";

export default function DashboardHome() {
  const [greeting, setGreeting] = useState("Welcome");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning ☀️");
    else if (hour < 18) setGreeting("Good Afternoon 🌤️");
    else setGreeting("Good Evening 🌙");
  }, []);

  return (
    <div className="p-6 overflow-auto h-96 border border-gray-200 rounded-lg text-gray-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">{greeting}</h1>
        <p className="text-lg text-gray-600">Welcome to your dashboard, ready to boost your productivity?</p>
      </div>
    </div>
  );
}