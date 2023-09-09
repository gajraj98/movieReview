import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let reviews;

export default class reviewsDao {
    static async injectDB(conn) {
        if (reviews) {
            return;
        }
        try {
            reviews = await conn.db('reviews').collection("reviews");
        }
        catch (e) {
            console.log(`${e}`);
        }
    }

    static async getReviews() {
           try{
            const reviewDoc = reviews.find({});
            return reviewDoc.toArray();
           }
           catch(e){
            console.log(e.message);
            return {error:e};
           }
    }
    static async getReviewById(id) {
        try{
         const reviewDoc = reviews.findOne({_id:new ObjectId(id)});
         return reviewDoc;
        }
        catch(e){
         console.log(e.message);
         return {error:e.message};
        }
 }
    static async addReviews(movieId, review, user) {
        try {
            const reviewDoc = {
                movieId: movieId,
                review: review,
                user: user
            }

            return reviews.insertOne(reviewDoc);
        }
        catch (e) {
            console.error(`${e}`);
            return { error: e.message }
        }
    }
    static async updateReview(id, review, user) {
        try {
            return reviews.updateOne(
                { _id:new ObjectId(id) },
                {
                    $set: {
                        review: review,
                        user: user
                    }
                }
            )
        }
        catch(e){
            console.log(`$e`)
            return {error:e.message}
        }
    }
    static async deleteReview(id) {
     try{
         reviews.deleteOne({_id: new ObjectId(id)});
     }
     catch(e){
        console.log(e.message);
        return {error:e};
     }
    }
}