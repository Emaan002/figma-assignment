import Hero from "./components/Hero";
import RecentPost from "./components/Recentpost";
import '../app/globals.css'
import FeaturedWorks from "./components/Featuredwork";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-[#f5f5f5]">
      <Hero/>
      <RecentPost/>
      <FeaturedWorks/>
      <Footer/>
    </div>
)
};
