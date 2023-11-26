import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controller/authController.js";
import { isSeller, requireSingin } from "../middlewares/authMiddleware.js";
//router object
const router = express.Router();

//routing
//register||method post
router.post("/register", registerController);

//login || method POST
router.post("/login", loginController);

//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);

// test route
router.get("/test", requireSingin, isSeller, testController);

//Protected route auth
router.get("/user-auth", requireSingin, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected Admin route auth
router.get("/seller-auth", requireSingin, isSeller, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSingin, updateProfileController);

//orders
router.get("/orders", requireSingin, getOrdersController);

//all orders
router.get("/all-orders", requireSingin, isSeller, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSingin,
  isSeller,
  orderStatusController
);

export default router;
