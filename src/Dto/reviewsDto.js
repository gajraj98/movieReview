import express, { response } from "express"
import dao from "../Dao/reviewsDao.js"
const routes = express.Router();
export default class reviewsDto{
    static async getReview(req,res,next){
        try{
               const reviews = await dao.getReviews();
               if(reviews){
                res.send(reviews);
               }
               else{
                res.status(404).send("No review found");
               }
           }
           catch(e){
              console.log(e.message);
              res.status(500).send(e.error);
           }
    }
    static async getReviewById(req,res,next){
        const id = req.params.id | {};
          try{
              const reviews = await dao.getReviewById(id);
              if(reviews){
               res.send(reviews);
              }
              else{
               res.status(404).send("No review found");
              }
          }
          catch(e){
             console.log(e.message);
             res.status(500).send(e.message);
          }
   }
    static async addReviews(req,res,next){
        try{
            const movieId = req.body.movieId;
            const review = req.body.review;
            const user = req.body.user;
            const response = await dao.addReviews(
                movieId,
                review,
                user
            );
            res.status(202).send("Success");
        }
        catch(e){
            res.status(500).send(e.message);
        }
    }
    static async updateReview(req,res,next){
        try{
            const id = req.params.id;
            const review = req.body.review;
            const user = req.body.user;
            const response = await dao.updateReview(
                id,
                review,
                user
            )
            var {error} = response;
            if(error){
                res.status(400).send(error);
            }
            res.status(202).send("Updated Successfully");
        }
        catch(e){
            res.status(500).send(e.message);
        }
    }
    static async deleteReview(req,res,next){
        try{
            const id = req.params.id;
            const response = await dao.deleteReview(id);
            res.send("Deleted Successfully");
        }
        catch(e){
            res.status(500).send(e.message);
        }
    }
}