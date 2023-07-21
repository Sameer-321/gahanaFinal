import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import React from "react";

import first from "../assests/images/heroSection/1.jpg";
import second from "../assests/images/heroSection/2.jpg";
import third from "../assests/images/heroSection/3.jpg";
import fourth from "../assests/images/heroSection/4.jpg";
import fifth from "../assests/images/heroSection/5.jpg";
import seven from "../assests/images/heroSection/7.jpg";

const ShopByCategory = () => {
  const list = [
    {
      id: 1,
      src: first,
      name: "Gold Coins",
      ancor: "Explore",
    },
    {
      id: 2,
      src: second,
      name: "Earrings",
      ancor: "Explore",
    },
    {
      id: 1,
      src: third,
      name: "Pendants",
      ancor: "Explore",
    },
    {
      id: 1,
      src: fourth,
      name: "Finger Rings",
      ancor: "Explore",
    },
    {
      id: 1,
      src: fifth,
      name: "Mangal Sutra",
      ancor: "Explore",
    },
    {
      id: 1,
      src: seven,
      name: "Neckware",
      ancor: "Explore",
    },
    {
      id: 1,
      src: third,
      name: "Neckware",
      ancor: "Explore",
    },
    {
      id: 1,
      src: first,
      name: "Gold Coins",
      ancor: "Explore",
    },
    {
      id: 2,
      src: second,
      name: "Earrings",
      ancor: "Explore",
    },
    {
      id: 1,
      src: third,
      name: "Pendants",
      ancor: "Explore",
    },
    {
      id: 1,
      src: fourth,
      name: "Finger Rings",
      ancor: "Explore",
    },
    {
      id: 1,
      src: fifth,
      name: "Mangal Sutra",
      ancor: "Explore",
    },
  ];
  return (
    <div className="max-w-[1400px] mx-auto my-10">
      {/* top headers */}
      <div className="mx-auto text-center">
        {/* header */}
        <div className=" text-[#832729] text-3xl sm:text-4xl md:text-5xl md:p-4 my-2 md:my-4">
          Shop By Category
        </div>
        <div className="p-3 text-xl text-black/40  md:text-3xl sm:my-3 md:my-5">
          {" "}
          Browse through your favorite categories. We've got them all!
        </div>
        {/* border */}
        <div className="flex ">
          <div className="border-t-[2px] border-[#832729] w-[45%] my-5 sm:my-10" />
          <div></div>
          <svg
            className="mt-2 sm:mt-7 w-[10%]"
            width="82"
            height="25"
            viewBox="0 0 82 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M71.9403 3.4893C68.3665 3.4893 64.7927 4.91467 61.6159 7.54614C60.4247 8.4233 59.2996 9.51974 58.1745 10.5065C57.6451 10.9451 57.3141 11.9319 57.3803 12.9187C57.4465 15.3309 56.7847 17.6334 55.5934 19.1685C54.0712 21.471 52.0857 22.6771 50.0341 22.5674C49.1737 22.4578 48.3796 22.1289 47.5854 21.5806C47.2545 21.3613 46.8574 21.2517 46.5265 21.471C44.3425 23.006 42.0261 24.1025 39.6436 24.6507C36.3345 25.3085 33.0915 25.1989 29.981 22.8964C28.6574 22.0192 27.5323 20.5938 26.6057 18.7299C26.2086 17.9624 26.0101 17.8527 25.4806 18.4009C22.7672 21.1421 19.7228 23.1157 16.6122 24.1025C12.9722 25.1989 9.33223 25.5278 5.82459 23.1156C3.24349 21.3613 1.32423 18.6202 0.463869 14.1248C0.000595736 11.8223 -0.264156 9.41009 0.397663 7.10756C1.12566 4.47609 2.38312 2.5025 4.03767 1.5157C7.08204 -0.567549 10.1264 -0.677197 13.0384 2.2832C14.0973 3.48929 14.9577 5.13396 15.4872 7.10756C15.5534 7.32685 15.5533 7.54614 15.421 7.76543C15.421 7.76543 15.3548 7.76543 15.3548 7.87508C15.2224 8.09437 15.0239 8.09437 14.8915 7.87508C14.8253 7.76543 14.7591 7.65578 14.7591 7.54614C13.8326 4.36645 12.0457 2.06392 9.92788 1.62534C7.41296 0.748183 4.83188 1.73498 2.78024 4.36645C0.662415 6.77863 0.132968 11.7126 1.58897 15.2213C1.72133 15.5502 1.91987 15.8791 2.11842 16.2081C3.44206 18.7299 5.29514 20.2649 7.2806 20.8131C10.3911 21.471 13.5017 21.1421 16.4799 19.607C19.061 18.4009 21.5097 16.537 23.7599 14.2345C24.6203 13.3573 24.7526 12.8091 24.5541 11.1644C23.8261 5.35325 26.0763 1.18676 29.0545 0.309608C31.1723 -0.348258 33.2901 0.419248 35.077 2.2832C35.6726 2.94107 36.4668 3.16036 37.1286 2.61214C40.1068 0.748184 43.2836 -0.0193266 46.4603 0.419251C49.1738 0.748185 51.7549 1.62534 54.0712 4.25681C54.5345 4.80503 54.9978 5.46289 55.461 6.12076C55.7919 6.77863 56.3214 6.88828 56.7185 6.34005C58.3069 4.91468 59.8952 3.70858 61.5498 2.72178C65.1236 0.528894 69.0283 -0.128968 72.8007 0.748188C75.3156 1.18677 77.632 2.83143 79.6174 5.46289C81.1396 7.32685 82 10.3969 82 13.4669C81.9338 15.4405 81.4044 17.3045 80.544 18.7299C79.3527 20.9228 77.6982 22.2385 75.9113 22.6771C74.3229 23.006 72.7345 22.4578 71.4109 21.2517C71.1462 21.0324 71.1462 20.7035 71.2785 20.2649C71.4109 19.936 71.6094 19.8263 71.808 20.0456C72.9331 21.3613 74.3891 21.9096 75.7127 21.471C77.3011 21.142 78.8233 19.936 80.0145 18.072C81.7353 15.3309 81.7353 10.8355 80.0807 7.98472C79.9483 7.76543 79.7498 7.43649 79.5513 7.2172C78.0953 5.46289 76.3745 4.36645 74.5876 4.03752C73.7934 3.59894 72.8669 3.4893 71.9403 3.4893ZM27.2675 16.9756C28.1279 18.5106 29.253 19.4974 30.4443 20.1553C32.4959 21.0324 34.6137 21.3613 36.6654 20.9228C39.1141 20.4842 41.4966 19.4974 43.7468 17.9624C44.2101 17.6334 44.2101 17.6334 43.8792 17.0852C43.3497 16.208 42.8865 15.3309 42.357 14.4537C41.0334 12.1512 39.7759 9.84868 38.3861 7.87508C38.0552 7.32685 37.5257 7.21721 37.0625 7.65578C33.6872 10.1776 30.5105 13.7959 27.2675 16.9756ZM38.717 6.55934C40.7025 9.51974 42.4894 12.6994 44.2763 15.8791C44.9381 16.9756 45.0705 17.0852 45.9309 16.3177C48.909 13.7959 51.821 10.8355 54.6668 8.09436C55.2625 7.54614 55.2625 7.54614 54.6668 6.77863C53.4094 5.35325 51.9534 4.36645 50.4312 4.03752C47.7839 3.37965 45.1366 3.48929 42.5556 4.36645C41.2319 4.69538 39.9083 5.46289 38.717 6.55934ZM35.1432 3.70858C35.077 3.59894 35.077 3.59894 35.077 3.59894C33.3563 1.62534 31.1723 0.748186 29.1206 1.40605C26.6057 1.95428 24.8188 5.90148 25.1497 10.068C25.1497 10.3969 25.2159 10.7258 25.2821 11.0548C25.4806 12.4801 25.5468 12.4801 26.2748 11.7126C28.6574 9.4101 31.0399 6.99791 33.5548 5.02431C34.0843 4.58574 34.6137 4.14716 35.1432 3.70858ZM47.9163 20.5938C48.181 20.8131 48.3796 20.9228 48.5119 21.0324C51.1592 22.1289 53.9389 20.7035 55.7258 17.3045C56.4538 15.8791 56.7847 14.1248 56.7185 12.2609C53.8065 15.002 51.0269 17.9624 47.9163 20.5938Z"
              fill="#84292B"
            />
          </svg>
          <div className="border-t-[2px] border-[#832729] w-[45%] my-5 sm:my-10" />
        </div>
      </div>
      {/* products grid */}
      <div className=" grid grid-cols-2 gap-3 sm:gap-5 md:gap-7 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 lg:gap-7 xl:gap-7 mx-auto">
        {list.map(({ id, src, name }) => (
          <div
            key={id}
            className="w-full my-3 sm:my-4 md:my-5 px-2 sm:p-3 md:p-4"
          >
            {/* image */}

            <img
              alt={name}
              src={src}
              className="w-full h-[180px] object-cover"
            />
            {/* label for img products */}
            <div className="w-full  flex flex-col justify-center items-start bg-black/5 ">
              <h3 className="pt-2 px-1 lg:px-2 text-center text-[#832729] text-lg   ">
                {name}
              </h3>
              <div className="text-center w-full flex items-center justify-start px-2">
                <div className="text-black/50">Detail</div>
                <ArrowLongRightIcon className="w-[50px] h-[40px] text-blue-600 pt-2" />{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
