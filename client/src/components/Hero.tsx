export default function Hero() {
  return (
    <div className="bg-slate-100">
      <div className="containe">
        <div className="w-full flex flex-col justify-center items-center gap-4 py-32">
          <h1 className="font-semibold px-2 text-2xl text-center lg:text-2xl text-slate-900 mb-4">
            a Place for my thoughts, finds, and opinions
          </h1>
          <p className="text-slate-400 text-sm">tags: </p>
          <div className="flex gap-4 justify-center">
            <a
              href=""
              className="px-4 py-1 bg-transparent border rounded border-slate-500 text-slate-500 hover:bg-slate-500 hover:text-white transition duration-300 ease-in-out"
            >
              all
            </a>
            <a
              href=""
              className="px-4 py-1 bg-transparent border rounded border-slate-500 text-slate-500 hover:bg-slate-500 hover:text-white transition duration-300 ease-in-out"
            >
              backend
            </a>
            <a
              href=""
              className="px-4 py-1 bg-transparent border rounded border-slate-500 text-slate-500 hover:bg-slate-500 hover:text-white transition duration-300 ease-in-out"
            >
              music
            </a>
            <a
              href=""
              className="px-4 py-1 bg-transparent border rounded border-slate-500 text-slate-500 hover:bg-slate-500 hover:text-white transition duration-300 ease-in-out"
            >
              tips
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
