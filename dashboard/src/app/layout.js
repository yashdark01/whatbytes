"use client";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./globals.css";
import store  from "./redux/store";
import { Provider } from "react-redux";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <Provider store={store}>
          <Header />
          <div className="flex">
            <Sidebar />
            <main className="flex-1 p-4">{children}</main>
          </div>
        </Provider>
      </body>
    </html>
  );
}