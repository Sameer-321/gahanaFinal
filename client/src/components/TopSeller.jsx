import React from "react";

const TopSeller = () => {
  const images = [
    {
      id: 1,
      alt: "",
      img: "https://images.unsplash.com/photo-1505533321630-975218a5f66f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
      style: "",
    },
    {
      id: 2,
      alt: "",
      img: "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    },
    {
      id: 3,
      alt: "",
      img: "https://images.unsplash.com/photo-1530076886461-ce58ea8abe24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    },
    {
      id: 4,
      alt: "",
      img: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    },
    {
      id: 5,
      alt: "",
      img: "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    },
    { id: 6, alt: "", img: "source" },
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
        className="grid min-w-[200px] min-h-[100px] max-h-[600px] max-w-[1400px] 
                       gap-8 p-6
                      mx-auto my-10 sm:grid-cols-2 sm:grid-rows-3 md:grid-rows-2 md:grid-cols-6"
      >
        <img
          src="https://images.unsplash.com/photo-1505533321630-975218a5f66f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
          alt="a"
          className="object-cover w-full h-full  mx-auto md:row-span-2 md:col-span-2"
        />
        <img
          src="https://images.unsplash.com/photo-1626808642875-0aa545482dfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
          alt="b"
          className="object-cover w-full h-full md:col-span-2 "
        />

        <img
          src="https://images.unsplash.com/photo-1530076886461-ce58ea8abe24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
          alt="c"
          className="object-cover w-full h-full md:row-span-2 md:col-span-2 "
        />

        <img
          src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
          alt="d"
          className="object-cover w-full h-full md:col-span-1"
        />

        <img
          src="https://images.unsplash.com/photo-1593696954577-ab3d39317b97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
          alt="e"
          className="object-cover w-full h-full sm:col-span-2 md:col-span-1 "
        />
      </div>
    </div>
  );
};

export default TopSeller;
