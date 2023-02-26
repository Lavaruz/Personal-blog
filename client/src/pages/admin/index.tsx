export default function Admin() {
  return (
    <div className="container flex justify-center items-center h-screen">
      <div className="lg:w-1/2 mx-auto py-20 w-full">
        <h2 className="text-xl font-bold text-center mb-4">Admin login</h2>
        <form action="" method="post" className="lg:px-20 px-4">
          <label className="block mb-4">
            <span className="block text-sm font-medium text-slate-700 after:content-['*'] after:text-red-500 after:ml-1">
              Username
            </span>
            <input
              type="text"
              value={"admin"}
              disabled
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
            />
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700 after:content-['*'] after:text-red-500 after:ml-1">
              Password
            </span>
            <input
              type="text"
              placeholder="type password here..."
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
      placeholder:italic
    "
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-lg bg-slate-500 text-white font-bold shadow-lg py-2 my-6 hover:opacity-80 transition"
          >
            Login
          </button>
        </form>
      </div>
      <div className="absolute left-2 top-2 text-lg">
        <a href="/">{"< back"}</a>
      </div>
    </div>
  );
}
