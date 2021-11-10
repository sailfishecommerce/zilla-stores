import Banners from "../component/Banners";
import FeaturedCategory from "../component/FeaturedCategory";
import InfoCards from "../component/InfoCards";
import PopularCategories from "../component/PopularCategories";
import ShopByBrand from "../component/ShopByBrand";
import Slider from "../component/Slider";
import TrendingProducts from "../component/TrendingProducts";
import FashionLayout from "../layout/FashionLayout";

export default function HomeFashionStore() {
    return (
        <FashionLayout title="Home fashion store">
            <>
                <Slider />
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
