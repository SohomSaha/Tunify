import { clerkClient } from "@clerk/express";

export const protectRoute = async (req, res, next) => {
    if(!req.auth.userId){
        res.status(401).send("Unauthorized access");
    return;
    }
    next();
};

export const requireAdmin = async (req, res, next) => {
    try {
        const currentUser = await clerkClient.users.getUser(req.auth.userId);
        const isAdmin = process.env.ADMIN_EMAIL === currentUser.primaryEmailAddress?.emailAddress;
        if (!isAdmin) {
            res.status(403).send("Unauthorized access: You must be admin");
            return;
        }
        next();
    } catch (error) {
        console.error(error);
        next(error);
    }
}