import { CDN_RES_IMG } from "../utility/constants";

const RestaurantCard = (restaurantData) => {
    //console.log(restaurantData.resData);
    const {cloudinaryImageId, name, avgRating, cuisines, areaName, sla} = restaurantData?.resData?.info;
    return (
        <div className="res-card">
            <img src={`${CDN_RES_IMG}/${cloudinaryImageId}`} alt={name}/>
            <div className="res-card-content">
                <h3>{name}</h3>
                <h4>★ {avgRating} • {sla.slaString}</h4>
                <p>{cuisines.join(", ")}</p>
                <p>{areaName}</p>
            </div>
        </div>
    );
}

export default RestaurantCard;