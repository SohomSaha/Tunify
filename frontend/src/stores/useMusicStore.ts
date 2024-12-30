import { axiosInstance } from "@/lib/axios";
import { Album, Song } from "@/types";
import { create } from "zustand";

interface MusicStore {
    albums: Album[];
    songs: Song[];
    isLoading: boolean;
    error: string | null;
    currentAlbum: Album | null;
    featuredSongs: Song[];
    madeForYouSongs: Song[];
    trendingSongs: Song[];

    fetchAlbums: () => Promise<void>;
    fetchAlbumsById: (id:String) => Promise<void>;
    fetchFeaturedSongs: () => Promise<void>;
    fetchMadeForYouSongs: () => Promise<void>;
    fetchTrendingSongs: () => Promise<void>;
}
export const useMusicStore = create<MusicStore>((set) => ({
  albums: [],
  songs: [],
  isLoading: false,
  error: null,
  currentAlbum: null,
  featuredSongs: [],
  madeForYouSongs: [],
  trendingSongs: [],

  fetchAlbums: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosInstance.get("/albums");
      set({ albums: response.data });
    } catch (error:any) {
        set({ error: error.message });
    }finally{
        set({ isLoading: false });
    }
  },

  fetchAlbumsById: async (id) => {
    set({isLoading:true,error:null});
    try {
      const response = await axiosInstance.get(`/albums/${id}`);
      set({currentAlbum:response.data});
    } catch (error:any) {
      set({error:error.message});
    }finally{
      set({isLoading:false});
    }
  },

  fetchFeaturedSongs: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosInstance.get("/songs/featured");
      //console.log(response.data)
      set({ featuredSongs: response.data });
    } catch (error:any) {
      set({ error: error.message });
    }finally{
      set({ isLoading: false });
    }
  },

  fetchMadeForYouSongs: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosInstance.get("/songs/made-for-you");
      set({ madeForYouSongs: response.data });
    } catch (error:any) {
      set({ error: error.message });
    }finally{
      set({ isLoading: false });
    }
  },

  fetchTrendingSongs: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosInstance.get("/songs/trending");
      set({ trendingSongs: response.data });
    } catch (error:any) {
      set({ error: error.message });
    }finally{
      set({ isLoading: false });
    }
  },

}));
