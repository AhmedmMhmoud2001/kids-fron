import { useState, useEffect } from 'react';
import BrandsSection from '../components/sections/BrandsSection';
import CategoriesSection from '../components/sections/CategoriesSection';
import BestSellersSection from '../components/sections/BestSellersSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import HomeHeroSwiper from '../components/sections/HomeHeroSwiper';
import ProductQuickView from '../components/product/ProductQuickView';
import { fetchCategories } from '../api/categories';
import { fetchBestSellers } from '../api/products';
import { useApp } from '../context/AppContext';
import { applyHomeCategoryImages } from '../utils/homeCategoryImages';

import banner1 from '../assets/banner/ChatGPT Image Jun 6, 2026, 04_27_35 PM.png';
import banner2 from '../assets/banner/ChatGPT Image Jun 6, 2026, 04_27_19 PM.png';

const heroSlides = [
  { id: 1, image: banner1, alt: 'Kids & Co. summer collection' },
  { id: 2, image: banner2, alt: 'Kids & Co. new arrivals' },
];

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [categories, setCategories] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);
  const { setAudience } = useApp();

  useEffect(() => {
    setAudience('KIDS');

    const loadHomeData = async () => {
      try {
        const [catsRes, bestRes] = await Promise.all([
          fetchCategories('KIDS'),
          fetchBestSellers('KIDS')
        ]);
        setCategories(applyHomeCategoryImages(catsRes.data || []));
        setBestSellers(bestRes.data || []);
      } catch (err) {
        console.error("Error loading home data:", err);
      }
    };
    loadHomeData();
  }, [setAudience]);

  return (
    <div>
      <HomeHeroSwiper slides={heroSlides} link="/shop?audience=KIDS" />

      <div className="container mx-auto">
        <BrandsSection />

        <CategoriesSection
          categories={categories}
          pageSize={6}
        />

        <BestSellersSection
          products={bestSellers}
          onProductSelect={setSelectedProduct}
          moreLink="/shop?audience=KIDS"
        />

        <FeaturesSection />

        {selectedProduct && (
          <ProductQuickView
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
