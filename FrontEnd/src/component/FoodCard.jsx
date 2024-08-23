import { useState } from "react";
import Counter from "./Counter";

const FoodCard = () => {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const basePrice = 700; // Base price for one item

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const totalPrice = basePrice * quantity;

  return (
    <div className="w-[17rem] h-[22rem] ml-1 p-2 bg-teal-50 shadow-lg rounded-lg flex flex-col hover:border-orange-500 hover:border-2  border-[1px] border-teal-700 mx-auto">
      <div className="h-40 object-cover m-2 bg-orange-400 rounded-lg relative">
        <div className="absolute top-3 left-2 h-6 w-14 rounded-md bg-rose-700 text-xs text-teal-50 font-semibold mx-1 p-1 flex items-center justify-center">
          50% off
        </div>
        <button
          onClick={toggleFavorite}
          className="absolute top-2 right-2 p-1 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={isFavorite ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={w-6 h-6 ${isFavorite ? "text-rose-700" : "text-white"}}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>
      </div>
      <div className="p-2">
        <div className="flex mb-2 justify-between">
          <span className="text-lg font-bold">Vegetable Salad</span>
          <div className=" w-5 h-5 rounded-md flex items-center justify-center border-2 border-green-700 mt-1">
            <div className=" w-[9px] h-[9px] rounded-full flex items-center justify-center bg-green-700"></div>
          </div>
        </div>
        <div className="flex mb-2 justify-between">
          <span className="text-sm text-gray-800">Hotel ABC</span>
          {/* <div className="bg-yellow-400 rounded-lg flex px-2 text-sm text-white">
            🥦
          </div> */}
          <div className="bg-blue-600 rounded-lg text-teal-50 px-1 ms-1 ps-2 font-bold ">
            4.2⭐
          </div>
        </div>
        <div className="text-sm text-gray-700 mb-2">
          Lettuce, Apple, Orange, Avocado
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-lg font-bold text-green-600 mt-1">
            ₹ {totalPrice.toFixed(2)}
          </span>
          <Counter value={quantity} onChange={setQuantity} />
        </div>
        <button className="w-full mt-2 bg-teal-700 hover:bg-teal-800 text-teal-50 py-2 rounded-lg text-center">
          Add to Dish
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
// const FoodCard = () => {
//   return (
//     <div className="w-64 h-80 m-2 p-2 bg-teal-50 shadow-lg rounded-lg flex flex-col hover:border-orange-500 border-2 border-teal-50">
//       <div className="h-36 object-cover m-2 bg-orange-400 rounded-lg">
//         <div className="relative top-2 left-2 h-5 w-14 rounded-md bg-rose-700 text-xs text-teal-50 font-semibold flex items-center justify-center">
//           50% off
//         </div>
//       </div>
//       <div className="absolute top-8 left-8 h-5 w-16 rounded-lg bg-red-500"></div>
//       <div className="p-2">
//         <div className="flex mb-2 justify-between">
//           <span className="text-lg font-bold">Tasty Vegetable Salad</span>
//           <div className="bg-blue-600 rounded-lg text-teal-50 px-2 ms-2 font-bold mt-1">
//             4.2⭐
//           </div>
//         </div>
//         <div className="flex mb-1 justify-between">
//           <span className="text-sm text-gray-800">Hotel ABC</span>
//           <div className="bg-yellow-400 rounded-lg flex px-2 text-sm text-white">
//             🥦
//           </div>
//         </div>
//         <div className="text-sm text-gray-700 mb-1">
//           Lettuce, Apple, Orange, Avocado
//         </div>
//         <div className="flex items-center justify-between mb-1">
//           <span className="text-lg font-bold text-green-600 mt-1">$17.99</span>
//           <div className="flex items-center">
//             <button className="w-6 h-6 mt-1 flex items-center justify-center bg-orange-500 rounded-full text-xs text-teal-50">
//               -
//             </button>
//             <span className="mx-3 mt-1">1</span>
//             <button className="w-6 h-6 flex mt-1 items-center justify-center bg-orange-500 rounded-full text-xs text-teal-50">
//               +
//             </button>
//           </div>
//         </div>
//         <button className="w-full mt-2 bg-teal-700 text-teal-50 py-2 rounded-lg text-center">
//           Add to Dish
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FoodCard;