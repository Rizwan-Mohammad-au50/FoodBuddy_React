import React from "react";
import FItemsCard from "./FItemsCard";
import FItemsData from "../Data/FItemsData";
import toast, {Toaster} from "react-hot-toast";
import { useSelector } from "react-redux";


const FItems = () => {
  const category = useSelector((state) => state.category.category)
  const search = useSelector((state) => state.search.search)


  const handleToast = (name) => {
    toast.success(`${name} added to cart`);
  }
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex flex-wrap gap-10 justify-center items-center lg:justify-start mx-6 my-10">
        {
          FItemsData.filter((foodItem) => {
            if(category === "All"){
              // return foodItem;
              return foodItem.name.toLowerCase().includes(search.toLowerCase());
            }
            else{
              return category === foodItem.category && foodItem.name.toLowerCase().includes(search.toLowerCase());
              
            }
          }).map((foodItem)=> (
            <FItemsCard
              key={foodItem.id}
              id={foodItem.id}
              name={foodItem.name}
              image={foodItem.img}
              price={foodItem.price}
              desc={foodItem.desc}
              rating={foodItem.rating}
              handleToast={handleToast}
            />
          ))
        }
        {/* {FItemsData.map((foodItem) => {
          
          const handleToast = (name) => {
            toast.success(`${name} added to cart`);
          }

          return (
            <FItemsCard
              key={foodItem.id}
              id={foodItem.id}
              name={foodItem.name}
              image={foodItem.img}
              price={foodItem.price}
              desc={foodItem.desc}
              rating={foodItem.rating}
              handleToast={handleToast}
            />
          );
        })} */}
      </div>
    </>
  );
};

export default FItems;
