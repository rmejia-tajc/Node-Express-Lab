// import the express package
const express = require('express');

const Posts = require('../data/db.js');

const router = express.Router(); // notice the Uppercase R


// all these below, only run if the url has /api/posts in it

//the C in CRUD: CREATE
router.post('/', async (req, res) => {

    if (!req.body.title || !req.body.contents) {
        res.status(400).json({ errorMessage: "Please provide title and contents for the post." });
    } else {    
        try {
            const post = await Posts.insert(req.body);
            res.status(201).json(post);
        } catch (error) {
            //log error to database
            console.log(error);
            res.status(500).json({ error: "There was an error while saving the post to the database" });
        }
    }
});

//the R in CRUD: READ
router.get('/', async (req, res) => {
    try {
        const posts = await Posts.find(req.query);
        res.status(200).json(posts);
    } catch (error) {
        // log error to database
        console.log(error);
        res.status(500).json({ error: "The posts information could not be retrieved." });
    }
});









module.exports = router;
