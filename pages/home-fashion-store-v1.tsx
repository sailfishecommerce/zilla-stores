import dynamic from "next/dynamic";
import React from "react";
//import SliderApp from "../component/Carousel";
import Banners from "../component/Banners";
import FeaturedCategory from "../component/FeaturedCategory";
import InfoCards from "../component/InfoCards";
import PopularCategories from "../component/PopularCategories";
import ShopByBrand from "../component/ShopByBrand";
import TrendingProducts from "../component/TrendingProducts";
import FashionLayout from "../layout/FashionLayout";

const SliderApp = dynamic(() => import("../component/Carousel"), {
    ssr: false,
});

const Slider = dynamic(() => import("../component/Slider"), {
    ssr: false,
});

export default function HomeFashionStore() {
    return (
        <FashionLayout title="Home fashion store">
            <>
                <Slider />
                {/*<SliderApp />*/}
                <PopularCategories />
                <TrendingProducts />
                <Banners />
                <FeaturedCategory />
                <ShopByBrand />
                <InfoCards />
            </>
        </FashionLayout>
    );
}
