import Image from "next/image";
import logo from "../../../../../../../public/Logo.webp";
import { RiFacebookFill, RiLinkedinFill, RiTwitterXLine } from "react-icons/ri";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Image */}
      <Image src={logo} alt="Site Logo" className="w-[180px] h-[30px]" />

      <p className="w-3/5 lg:w-auto lg:text-lg text-zinc-600 font-medium leading-tight">
        Small, artisan label that offers a thoughtfully curated collection of
        high quality everyday essentials made.
      </p>

      {/* Social Icons container */}
      <div className="flex gap-4">
        <div className="bg-zinc-200 py-[10px] px-[12px] rounded-lg shadow-lg cursor-pointer">
          <RiTwitterXLine size={22} />
        </div>
        <div className="bg-zinc-200 py-[10px] px-[12px] rounded-lg shadow-lg cursor-pointer">
          <RiFacebookFill size={22} />
        </div>
        <div className="bg-zinc-200 py-[10px] px-[12px] rounded-lg shadow-lg cursor-pointer">
          <RiLinkedinFill size={22} />
        </div>
      </div>
    </div>
  );
};

export default Logo;
