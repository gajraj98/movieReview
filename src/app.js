import express from "express"
import bodyParser from "body-parser"
import routes from "./controller/api.js"
import dao from "./Dao/reviewsDao.js"
import mongodb from "mongodb"
const app = express();

app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());
app.use('/',routes);

const mongoClient = mongodb.MongoClient;
// const url  = "mongodb+srv://gajrajnitin201:<Gajraj@1234>@cluster0.nvu4uyb.mongodb.net/?retryWrites=true&w=majority"
// const url  = `mongodb+srv://gajrajnitin201:qTFbRBWXNsC3Xl35@cluster0.utfz4zc.mongodb.net/?retryWrites=true&w=majority`
const url =  `mongodb+srv://gajrajnitin201:qTFbRBWXNsC3Xl35@cluster0.vrawkki.mongodb.net/?retryWrites=true&w=majority`

mongoClient.connect(url , {
    maxPoolSize:50,
    wtimeoutMS: 2500,
    useNewUrlParser:true,
}).catch(e=> console.log(e))
.then( async client=>{
    await dao.injectDB(client);
    app.listen(5556,()=>{
        console.log("application started");
    })
})


