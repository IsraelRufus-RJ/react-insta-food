import { CDN_RES_IMG } from "../utility/constants";

const RestaurantCard = (restaurantData) => {
    const {imageId, name, rating, cuisines, location, estimatedTimeArrival} = restaurantData?.resData;
    return (
        <div className="res-card">
            <img src={`${CDN_RES_IMG}/${imageId}`} alt={name}/>
            <div className="res-card-content">
                <h3>{name}</h3>
                <h4>★ {rating} • {estimatedTimeArrival}</h4>
                <p>{cuisines.join(", ")}</p>
                <p>{location.split(",")[1]}</p>
            </div>
        </div>
    );
}

export default RestaurantCard;