import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../../Utils/useOnline";
import { filterData } from "../../Utils/helper";
import userContextData from "../../Utils/userContext";
import { useSelector } from "react-redux";


const Title = () => (
  <a href="/">
    {" "}
    <img
      className="logo"
      alt="Logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJG3kMcrgjZ3lKcqQkzU_LqoCYKcTvtDBr3tj3PQReeA&s"
    />
  </a>
);

// const [filteredRestaurant,setFilteredRestaurant]=useState([]);
const HeaderComponent = (props) => {
  // console.log(props.setMaal, "--props");
  const isOnline = useOnline();

  // console.log(props);
  const [IsLogin, setLogin] = useState(true);
  const contextData=useContext(userContextData);
  console.log(contextData);

  const cartItems=useSelector((store)=> store.cart.items);  // subscribing to the store  using a selecctor 

  return (
    <div className="header" style={{}}>
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            {" "}
            {/* <div className="search-container">
              <input
                type="text"
                className="search-input"
                placeholder="Search restaurant"
                // value={searchInput}
                // onChange={(e) => {
                //   setSearchInput(e.target.value);
                // }}
              />
              <button
                className="search-btn btn-primary "
                // onClick={() => {
                //   const data = filterData(searchInput, allResturants);
                //   setFilteredRestaurant(data);
                // }}
              >
                Search
              </button>
            </div> */}
          </li>
          <Link to="/">
            {" "}
            <li className=" my-3 mx-4 ">
              <i className="fa-solid fa-house"></i> Home
            </li>{" "}
          </Link>
          <Link to="/about">
            <li className="my-3 mx-4 ">
              <i className="fa-solid fa-address-card"> </i> About
            </li>
          </Link>
          <Link to="/contact">
            {" "}
            <li className="my-3 mx-4 ">
              <i className="fa-solid fa-address-book"></i> Contact
            </li>
          </Link>
          <Link to="/cart">
          <li className="my-3 mx-4 ">
            {" "}
            <i className="fa-solid fa-cart-shopping"></i> Cart ({cartItems.length})
          </li>
          </Link>
          <li>
            {" "}
            {IsLogin ? (
              <button
                className="btn-primary rounded ml-5 my-3 mx-2"
                onClick={() => {
                  setLogin(false);
                }}
              >
                Login
              </button>
            ) : (
              <button
                className="btn-danger rounded ml-5 my-3 mx-2"
                onClick={() => {
                  setLogin(true);
                }}
              >
                LogOut
              </button>
            )}
          </li>
          <li className="my-3 mx-1 ">({contextData.loggedInUser})</li>
        </ul>
      </div>
      {/* <h1>{isOnline?"🟢":"🔴"}</h1> */}
    </div>
  );
};
export default HeaderComponent;
