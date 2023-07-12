import React from "react";

const BestProducts = () => {
  return (
    <div className="my-12 w-full">
      {/* header */}
      <div className="mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl ">Best Product</h1>
        <p className="text-semibold">
          Customers satisfaction has been our greatest policy.
        </p>
      </div>
      {/* border */}
      <div className="border-t-[1px] border-red-500" />
      {/* main part */}
      <div
        className="mx-auto sm:h-[600px]  p-4 grid gap-8
                      sm:grid-cols-2 sm:grid-rows-1"
      >
        {/* LHS */}
        <div className="w-full h-full">
          <img
            className="w-full h-full object-cover "
            src="https://media.istockphoto.com/id/1326219888/photo/rani-har-bridal-jewellery.jpg?s=612x612&w=is&k=20&c=_EpSWqY518-ik32J7xfQslNzHxwjqK3HfomhpDuvNh4="
            alt="rani haar"
          />
        </div>

        {/* RHS */}
        <div className="w-full h-full relative ">
          <img
            className="w-full h-full object-cover"
            alt="best product"
            src="https://images.unsplash.com/photo-1541454337161-746ae6e34653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRoZW1lfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
          />
          <div className="absolute bg-black/30 top-0 left-0 w-full h-full z-10">
            <button className="absolute top-[50%] left-[50%] text-5xl text-white">
              overlay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestProducts;
