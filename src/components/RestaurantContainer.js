import { useState } from "react";
import RestaurantCard from "./RestaurantCard";

const RestaurantContainer = ({reslist}) => {
    const [restaurantList, setRestaurantList] = useState(reslist);

    return (
        <div>
            <div className="res-user-config">
                <button onClick={()=>{
                    const filteredRestaurantList = restaurantList.filter((restaurant => restaurant.rating >= 4.5));
                    setRestaurantList(filteredRestaurantList);
                }}>
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
                {
                    restaurantList.map(restaurant => {return <RestaurantCard key={restaurant.id} resData={restaurant}/>})
                }
            </div>
        </div>
    );
}

export default RestaurantContainer;