import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-slate-100">
      <div className="container sticky top-0">
        <div className="w-full">
          <div className="hero-profile pt-12 pb-4 px-8">
            <div className="w-full flex justify-center">
              <Image
                src="/imgs/upme.jpg"
                alt="Profile picture"
                width={200}
                height={200}
                className="rounded-md shadow-lg mb-12 text-center"
              />
            </div>

            <h2 className="text-xl font-semibold text-slate-800">
              Assami Muzaki
            </h2>
            <p className="font-light text-slate-600">
              Passionate Backend Developer <br />{" "}
              <span className="font-normal text-sm">(Node JS)</span>
            </p>
          </div>
          <div className="hero-about px-8">
            <h2 className="text-xl font-semibold text-slate-700">About</h2>
            <p className="text-sm text-slate-500 tracking-wide">
              Distiction Graduate Student at Bangkit Academy. Proificient at
              Server-Side Programming such as Creating RESTfulAPI, Databases
              Management, Unit Test, etc. <br />
            </p>
            <p className="text-sm text-slate-500 tracking-wide pt-2">
              Currently focusing on{" "}
              <span className="font-bold">Express JS</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
