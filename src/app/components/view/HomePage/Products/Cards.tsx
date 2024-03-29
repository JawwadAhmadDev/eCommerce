import Image from "next/image";
import Link from "next/link";
import firstCard from "../../../../../../public/products/1st.png";
import secondCard from "../../../../../../public/products/2nd.png";
import thirdCard from "../../../../../../public/products/3rd.png";

type Props = {};

const Cards = (props: Props) => {
  return (
    <div className="lg:flex lg:justify-around">
      {/* 1st Card */}
      <div className="hover:scale-110 duration-300">
        <Link href="/product/1st">
          <div className="py-8 flex flex-col justify-center items-center">
            <Image
              src={firstCard}
              alt="2nd Card"
              className="w-[300px] h-[320px] sm:w-[380px] sm:h-[400px] shadow-lg"
            />
            <p className="text-xl font-semibold tracking-wider mt-2">
              Brushed Reglan Sweatshirt
            </p>
            <p className="text-xl font-semibold tracking-wider mt-2">$195</p>
          </div>
        </Link>
      </div>

      {/* 2nd Card */}
      <div className="hidden lg:block hover:scale-110 duration-300">
        <Link href="/product/2nd">
          <div className="py-8 flex flex-col justify-center items-center">
            <Image
              src={secondCard}
              alt="3rd Card"
              className="w-[300px] h-[320px] sm:w-[380px] sm:h-[400px] shadow-lg"
            />
            <p className="text-xl font-semibold tracking-wider mt-2">
              Cameryn Sash Tie Dress
            </p>
            <p className="text-xl font-semibold tracking-wider mt-2">$545</p>
          </div>
        </Link>
      </div>

      {/* 3rd Card */}
      <div className="hidden xl:block hover:scale-110 duration-300">
        <Link href="/product/3rd">
          <div className="py-8 flex flex-col justify-center items-center">
            <Image
              src={thirdCard}
              alt="1st Card"
              className="w-[300px] h-[320px] sm:w-[380px] sm:h-[400px] shadow-lg"
            />
            <p className="text-xl font-semibold tracking-wider mt-2">
              Flex Sweatshirt
            </p>
            <p className="text-xl font-semibold tracking-wider mt-2">$175</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
