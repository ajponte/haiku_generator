var express = require('express');
var wordList = require('word-list')
var fs = require('fs')
var router = express.Router();

router.get('/generate_haiku', function(req, res) {
            haiku = generate_haiku()
});

/**
 *  Generates a haiku using words from the dictionary.
 */
function generate_haiku() {
   const wordArray = fs.readFileSync(wordList, 'utf8').split('\n');
}

module.exports = router;
