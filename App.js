import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <div>
    <h3 id="heading">Sri Lanka</h3>
</div>

const CardComponent = () => {
    return <div className="card">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2026/6/19/76333369-ea7c-4dd8-990e-a3c22defc234_1374812.jpg"/>
        <h2>{jsxHeading}</h2>
        <p>Despite its fame as a resplendent island and a leading tourist destination, the secret of Sri Lanka’s attraction lies with its people. The spice addicted, cricket crazy and tea drinking people of Sri Lanka are famed for big smiles and a bigger heart. With a culture enriched with three thousand years of knowledge, Buddhism and many a colonial traditions, the Sri Lankan society is a potpourri of religions and races different yet similar in many a ways.</p>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<div className="cards"><CardComponent/><CardComponent/><CardComponent/><CardComponent/><CardComponent/><CardComponent/><CardComponent/></div>);
