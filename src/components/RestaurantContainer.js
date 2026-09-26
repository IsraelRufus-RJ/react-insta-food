import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer"

const RestaurantContainer = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);

    console.log("restaurant Container Rendered");

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
        //const data = await fetch(`https://corsproxy.io/?key=98890&url=${encodeURIComponent("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8601863&lng=80.2287111&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")}`);
        const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8601863&lng=80.2287111&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
        const dataObj = await data.json();
        //console.log(dataObj.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        const restaurantList = dataObj?.data?.cards?.find((card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants)?.card?.card?.gridElements?.infoWithStyle?.restaurants || [] ; 
        
        console.log(restaurantList);
        
        setFilteredRestaurantList(restaurantList);
        setRestaurantList(restaurantList);
        
    }

    if(filteredRestaurantList.length === 0 && restaurantList.length === 0){
        return <Shimmer/>
    }
    
    return (
        <div>
            <div className="res-user-config">
                <div className="search-filter">
                    <div className="search-box">
                        <input  type="text" placeholder="search for Restaurants" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                        <button className="search-btn" onClick={()=>{
                        const filteredRestaurantList = restaurantList.filter((restaurant)=>{ console.log(restaurant.info.name); console.log(searchText);  return restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())});
                        console.log(filteredRestaurantList);
                        setFilteredRestaurantList(filteredRestaurantList);
                        }}> <span className="icon">⌕</span></button>
                    </div>
                </div>
                <div>
                    <button className="filter-btn" onClick={()=>{
                        const filteredRestaurantList = restaurantList.filter((restaurant => restaurant?.info?.avgRating >= 4.5));
                        setFilteredRestaurantList(filteredRestaurantList);
                    }}>
                        Top Rated Restaurant
                    </button>
                </div>
            </div>
            <div className="res-container">
                {
                    filteredRestaurantList.map((restaurant) => {return <RestaurantCard key={restaurant?.info?.id} resData={restaurant}/>})
                }
            </div>
        </div>
    );
}

export default RestaurantContainer;