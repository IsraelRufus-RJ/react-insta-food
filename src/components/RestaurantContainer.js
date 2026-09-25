import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer"

const RestaurantContainer = () => {
    const [restaurantList, setRestaurantList] = useState([]);

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8601863&lng=80.2287111&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const dataObj = await data.json();
        //console.log(dataObj.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setRestaurantList(dataObj?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(restaurantList.length === 0){
        return <Shimmer/>
    }
    
    return (
        <div>
            <div className="res-user-config">
                <button onClick={()=>{
                    const filteredRestaurantList = restaurantList.filter((restaurant => restaurant?.info?.avgRating >= 4.5));
                    setRestaurantList(filteredRestaurantList);
                }}>
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
                {
                    restaurantList.map((restaurant) => {return <RestaurantCard key={restaurant?.info?.id} resData={restaurant}/>})
                }
            </div>
        </div>
    );
}

export default RestaurantContainer;