import { SignedIn, SignedOut, SignOutButton } from "@clerk/clerk-react";
import { LayoutDashboardIcon } from "lucide-react";
import { Link } from "react-router-dom";
import  SignInOAuthButtons  from "./SignInOAuthButtons";
export const TopBar = () => {
    const isAdmin = false;
  return (
    <div className="flex justify-between items-center p-4 sticky top-0 bg-zinc-900/75 backdrop-blur-md z-10">
        <div className="flex gap-2 items-center">
        Tunify
        </div>
        <div className="flex gap-4 items-center">
        {isAdmin && (
            <Link to={'/admin'}>
               <LayoutDashboardIcon className="size-4 mr-2" /> 
                Admin Dashboard
            </Link>
        )}

        <SignedIn>
            <SignOutButton />
        </SignedIn>

        <SignedOut>
            <SignInOAuthButtons />
        </SignedOut>

        </div>
        </div>
  )
}
