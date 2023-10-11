import Image from "next/image";
import {
  AiFillGithub,
  AiOutlineWhatsApp,
  AiOutlineInstagram,
} from "react-icons/ai";
import ProfilePic from "@/public/images/roby-codes.jpg";

const HeroSection = () => (
  <section className="min-h-screen flex justify-center items-center px-8">
    <div className="flex flex-col gap-4 py-8 px-16 rounded bg-white shadow-sm">
      <div className="self-center h-40 w-40 relative rounded-full overflow-hidden cursor-pointer select-none">
        <Image
          className="object-cover object-left hover:scale-105 duration-300"
          draggable="false"
          src={ProfilePic}
          alt="Roby Codes Profile Picture"
          fill
        />
      </div>
      <div>
        <h1 className="text-center text-2xl font-semibold">Roby Codes</h1>
        <h2 className="text-center text-lg font-thin">
          Bringing Your Vision Into Reality
        </h2>
      </div>
      <div className="flex-1 flex gap-3">
        <a
          className="flex justify-center flex-1 px-3 py-2 rounded bg-black hover:bg-black/80 duration-300"
          href="https://github.com/roby-codes"
          target="_blank"
        >
          <AiFillGithub className="h-6 w-6 text-white" />
        </a>
        <a
          className="flex justify-center flex-1 px-3 py-2 rounded bg-black hover:bg-black/80 duration-300"
          href="https://wa.me/+393395457864?text=Hey%20there%21%20I%20found%20your%20portfolio%20and%20i%20would%20like%20to%20have%20a%20chat%20with%20you."
          target="_blank"
        >
          <AiOutlineWhatsApp className="h-6 w-6 text-white" />
        </a>
        <a
          className="flex justify-center flex-1 px-3 py-2 rounded bg-black hover:bg-black/80 duration-300"
          href="https://www.instagram.com/aka_ale_xander/"
          target="_blank"
        >
          <AiOutlineInstagram className="h-6 w-6 text-white" />
        </a>
      </div>
    </div>
  </section>
);

export { HeroSection };
