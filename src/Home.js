import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_ft._CB404804383_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id={111111}
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={11.99}
            image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id={222222}
            title="Kenwood KMC011 5 Quart Chef Titanium Kitchen Machine, Stainless Steel"
            price={499.99}
            image="https://m.media-amazon.com/images/I/71kj5nomj0L._AC_UY218_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id={333333}
            title="SAMSUNG Gear Fit2 Pro Smartwatch Fitness Band (Large), Liquid Black"
            price={289.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/51Oicwj+hAL._AC_UY218_.jpg"
          />
          <Product
            id={444444}
            title="Echo Plus (2nd Generation) with Amazon Smart Plug - Sandstone"
            price={89.99}
            image="https://m.media-amazon.com/images/I/61rZzCkxT0L._AC_UY218_.jpg"
            rating={3}
          />
          <Product
            id={555555}
            title="New Apple iPad Pro (12.9-inch, Wi-Fi + Cellular, 512GB) - Space Gray (4th Generation)"
            price={1499.87}
            image="https://m.media-amazon.com/images/I/81Pi4nhjlwL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id={666666}
            title="Samsung 49-Inch CRG9 Curved Gaming Monitor (LC49RG90SSNXZA) – 120Hz Refresh, Ultrawide Screen "
            price={1480.87}
            image="https://m.media-amazon.com/images/I/71916r38cNL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
