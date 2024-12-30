import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuthStore } from "@/stores/useAuthStore";
import { Loader, Music } from "lucide-react";
import DashBoardStats from "./components/DashBoardStats";
import Header from "./components/Header";
import SongsTabContent from "./components/SongsTabContent";
import AlbumsTabContent from "./components/AlbumsTabContent";
import { useEffect } from "react";
import { useMusicStore } from "@/stores/useMusicStore";

function AdminPage() {
  const { isAdmin, isLoading } = useAuthStore();
    const{ fetchAlbums,fetchSongs,fetchStats }=useMusicStore();
  useEffect(() => {
      fetchAlbums();
      fetchSongs();
      fetchStats();
  },[fetchAlbums,fetchSongs,fetchStats]);

  if (!isAdmin) return <div>Unauthorized</div>;
  if (isLoading)
    return <Loader size="16" className="text-emerald-500 animate-spin" />;
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-zinc-100 p-8">
        <Header />
        
        <DashBoardStats />

        <Tabs defaultValue="songs" className="space-y-6">
          <TabsList className="p-1 bg-zinc-800/50" >
            <TabsTrigger value="songs" className="data-[state=active]:bg-zinc-700">
                <Music  className="size-4 mr-2"/>
                Songs
            </TabsTrigger>
            <TabsTrigger value="albums" className="data-[state=active]:bg-zinc-700">
                <Music className="size-4 mr-2"/>
                Albums
            </TabsTrigger>
          </TabsList>
          <TabsContent value="songs">
            <SongsTabContent/>
          </TabsContent>
          <TabsContent value="albums">
           <AlbumsTabContent/>
          </TabsContent>
        </Tabs>

    </div>
  );
}

export default AdminPage;
