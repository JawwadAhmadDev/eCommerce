import Image from "next/image";
import picture from "../../../../../../../public/jewellary.png";
import Link from "next/link";
type Props = {};

const RightPart = (props: Props) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
      {/* Picture */}
      <Image
        src={picture}
        alt="Jewellary picture"
        className="w-[300px] h-[350px]"
      />

      <div className="flex flex-col gap-8">
        <p className="text-base sm:text-lg sm:font-light xl:text-base">
          This piece is ethically crafted in our small family-owned workshop in
          Peru with unmatched attention to detail and care. The Natural color is
          the actual natural color of the fiber, undyed and 100% traceable.
        </p>
        <Link href="/products">
          <button className="text-sm flex-wrap font-bold bg-black text-white w-2/4 py-2 border-t-2 border-l-2 border-zinc-500 flex justify-center items-center">
            See All Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RightPart;
