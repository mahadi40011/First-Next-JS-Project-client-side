import HeroBanner from "@/components/HeroBanner";
import WhyChooseUs from "@/components/WhyChooseUs ";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" ">
      <HeroBanner></HeroBanner>
      <WhyChooseUs/>
    </div>
  );
}
