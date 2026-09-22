import PopularFoodCarousal from "./PopularFoodCarousal";
import RestaurantContainer from "./RestaurantContainer";
import { restaurantList } from "../utility/restaurantMockData";
import { foodCarousalData } from "../utility/popularFoodsMockData"

const Body = () => {
    return(
        <div className="body-container">
            <PopularFoodCarousal imgCarsoul={foodCarousalData}/>
            <RestaurantContainer reslist={restaurantList}/>
        </div>
    );
}

export default Body;