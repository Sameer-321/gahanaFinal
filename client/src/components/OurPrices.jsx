import React from "react";

const OurPrices = () => {
  const list = [
    {
      id: 1,
      name: "silver",
      price: "Rs.10,000 per tola",
      img: "https://images.unsplash.com/photo-1624365165348-442bdf12b0a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      name: "gold",
      price: "Rs.1,00,000 per tola",
      img: "https://images.unsplash.com/photo-1610375461246-83df859d849d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 3,
      name: "diamond",
      price: "Rs.1,00,000 per tola",
      img: "https://media.istockphoto.com/id/1225440611/photo/perfect-diamond-isolated-on-the-black.jpg?s=2048x2048&w=is&k=20&c=8KEEZTzKMtV5YWaxQ7ePuEAZb8DKTUByeg1uLcxd694=",
    },
  ];
  return (
    <div className="max-w-[1400px]  mx-auto h-[70vh] my-10 sm:my-9 md:my-9">
      {/* header */}
      <div className=" flex flex-col">
        <h1 className="sm:p-2 text-5xl sm:text-6xl md:text-7xl font-semibold text-[#832729] text-center mx-auto ">
          Our Prices
        </h1>
        <p className="mx-auto text-xl m-3 sm:p-2">
          We offer the reasonable price compare to others
        </p>
      </div>
      {/* border by lines */}
      <div className="border-t-red-500 border-t-[1px] w-full mx-auto" />
      {/* price description section */}

      <div className=" mx-auto  ">
        <div className="flex flex-col sm:justify-center  md:flex-row md:justify-center p-2 sm:mx-auto md:my-12">
          {list.map(({ id, name, price, img }) => (
            <div className="bg-gray-100  md:mx-[30px] w-full my-5">
              <img className="object-cover" src={img} alt={name} />
              <div className="text-[#832729] text-center w-full font-semibold">
                <h3 className="capitalize  md:p-3">{name}</h3>
                <span className="text-black ">{price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPrices;
