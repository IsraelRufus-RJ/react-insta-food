import { CDN_FOOD_IMG } from "../utility/constants";

const PopularFoodCarousal = (props) => {
    console.log(props);
    return(
        <>
          <h1>What's on your mind?</h1>
          <div className="banner-first">  
            {
              props.imgCarsoul.map((m, idx) => {return (
              <div key={idx} className="popular-foods">
                <img src={`${CDN_FOOD_IMG}/${m.imageId}`}/>
              </div>) })
            }
          <hr/>
          </div>
        </>
    );
}

export default PopularFoodCarousal;