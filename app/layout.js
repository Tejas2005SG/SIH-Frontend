import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar/Navbar.js";



export default function ({ children }) {
  return (
    <html lang="en">
      <body className="">
        


        {children}

      </body>
    </html>
  );
}
