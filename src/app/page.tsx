import BackgroundSection from "./main/home/sections/background-section";
import FeaturedSection from "./main/home/sections/featured-section";
import PostsSection from "./main/home/sections/posts-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className=" bg-[#f9f5ea] container mx-auto border rounded-md">
          <BackgroundSection />
        </div>
        <div className="mx-auto container">
          <FeaturedSection />
        </div>
        <div className="mx-auto container">
          <PostsSection />
        </div>
      </main>
    </div>
  );
}
