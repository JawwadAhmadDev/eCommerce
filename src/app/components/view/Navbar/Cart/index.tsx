import { FiShoppingCart } from "react-icons/fi";

type Props = {};

const Cart = (props: Props) => {
  return (
    <div>
      <div className="relative w-12 h-12 bg-gray-200 rounded-full flex justify-center items-center cursor-pointer">
        <div className="w-5 h-5 flex justify-center items-center font-medium text-white text-xs absolute top-1 right-1 bg-red-500 rounded-full">
          3
        </div>
        <FiShoppingCart size={21} />
      </div>
    </div>
  );
};

export default Cart;
