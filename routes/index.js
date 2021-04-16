const express = require('express');
const router = express.Router();
const MovieModel =  require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('index')
});

router.get('/movies', (req, res, next) => {
    MovieModel.find()
        .then((result) =>{
            //console.log(result)
            res.render('movies', {movies: result})
        })
        .catch((err) =>{
            console.log(err)
        })
});

router.get('/movie/:movieId', (req, res) =>{
    let movieId = req.params.movieId
    MovieModel.findById(movieId)
        .then((result) => {
            res.render('movie-details', {movie: result})
        })
        .catch((err) => console.log(err))
})
module.exports = router;
