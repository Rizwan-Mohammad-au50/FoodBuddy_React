import React, { useEffect, useState } from "react";
import FItemsData from "../Data/FItemsData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/Slices/CategorySlice";

const MenuCat = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategory = () => {
    const uniqueCats = [...new Set(FItemsData.map((food) => food.category))];
    setCategories(uniqueCats);
    // console.log(categories)
  };

  useEffect(() => {
    listUniqueCategory();
  }, []);

  const dispatch = useDispatch();
  const selectedCat = useSelector((state) => state.category.category)

  return (
    <>
      <div className="ml-6">
        <h3 className="text-xl font-semibold">Find the best food</h3>
        <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-hidden">
          <button
          onClick={()=> dispatch(setCategory("All"))}
          className={`px-3 py-2 text-center bg-gray-200 font-bold rounded-lg cursor-pointer hover:bg-orange-400 hover:text-white ${selectedCat === "All" && "bg-orange-600 text-white"}`}>
            All
          </button>
          {
            categories.map((category,index) => {
                return (
                    <button 
                    onClick={()=> dispatch(setCategory(category))}
                    key={index} 
                    className={`px-3 py-2 text-center bg-gray-200 font-bold rounded-lg cursor-pointer hover:bg-orange-400 hover:text-white ${selectedCat === category && "bg-orange-600 text-white"}`}>
                        {category}
                    </button>
                )
            })
          }
        </div>
      </div>
    </>
  );
};

export default MenuCat;
