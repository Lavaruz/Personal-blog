import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Blogs from "@/components/Blogs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="">
        <Navbar></Navbar>
        <Hero></Hero>
        <Blogs></Blogs>
      </div>
    </>
  );
}
