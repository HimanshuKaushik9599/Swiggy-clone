import { useEffect, useState } from "react";

export const useRestaurantList = (data) => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState(data);
  const[latitude,setlatitude]=useState(null);
  const[longitude,setlongitude]=useState(null);

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      // console.log(position.coords);
      setlatitude(position.coords.latitude);
      setlongitude(position.coords.longitude);
    });
  },[]);
  // console.log(longitude);
  // console.log(latitude);

  useEffect(() => {
    getRestaurant();
  }, [latitude,longitude]);

  async function getRestaurant() {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
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
