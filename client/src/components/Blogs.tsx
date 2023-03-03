import Link from "next/link";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface BlogProps {
  blogs: Post[];
}

function titleCase(str) {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}

export default function Blogs({ blogs }: BlogProps) {
  blogs = blogs.slice(1, 12 + 1);
  return (
    <div className="container">
      <div className="w-full lg:mb-12 mt-8 lg:px-24">
        <div className="flex justify-between items-center mb-6 lg:mb-12">
          <h3 className="text-2xl font-semibold text-big pl-4">Article</h3>
          <Link
            href="/"
            className="font-semibold text-med hover:text-small lg:block hidden"
          >
            Check my Full Profile
          </Link>
        </div>
        <hr className="mb-8" />
        <div className="grid gap-8 lg:pr-24 divide-y divide-slate-200">
          {blogs.map((blog, index) => {
            return (
              <Link href={"/blog/" + blog.title} key={index}>
                <div className="card p-4 border-small rounded-lg hover:-translate-y-1 group hover:shadow-xl hover:border-small hover:bg-back transition cursor-pointer duration-300 ease-in-out">
                  <div className="card-title">
                    <h3 className="font-semibold text-xl mb-2 text-big group-hover:text-white">
                      {titleCase(blog.title)}
                    </h3>
                  </div>
                  <div className="card-body">
                    <p className="text-slate-600 group-hover:text-slate-200 text-base">
                      {blog.body.split(" ").slice(0, 20).join(" ")}
                      <span className="text-med font-semibold">
                        ... Read more
                      </span>
                    </p>

                    <p className="text-sm text-small mt-4 group-hover:text-slate-300">
                      tags:{" "}
                      <span className="text-slate-600 text-xs py-1 px-2 bg-slate-200 rounded-full">
                        backend
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
