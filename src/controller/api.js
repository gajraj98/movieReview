import express from "express";
import dto from "../Dto/reviewsDto.js"
const routes = express.Router();


routes.get('/',dto.getReview);
routes.get("/:id",dto.getReviewById);
routes.post("/",dto.addReviews);
routes.put("/:id",dto.updateReview);
routes.delete("/:id",dto.deleteReview);
export default routes;