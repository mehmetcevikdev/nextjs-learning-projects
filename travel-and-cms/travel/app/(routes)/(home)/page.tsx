import RecentProduct from "@/components/sections/recent/RecentProduct";
import Hero from "./_components/Hero/Hero";
import SectionAds from "./_components/Sections/SectionAds";
import SectionBlog from "./_components/Sections/SectionBLog";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="min-h-24"></div>
      <SectionAds />
      <SectionBlog />
      <div className="min-h-24"></div>
      <RecentProduct />
    </div>
  );
}
