import Hero from "@/components/Hero";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";

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

export default function Blog(props: BlogProps) {
  const { blogPost } = props;
  return (
    <>
      <div className="">
        <div className="lg:grid lg:grid-cols-[1fr_max-content_.4fr] flex flex-col-reverse">
          <Blogs blogs={blogPost}></Blogs>
          <div className="hidden lg:block lg:h-screen lg:w-0.5 lg:mx-2 lg:bg-slate-100 lg:sticky lg:top-0"></div>
          <Hero></Hero>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const blogPost = await res.json();

  // Pass data to the page via props
  return { props: { blogPost } };
}
