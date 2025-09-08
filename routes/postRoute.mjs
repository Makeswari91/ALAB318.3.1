import express from 'express';
import {posts} from '../data/posts.mjs';
const router = express.Router();

// get all post route
router.get('/', (req,res)=>{
    res.json(posts);
}
)
router.get('/:id', (req,res)=>{
    const  post = posts.find((post) => post.id == req.params.id);
    if(post) res.json(post)
        else throw new Error(`User not found`);
})

export default router;