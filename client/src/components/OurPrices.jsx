import React from "react";

const OurPrices = () => {
  const list = [
    {
      id: 1,
      name: "silver",
      price: "Rs.10,000",
      img: "https://images.unsplash.com/photo-1624365165348-442bdf12b0a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      name: "gold",
      price: "Rs.1,00,000",
      img: "https://images.unsplash.com/photo-1610375461246-83df859d849d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 3,
      name: "diamond",
      price: "Rs.1,00,000",
      img: "https://media.istockphoto.com/id/1225440611/photo/perfect-diamond-isolated-on-the-black.jpg?s=2048x2048&w=is&k=20&c=8KEEZTzKMtV5YWaxQ7ePuEAZb8DKTUByeg1uLcxd694=",
    },
  ];
  return (
    <div className="w-max-[1400px] my-6 sm:my-10">
      <div className="text-3xl sm:text-4xl md:text-5xl text-center font-semibold mx-auto sm:my-5 text-[#832729]">
        Our Prices
      </div>
      <div className="border-t-[2px] border-[#832729] w-full my-5 sm:my-10" />
      <div className=" grid sm:grid-cols-3 sm:gap-2 md:gap-5 mx-auto p-3 sm:p-5">
        {list.map(({ id, name, price, img }) => (
          <div key={id} className=" bg-black/5 mx-auto my-4">
            <div className="w-full h-full relative">
              {/* image */}
              <div className="w-[200px] h-[100px] relative">
                <img src={img} className="object-cover h-full w-full" />
                {/* overlay */}
                {/* <div className="absolute z-10 w-full h-full top-0 left-0 bg-black/10" /> */}
              </div>
              {/* price  section */}
              <div className=" w-[150px]  flex flex-col  text-center items-center justify-center mx-auto ">
                <div className=" w-full text-center  text-[#832729] p-1 font-semibold capitalize">
                  {name}
                </div>
                <div className=" w-full text-center  mx-auto p-1">
                  {price}
                  <span className="text-[#832729] font-semibold mx-auto">
                    {" "}
                    per
                  </span>{" "}
                  tola
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPrices;
