import express from "express";
import { isSeller, requireSingin } from "../middlewares/authMiddleware.js";
import {
  createCategoryController,
  updateCategoryController,
  categoryControlller,
  deleteCategoryController,
  singleCategoryController,
} from "../controller/categoryController.js";

const router = express.Router();

//routes
//create-category
router.post(
  "/create-category",
  requireSingin,
  isSeller,
  createCategoryController
);

//update category
router.put(
  "/update-category/:id",
  requireSingin,
  isSeller,
  updateCategoryController
);

//getALl category
router.get("/get-category", categoryControlller);

//single category
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete(
  "/delete-category/:id",
  requireSingin,
  isSeller,
  deleteCategoryController
);

export default router;
