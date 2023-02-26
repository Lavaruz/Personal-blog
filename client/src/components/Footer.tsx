export default function Footer() {
  return (
    <div className="container">
      <div className="w-full">
        <hr />
        <div className="grid grid-cols-2 my-12">
          <div className="brand">
            <h2 className="text-xl font-bold mb-3">lavaruz blog</h2>
            <p className="text-sm text-slate-500 w-96">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid,
              cupiditate.
            </p>
          </div>
          <div className="social flex items-center justify-center gap-4 ">
            <a
              href=""
              className="p-4 border border-slate-500 rounded-full hover:bg-slate-500 hover:text-white transition duration-300 ease-in-out"
            >
              FB
            </a>
            <a
              href=""
              className="p-4 border border-slate-500 rounded-full hover:bg-slate-500 hover:text-white transition duration-300 ease-in-out"
            >
              Github
            </a>
            <a
              href=""
              className="p-4 border border-slate-500 rounded-full hover:bg-slate-500 hover:text-white transition duration-300 ease-in-out"
            >
              IG
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
