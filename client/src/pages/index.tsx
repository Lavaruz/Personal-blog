import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

const Blogs = dynamic(() => import("@/components/Blogs"));

const inter = Inter({ subsets: ["latin"] });

interface Post {
  id: number;
  title: string;
  body: string;
}

interface BlogProps {
  blogPost: Post[];
}

export default function Home(props: BlogProps) {}
