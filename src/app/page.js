import BestSellingProducts from "@/components/BestSellingProducts";
import CustomerReviews from "@/components/CustomerReviews ";
import HeroBanner from "@/components/HeroBanner";
import OurAchievements from "@/components/OurAchievements ";
import WhyChooseUs from "@/components/WhyChooseUs ";

export default function Home() {
  return (
    <div className="py-20">
      <HeroBanner/>
      <BestSellingProducts/>
      <WhyChooseUs />
      <OurAchievements />
      <CustomerReviews/>
    </div>
  );
}
