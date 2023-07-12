import React from "react";

const TopSeller = () => {
  const images = [
    {
      id: 1,
      alt: "a",
      style: "relative w-full h-full  mx-auto md:row-span-2 md:col-span-2",
      img: "https://images.unsplash.com/photo-1505533321630-975218a5f66f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    },
    {
      id: 2,
      alt: "b",
      style: "relative w-full h-full md:col-span-2 ",
      img: "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    },
    {
      id: 3,
      alt: "c",
      style: "relative w-full h-full md:row-span-2 md:col-span-2",
      img: "https://images.unsplash.com/photo-1530076886461-ce58ea8abe24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    },
    {
      id: 4,
      alt: "d",
      style: "relative w-full h-full md:col-span-1",
      img: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    },
    {
      id: 5,
      alt: "e",
      style: "relative w-full h-full sm:col-span-2 md:col-span-1",
      img: "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    },
  ];
  return (
    <div className=" w-full my-10">
      {/* top bar */}
      <div className="text-center">
        {/* header */}
        <h1 className="text-[#832729] font-semibold text-5xl sm:text-6xl md:text-7xl md:p-4 my-2 md:my-4 ">
          Top Seller
        </h1>

        <p className="p-3">
          Check out the products that our customers love the most
        </p>
        {/* border */}
      </div>
      <div className="border-t-[1px] border-red-500 my-3" />

      {/* grid images */}
      <div
        className="grid min-w-[200px] min-h-[100px] sm:max-h-[600px] sm:max-w-[1400px] 
                       gap-4 p-6 mx-auto my-10 sm:grid-cols-2 sm:grid-rows-3 
                       md:grid-rows-2 md:grid-cols-6"
      >
        {images.map(({ id, alt, style, img }) => (
          <div className={style}>
            <img
              key={id}
              alt={alt}
              src={img}
              className="w-full h-full object-cover"
            />
            <div className="w-full h-full absolute bg-black/30 top-0 left-0 index-20" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSeller;
