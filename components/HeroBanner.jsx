import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <div className="hero-banner-flex">
          <div className="text-flex-padding">
            <p className="beats-solo">{heroBanner.smallText}</p>
            <h3>{heroBanner.midText}</h3>
            <h1>{heroBanner.largeText1}</h1>
            <Link href={`/product/${heroBanner.product}`}>
              <button type="button">{heroBanner.buttonText}</button>
            </Link>
          </div>
          <div>
            <img
              src={urlFor(heroBanner.image)}
              alt="headphones"
              className="hero-banner-image"
            />
          </div>
        </div>

        <div>
          <div className="desc">
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
