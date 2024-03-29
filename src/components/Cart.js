import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import {clearCart} from "../../Utils/cartSlice"

const cart =()=>{
    const dispatch=useDispatch();
    const handleClearCart = () =>{
        dispatch(clearCart());
    }

    const cartItems=useSelector((store)=> store.cart.items);
    return(<div className="Cart-div fw-bold text-center ">
        <div className="d-flex justify-content-center ">
        <h2>Cart </h2>
        <button className=" mx-5 rounded border bg-secondary" onClick={handleClearCart}>Clear cart </button>
        </div>
        <div className="col-6 mx-auto  border">
        <ItemList items={cartItems} />
        </div>
    </div>)
}
export default cart;