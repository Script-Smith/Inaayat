import CategorySection from "@/components/sections/CategorySection";
import RightChoiceSection from "@/components/sections/ChoiceSection";
import GiftSection from "@/components/sections/GiftSection";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedProducts from "@/components/sections/ProductSection";
import TestimonialCarousel from "@/components/sections/TestiSection";
import Footer from "@/components/shared/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <RightChoiceSection/>
      <GiftSection/>
      <TestimonialCarousel/>
      <Footer/>
    </>
  );
};

export default Home;