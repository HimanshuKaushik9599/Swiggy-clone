import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategotry = ({ data, showItems, setShowIndex }) => {
  // console.log(data);
  // const[showItem,setShowItem]=useState(false);
  const handleclick = () => {
    // setShowItem(!showItem);
    setShowIndex();
  };
  return (
    <div className="w-100">
      <div
        className="    my-3 w-100  px-2 py-3  bg-light shadow-sm "
        onClick={handleclick}
      >
        <div className="d-flex justify-content-between">
          <span className="fw-bold">
            {data.title}({data?.itemCards.length}){" "}
          </span>
          <span>⬇️</span>
        </div>

        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategotry;
