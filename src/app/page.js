import CustomerReviews from "@/components/CustomerReviews ";
import HeroBanner from "@/components/HeroBanner";
import OurAchievements from "@/components/OurAchievements ";
import WhyChooseUs from "@/components/WhyChooseUs ";
import Image from "next/image";

export default function Home() {
  return (
    <div className="py-20">
      <HeroBanner></HeroBanner>
      <WhyChooseUs />
      <OurAchievements />
      <CustomerReviews/>
    </div>
  );
}
