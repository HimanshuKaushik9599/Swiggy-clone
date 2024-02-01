import ResturantCard from "./ResturantCard";
import { useState } from "react";
import Shimmer from "./shimmer";
import { Link, useOutletContext } from "react-router-dom";
import useOnline from "../../Utils/useOnline";
import { filterData } from "../../Utils/helper";
import { useRestaurantList } from "../../Utils/useRestaurantList";

// Config Driven

const Body = (props) => {
  const [setMaal] = useOutletContext();


  const [searchInput, setSearchInput] = useState(""); // To create State variable
  const { allRestaurants, filteredRestaurant, Filter } = useRestaurantList();
  
  let data = [];

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1> Offline please check your internet connection!!!</h1>;
  }
  // {setMaal("World")}

  return (
    <div className="body">

      {allRestaurants && allRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <>
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search"
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
            />
            <button
              className="search-btn btn-primary "
              onClick={() => {
                data = filterData(searchInput, allRestaurants);
                Filter(data);
              }}
            >
              Search
            </button>
          </div>
          <div className="restaurant-list">
            {filteredRestaurant &&
              filteredRestaurant.map((restaurant) => {
                return (
                  <Link
                    to={"/restaurant/" + restaurant.info.id}
                    key={restaurant.info.id}
                  >
                    <ResturantCard restaurant={restaurant} />
                  </Link>
                );
              })}
          </div>
        </>
      )}
    </div>
  );
};

export default Body;
