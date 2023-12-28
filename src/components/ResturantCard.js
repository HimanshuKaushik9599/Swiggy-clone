import {img_cdn,ResturantList} from "./constant";

const ResturantCard=(props)=>{
    return(

        <div className="card">
        <img src={img_cdn
    +props.restaurant.info.cloudinaryImageId} />
        <h2>{props.restaurant.info.name}</h2>
        <h3>{props.restaurant.info.cuisines.join(",")}</h3>
        <h4>{props.restaurant.info.avgRating}</h4>
    </div>
    )
} 
export default ResturantCard;