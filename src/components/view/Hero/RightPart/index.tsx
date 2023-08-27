import Image from "next/image";

type Props = {};

const RightPart = (props: Props) => {
  return (
    <div className="hidden lg:block">
      {/* Background color circle */}
      <div className="bg-[#ffece3] w-[600px] h-[600px] rounded-full">
        {/* Hero Section image of girl */}
        <Image
          src="/heroSectionImage.png"
          alt="heroSectionImage"
          width="670"
          height="670"
          className="absolute -top-[5%]"
        ></Image>
      </div>
    </div>
  );
};

export default RightPart;
