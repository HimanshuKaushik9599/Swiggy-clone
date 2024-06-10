import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import {
  Link,
  Navigate,
  useNavigate,
  useOutletContext,
} from "react-router-dom";
import useOnline from "../../Utils/useOnline";
import { filterData } from "../../Utils/helper";
import { useRestaurantList } from "../../Utils/useRestaurantList";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../Utils/userSlice";

// Config Driven

const Body = (props) => {
  const [setMaal] = useOutletContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log("hello hiamsh");

  const [searchInput, setSearchInput] = useState(""); // To create State variable
  const { allRestaurants, filteredRestaurant, Filter } = useRestaurantList();

  let data = [];

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1> Offline please check your internet connection!!!</h1>;
  }
  // {setMaal("World")}

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;

        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        // navigate("/");
      } else {
        // User is signed out
        dispatch(removeUser());
        // navigate("/");
      }
    });
  }, []);
  const userName = useSelector((store) => store.user);
  // console.log(userName);

  return (
    <div className="body">
      {allRestaurants && allRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <>
          <div className="search-container d-flex">
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
            {userName && (
              <h5 className=" px-3 mt-2 username-font">
                Hello {userName.displayName} Today what you want to eat !!
              </h5>
            )}{" "}
            {/* {console.log("himanshu 2")} */}
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
