import { useDispatch } from "react-redux";
import { img_cdn } from "./constant";
import {addItem} from "../../Utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch=useDispatch();
  // console.log(items);
   const handleAddbutton = (items)=>{
    dispatch(addItem(items))
   }

  return (
    <div>
      {items.map((items) => (
        <div key={items.card.info.id} className="border-bottom px-3 d-flex justify-content-between mb-2 ">
          <div className=" py-3  ">
            <div className="d-flex justify-content-start ">
              <span className="fw-bold">{items.card.info.name}</span>

              <span className="px-2"> ₹{items.card.info.price / 100} </span>
            </div>
            <p className="d-flex justify-content-start text-xs ">
              {items.card.info.description}
            </p>
          </div>
          <div >
            <div className="position-absolute" >
            <button className=" mx-4  rounded bg-dark text-white" onClick={()=>handleAddbutton(items)}>Add +</button>

</div>
            <img
            src={img_cdn + items.card.info.imageId}
            className="custom-menu-image"
            alt="Loading"
          ></img>
          
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
