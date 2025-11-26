import HeroBanner from "@/components/HeroBanner";
import OurAchievements from "@/components/OurAchievements ";
import WhyChooseUs from "@/components/WhyChooseUs ";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" ">
      <HeroBanner></HeroBanner>
      <WhyChooseUs />
      <OurAchievements/>
    </div>
  );
}
