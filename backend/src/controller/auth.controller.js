import { User } from "../models/user.model.js";

export const callback = async (req, res,next) => {
  try {
    const { id, firstName, lastName, imageUrl } = req.body;
    const user = await User.findOne({ clarkId: id });
    if (!user) {
      //signup
      await User.create({
        clerkId: id,
        fullName: `${firstName} ${lastName}`,
        imageUrl,
      });
    }
    res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
