import BackgroundSection from "./main/home/sections/background-section";
import FeaturedSection from "./main/home/sections/featured-section";
import PostsSection from "./main/home/sections/posts-section";

export default function Home() {
  return (
    <div className="min-h-screen mx-auto container">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="container mx-auto">
          <BackgroundSection />
        </div>
        <FeaturedSection />
        <PostsSection />
      </main>
    </div>
  );
}
