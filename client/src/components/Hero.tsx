import Image from "next/image";

export default function Hero() {
  return (
    <div className="">
      <div className="container sticky top-0">
        <div className="w-full">
          <div className="hero-profile pt-12 pb-4 px-8 text-center lg:text-left">
            <div className="w-full flex justify-center">
              <Image
                src="/imgs/upme.jpg"
                alt="Profile picture"
                width={200}
                height={200}
                className="rounded-full shadow-lg mb-8 text-center"
              />
            </div>

            <h2 className="text-xl font-semibold text-big mb-1">
              Assami Muzaki
            </h2>
            <p className="font-light text-med">
              Passionate Backend Developer <br />{" "}
              <span className="font-normal text-sm">(Node JS)</span>
            </p>

            <h2 className="text-xl font-semibold text-big pt-6 mb-2">About</h2>
            <p className="text-sm text-med">
              Distiction Graduate Student at Bangkit Academy led by Google,
              Tokopedia, Gojek, & Traveloka.
            </p>
            <p className="text-sm text-med pt-2">
              Proificient at Server-Side Programming such as Creating
              RESTfulAPI, Databases Management, Unit Test, etc.
            </p>
            <p className="text-sm text-med pt-2">
              Currently focusing on{" "}
              <span className="font-bold">Express JS</span>
            </p>
            <a
              href="#"
              className="block lg:hidden font-semibold text-med hover:text-small pt-8"
            >
              Check my full Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
