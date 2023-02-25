export default function Blogs() {
  return (
    <div className="container">
      <div className="w-full mb-32 mt-8">
        <h3 className="mb-8">{">>>"} most recent blog</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="card py-3 px-6 border border-slate-400 rounded-lg shadow-sm hover:-translate-y-1 group hover:shadow-xl hover:border-slate-400 hover:bg-slate-500 transition cursor-pointer duration-300 ease-in-out">
            <div className="card-title group-hover:text-white">
              <h3 className="font-bold text-xl mb-2">
                What happen to this World
              </h3>
              <p className="text-sm text-slate-400 mb-4 group-hover:text-slate-300">
                tags:{" "}
                <span className="text-slate-500 group-hover:text-slate-200">
                  backend
                </span>
              </p>
            </div>
            <div className="card-body">
              <p className="text-slate-600 group-hover:text-slate-200 text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis libero laborum sapiente totam vero voluptate.
              </p>
            </div>
          </div>
          <div className="card py-3 px-6 border border-slate-400 rounded-lg shadow-sm hover:-translate-y-1 group hover:shadow-xl hover:border-slate-400 hover:bg-slate-500 transition cursor-pointer duration-300 ease-in-out">
            <div className="card-title group-hover:text-white">
              <h3 className="font-bold text-xl mb-2">My top sheat music</h3>
              <p className="text-sm text-slate-400 mb-4 group-hover:text-slate-300">
                tags:{" "}
                <span className="text-slate-500 group-hover:text-slate-200">
                  music
                </span>
              </p>
            </div>
            <div className="card-body">
              <p className="text-slate-600 group-hover:text-slate-200 text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis libero laborum sapiente
              </p>
            </div>
          </div>

          <div className="card py-3 px-6 border border-slate-400 rounded-lg shadow-sm hover:-translate-y-1 group hover:shadow-xl hover:border-slate-400 hover:bg-slate-500 transition cursor-pointer duration-300 ease-in-out">
            <div className="card-title group-hover:text-white">
              <h3 className="font-bold text-xl mb-2">
                Pagination dalam Express JS
              </h3>
              <p className="text-sm text-slate-400 mb-4 group-hover:text-slate-300">
                tags:{" "}
                <span className="text-slate-500 group-hover:text-slate-200">
                  backend
                </span>
              </p>
            </div>
            <div className="card-body">
              <p className="text-slate-600 group-hover:text-slate-200 text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
                consequatur excepturi doloribus ad, commodi corporis. Sed
                numquam quo tempore? Ducimus!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
