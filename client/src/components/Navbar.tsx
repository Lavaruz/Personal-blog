export default function Navbar() {
  return (
    <div className="bg-slate-100">
      <div className="container">
        <div className="w-full py-4 shadow-sm">
          <div className="flex justify-between">
            <div className="brand">
              <h3 className="text-xl font-semibold text-slate-900">
                lavaruz blog
              </h3>
            </div>
            <div className="list">
              <a href="https://lavaruz-porfolio.vercel.app/" className="">
                me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
