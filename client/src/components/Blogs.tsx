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
      <div className="w-full mb-12 mt-8 lg:px-28">
        <h3 className="mb-8 text-2xl font-bold">Articles</h3>
        <div className="grid gap-4">
          {blogs.map((blog, index) => {
            return (
              <div
                key={index}
                className="card p-4 border border-slate-400 rounded-lg shadow-sm hover:-translate-y-1 group hover:shadow-xl hover:border-slate-400 hover:bg-slate-500 transition cursor-pointer duration-300 ease-in-out"
              >
                <div className="card-title group-hover:text-white">
                  <h3 className="font-bold text-2xl mb-2">
                    {titleCase(blog.title)}
                  </h3>
                  <p className="text-sm text-slate-400 mb-4 group-hover:text-slate-300">
                    tags:{" "}
                    <span className="text-slate-500 group-hover:text-slate-200 text-sm">
                      backend
                    </span>
                  </p>
                </div>
                <div className="card-body">
                  <p className="text-slate-600 group-hover:text-slate-200 text-base">
                    {blog.body.slice(1, 200)}
                    <span className="text-slate-700 font-semibold">
                      ... Read more
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
