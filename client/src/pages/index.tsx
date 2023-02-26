import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Blogs from "@/components/Blogs";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

interface Post {
  id: number;
  title: string;
  body: string;
}

interface BlogProps {
  blogPost: Post[];
}

export default function Home(props: BlogProps) {
  const { blogPost } = props;
  return (
    <>
      <div className="">
        <Navbar></Navbar>
        <Hero></Hero>
        <Blogs blogs={blogPost}></Blogs>
        <Footer></Footer>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const blogPost = await res.json();

  // Pass data to the page via props
  return { props: { blogPost } };
}
