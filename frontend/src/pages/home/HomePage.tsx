import { TopBar } from "@/components/TopBar";
import { useMusicStore } from "@/stores/useMusicStore";
import { useEffect,useState } from "react";
import FeaturedSection from "./components/FeaturedSection";
import { ScrollArea } from "@/components/ui/scroll-area";
import SectionGrid from "./components/SectionGrid";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { useUser } from "@clerk/clerk-react";
function HomePage() {
  const [username,setUsername] = useState("");
  const { user } = useUser();
  const {initializeQueue} = usePlayerStore();
  const [greeting, setGreeting] = useState("");
  const {
    featuredSongs,
    madeForYouSongs,
    trendingSongs,
    fetchFeaturedSongs,
    fetchMadeForYouSongs,
    fetchTrendingSongs,
    isLoading,
  } = useMusicStore();
  useEffect(() => {
    fetchFeaturedSongs();
    fetchMadeForYouSongs();
    fetchTrendingSongs();
  }, [fetchFeaturedSongs, fetchMadeForYouSongs, fetchTrendingSongs]);

  useEffect(() => {
    if (user) {
      const  name = " , "+user.firstName;
      setUsername(name);
    }
  }, [user]);

  useEffect(() => {
    if (madeForYouSongs.length > 0 && featuredSongs.length > 0 && trendingSongs.length > 0){
      const allSongs = [...madeForYouSongs, ...featuredSongs, ...trendingSongs];
      initializeQueue(allSongs);
    } 
  },[initializeQueue,madeForYouSongs,trendingSongs,featuredSongs]);

  useEffect(() => {
    const currentTime = new Date().getHours();
    if (currentTime < 12) {
      setGreeting("Good morning");
    } else if (currentTime < 17) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good evening");
    }
  },[]);

  return (
    <main className="min-h-screen rounded-md overflow-hidden bg-gradient-to-b from-zinc-800 to-zinc-900">
      <TopBar />
      <ScrollArea className="h-[calc(100vh-180px)]">
        <div className="p-4 sm:p-6">
          <h1 className="sm:text-3xl text-2xl font-bold mb-6">
            {greeting + username}
          </h1>
          <FeaturedSection />
          <div className="space-y-8">
            <SectionGrid
              title="Made for You"
              songs={madeForYouSongs}
              isLoading={isLoading}
            />
            <SectionGrid
              title="Trending"
              songs={trendingSongs}
              isLoading={isLoading}
            />
          </div>
        </div>
      </ScrollArea>
    </main>
  );
}

export default HomePage;
