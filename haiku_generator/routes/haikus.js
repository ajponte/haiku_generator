var express = require('express');
var wordList = require('word-list');
var fs = require('fs');
var router = express.Router();

router.get('/', function(req, res, next) {
            res.send("getting a haiku for u");
            haiku = generate_haiku();
});

/**
 *  Generates a haiku using words from the dictionary.
 */
function generate_haiku() {
   var wordArray = fs.readFileSync(wordList, 'utf8').split('\n');
   console.log(wordArray);
}

module.exports = router;
