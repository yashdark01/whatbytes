import { Children } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <Header />
        <div className="flex">
          <Sidebar className="w-1/4 min-h-screen bg-gray-800 text-white p-4" />
          <main className="w-3/4 p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}