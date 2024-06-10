import { img_cdn, ResturantList } from "./constant";

const ResturantCard = (props) => {
  // console.log(props);
  return (
    <div className="card">
      <img src={img_cdn + props.restaurant.info.cloudinaryImageId} />
      <h5>{props.restaurant.info.name}</h5>
      <h6></h6>
      <h6 className="cusines">{props.restaurant.info.cuisines.join(",")}</h6>
      <h6 className="cusines">
        {props.restaurant.info.avgRating}
        <i className="fa-solid fa-star" style={{ color: "green" }}></i> Stars
      </h6>
      <h6>{props.restaurant.info.sla.lastMileTravelString}</h6>
    </div>
  );
};
export default ResturantCard;
