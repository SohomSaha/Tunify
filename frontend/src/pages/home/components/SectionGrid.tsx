import { Button } from "@/components/ui/button";
import SectionGridSkeleton from "@/skeleton/SectionGridSkeleton";
import { Song } from "@/types";
import PlayButton from "./PlayButton";

type SectionGridProps = {
  title: string;
  songs: Song[];
  isLoading: boolean;
};
export default function SectionGrid({
  title,
  songs,
  isLoading,
}: SectionGridProps) {
  if (isLoading) return <SectionGridSkeleton />;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4 ">
        <h2 className="text-xl sm:text-2xl font-bold ">{title}</h2>
        <Button
          className="text-sm text-zinc-400 hover:text-white"
          variant="link"
        >
          Show all
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {songs.map((song) => (
          <div
            key={song._id}
            className="bg-zinc-800/40 rounded-md hover:bg-zinc-700/40 transition-all group cursor-pointer"
          >
            <div className="relative mb-4">
              <div className="aspect-square rounded-md overflow-hidden shadow-lg">
                <img
                  src={song.imageUrl}
                  alt={song.title}
                  className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <PlayButton song={song} />
            </div>
            <h3 className="font-medium truncate m-2">{song.title}</h3>
            <p className="text-sm text-zinc-400 truncate m-2">{song.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
