
"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="border border-gray-200 rounded-lg h-96 flex items-center justify-center">
      <section className="text-center">
       
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-6">
          Welcome, Friend! 👋
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We're glad to have you here. Explore and enjoy your journey with us!
        </p>
      </section>
    </main>
  );
}