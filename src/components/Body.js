import {ResturantList} from "./constant";
import ResturantCard from "./ResturantCard";
import {useState,useEffect} from "react";



function filterData(searchInput,resturants){
return resturants.filter((restaurant)=>restaurant.info.name.includes(searchInput));
}

// Config Driven 

const Body =()=>{

  // searchState is a loacl state variable
  const [searchInput,setSearchInput]=useState("");// To create State variable
  const [resturants ,setResturants]=useState(ResturantList);

  useEffect(()=>{
    //make api call here so that api will call only one time - on my page load 
    getResturant();
  },[])

  async function getResturant(){
  const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.1482612&lng=77.33316040000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json=await data.json();
  console.log(json);

  //optional chaining
  setResturants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }


    return(
      <>        
      <div className="search-container">
        <input type="text" className="search-input" placeholder="search" value={searchInput} onChange={(e)=>{ setSearchInput(e.target.value) }}/>
        <button className="seach-btn" onClick={()=>{
          const data=filterData(searchInput,resturants)
          setResturants(data);
        }}>Search</button>
      </div>
        <div className="restaurant-list">
          {
            resturants.map(restaurant=>{
              return    <ResturantCard restaurant={restaurant} key={restaurant.info.id}/>
  
            })
          }
   
        </div>
        </>
        );
  }

  export default Body;