import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnline from "../../Utils/useOnline";
import { filterData } from "../../Utils/helper";
import userContextData from "../../Utils/userContext";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../Utils/userSlice";
import { auth } from "../../Utils/firebase";
import { signOut } from "firebase/auth";

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
  // const [IsLogin, setLogin] = useState(true);
  const contextData=useContext(userContextData);
  // console.log(contextData);
  const navigate=useNavigate();
  const userAvailable=useSelector((store)=>store.user);
  const dispatch=useDispatch();
  // {console.log(userAvailable)}

  const cartItems=useSelector((store)=> store.cart.items);  // subscribing to the store  using a selecctor 

  const handleLogOut =()=>{
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      // An error happened.
    });
// dispatch(removeUser());
  }
  const userName=useSelector((store)=>store.user);


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
            {!userAvailable ? 
              <button
                className="btn-primary rounded ml-5 my-3 mx-2"
                onClick={() => {
                  // setLogin(false);
                  navigate("/login");
                }}
              >
                Login
              </button>
             :
               <button
                className="btn-danger rounded ml-5 my-3 mx-2"
                 onClick={handleLogOut}
                
              >
                LogOut
              </button> 
             } 
          </li>
          {/* <li className="my-3 mx-1 ">({userName.displayName})</li> */}
        </ul>
      </div>
      {/* <h1>{isOnline?"🟢":"🔴"}</h1> */}
    </div>
  );
};
export default HeaderComponent;
