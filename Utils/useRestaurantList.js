import { useEffect, useState } from "react";

export const useRestaurantList = (data) => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState(data);

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.1482612&lng=77.33316040000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      // console.log(json.data,"--------hi");

      setAllRestaurants(
        () =>
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
      );
      setFilteredRestaurant(
        () =>
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  }
  function Filter(data) {
    setFilteredRestaurant(data);
  }

  return { allRestaurants, filteredRestaurant, Filter };
};
