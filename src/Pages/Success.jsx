import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

const Success = () => {
  const [loading, setLoading] = useState(true);
  const Navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        {loading ? (
          <PropagateLoader color="#ff8311" />
        ) : (
          <div className="flex flex-col items-center justify-center h-screen">
            <h2 className=" text-3xl font-semibold mb-4">
              Order Successfull..!!!
            </h2>

            <p>Thankyou for choosing FoodBuddy</p>
            <button
              className="text-sm p-2 text-white bg-orange-600 rounded-2xl mt-4"
              onClick={() => Navigate("/")}
            >
              Back to Home
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Success;
