import { Router } from "express";
import multer from "multer";
import {
  addProfileImage,
  getUserInfo,
  login,
  logout,
  removeProfileImage,
  signup,
  updateProfile,
} from "~/controllers/auth";
import { verifyToken } from "~/middlewares/auth";

const authRoutes = Router();
const upload = multer({ dest: "uploads/profiles/" });

authRoutes.post("/signup", signup);
authRoutes.post("/login", login);
authRoutes.post("/logout", logout);
authRoutes.get("/userinfo", verifyToken, getUserInfo);
authRoutes.post("/update-profile", verifyToken, updateProfile);
authRoutes.post(
  "/add-profile-image",
  verifyToken,
  upload.single("profile-image"),
  addProfileImage,
);
authRoutes.delete("/remove-profile-image", verifyToken, removeProfileImage);

export default authRoutes;
