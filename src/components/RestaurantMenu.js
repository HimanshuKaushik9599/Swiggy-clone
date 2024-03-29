import { useEffect, useState } from "react";
import useRestaurant from "../../Utils/useRestaurantMenu";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategotry from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  //how to read a dynamic url =useparams
  const { id } = useParams();
  const myrestaurant = useRestaurant();
  // console.log(myrestaurant);
  const { cuisines, name } =
    Object.keys(myrestaurant).length && myrestaurant.cards[0].card.card.info;
  // const{itemCards}=Object.keys(myrestaurant).length &&    myrestaurant.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
  //   console.log( myrestaurant.cards[2].groupedCard.cardGroupMap.REGULAR.cards);

  const categories =
    Object.keys(myrestaurant).length &&
    myrestaurant.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return !myrestaurant ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu d-flex justify-content-center w-100 ">
      <div className="text-center w-50">
        <h2>{name}</h2>
        <h4>{cuisines}</h4>
        {Array.isArray(categories) ? (
          categories.map((category, index) => (
            <RestaurantCategotry
              key={category.card.card.id}
              data={category.card.card}
              showItems={index == showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
            />
          ))
        ) : (
          <p>No categories found</p>
        )}
      </div>
    </div>
  );
};
export default RestaurantMenu;
