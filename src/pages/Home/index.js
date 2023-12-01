import AppCard from "./AppCard";
import BookmarkCard from "./BookmarkCard";
import FeaturedNews from "./FeaturedNews";
import PrayerTime from "./PrayerTime";

const Home = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <AppCard />
      <PrayerTime />
      <FeaturedNews />
      <BookmarkCard />
    </div>
  );
};

export default Home;