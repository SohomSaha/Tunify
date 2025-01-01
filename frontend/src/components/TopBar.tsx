import {
  SignedIn,
  SignedOut,
  SignOutButton,
  UserButton,
} from "@clerk/clerk-react";
import { LayoutDashboardIcon } from "lucide-react";
import { Link } from "react-router-dom";
import SignInOAuthButtons from "./SignInOAuthButtons";
import { useAuthStore } from "@/stores/useAuthStore";
export const TopBar = () => {
  const { isAdmin } = useAuthStore();
  return (
    <div className="flex justify-between items-center p-4 sticky top-0 bg-zinc-900/75 backdrop-blur-md z-10 rounded-md">
      <div className="flex gap-2 items-center">
        <img src="/spotify.png" alt="Tunify_logo" className="w-8 h-8"/>
        Tunify
        </div>
      <div className="flex gap-6 items-center">
        {isAdmin && (
          <div className="flex flex-col items-center">
            <Link
              to={"/admin"}
              className="flex items-center px-4 py-2 bg-zinc-800 text-white rounded-md hover:bg-emerald-600"
            >
              <LayoutDashboardIcon className="size-4 mr-2" /> Admin Dashboard
            </Link>
          </div>
        )}

        <SignedIn>
          <SignOutButton/>
        </SignedIn>

        <SignedOut>
          <SignInOAuthButtons />
        </SignedOut>
        <UserButton />
      </div>
    </div>
  );
};
