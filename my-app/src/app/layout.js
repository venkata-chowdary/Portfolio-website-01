import { FloatingDock, FloatingNavBar } from "@/components/FloatingNavBar";
import { NavBar } from "../components/NavBar";
import "./globals.css";
import { Mukta } from 'next/font/google';

const mukta = Mukta({
  subsets: ['latin'], // Specify character subsets
  weight: ['200','300','400','500','600','700','800'], // Desired font weights
});


export const metadata = {
  title: "Venkata Chowdary"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={mukta.className}>
      <NavBar/>
        {children}
        <FloatingNavBar/>
      </body>
    </html>
  );
}
