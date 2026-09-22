import RestaurantCard from "./RestaurantCard";

const RestaurantContainer = ({reslist}) => {
    return (
        <div className="res-container">{
            reslist.map(restaurant => {return <RestaurantCard key={restaurant.id} resData={restaurant}/>})}
        </div>
    );
}

export default RestaurantContainer;