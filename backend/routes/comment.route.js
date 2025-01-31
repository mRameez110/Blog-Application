import express from "express"

const router = express.Router();


router.get("/a", (req,res)=>{
    res.status(200).send("Fine");
})


export default router;



