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

export default function Home(props: BlogProps) {
  const { blogPost } = props;
  return (
    <>
      <div className="">
        {/* <Navbar></Navbar> */}
        <div className="lg:grid lg:grid-cols-[1fr_max-content_.4fr] flex flex-col-reverse">
          <Blogs blogs={blogPost}></Blogs>
          <div className="hidden lg:block lg:h-screen lg:w-0.5 lg:mx-2 lg:bg-slate-100 lg:sticky lg:top-0"></div>
          <Hero></Hero>
        </div>
        {/* <Footer></Footer> */}
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
