interface Post {
  id: number;
  title: string;
  body: string;
}

interface BlogProps {
  blogs: Post[];
}

export default function Blogs({ blogs }: BlogProps) {
  blogs = blogs.slice(1, 12 + 1);
  return (
    <div className="container">
      <div className="w-full mb-12 mt-8">
        <h3 className="mb-8">{">>>"} most recent blog</h3>
        <div className="grid lg:grid-cols-4 gap-4">
          {blogs.map((blog, index) => {
            blog.body = blog.body.substring(0, 100) + " ...";
            return (
              <div
                key={index}
                className="card py-3 px-6 border border-slate-400 rounded-lg shadow-sm hover:-translate-y-1 group hover:shadow-xl hover:border-slate-400 hover:bg-slate-500 transition cursor-pointer duration-300 ease-in-out"
              >
                <div className="card-title group-hover:text-white">
                  <h3 className="font-bold text-xl mb-2">{blog.title}</h3>
                  <p className="text-sm text-slate-400 mb-4 group-hover:text-slate-300">
                    tags:{" "}
                    <span className="text-slate-500 group-hover:text-slate-200 text-sm">
                      backend
                    </span>
                  </p>
                </div>
                <div className="card-body">
                  <p className="text-slate-600 group-hover:text-slate-200 text-base">
                    {blog.body}
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
