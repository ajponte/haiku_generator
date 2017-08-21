var express = require('express');
var wordList = require('word-list');
var fs = require('fs');
var router = express.Router();

router.get('/', function(req, res, next) {
            //res.send("getting a haiku for u");
            haiku = generate_haiku();
            res.send(haiku);
});

/**
 *  Generates a haiku using words from the dictionary.
 *
 *  @return {String} A string which is a haiku.
 */
function generate_haiku() {
  // todo: generate the rest of the lines to the haiku.
   var wordArray = fs.readFileSync(wordList, 'utf8').split('\n');
   word1 = getRandomWord(wordArray, 3, 10);
   word2 = getRandomWord(wordArray, 5, 10);
   word3 = getRandomWord(wordArray, 3, 10);
   haikuFirstLine = word1 + " " + word2 + " " + word3;
   console.log("haiku: " + haiku);
   return haikuFirstLine;
}

/**
 * Given an array of words, find a random word
 * with a specific number of sylables.
 *
 * @param {words} - The array of words.
 * @param {sylables} - The number of sylables the
 *                     word must contain.
 * @param {maxSearches} - The maximum number of random words
 *                        we should check before giving up (to make
                          the algorithm more efficient).
 * @return A word with the specified number of sylables.
 */
function getRandomWord(words, sylables, maxSearches) {
  for (var i = 0; i < maxSearches; i +=1) {
    randomWord = words[Math.floor(Math.random() * words.length)];
    if (numSylables(randomWord) == sylables) {
      return randomWord;
    }
  }
}

/**
 *  Returns the number of sylables in the word.
 *
 *  @param {word} - The word we're looking for sylables for.
 *  @return {number} - The number of sylables in the word.
 */
function numSylables(word) {
  word = word.toLowerCase();
  // If a word is only 3 characters or fewer,
  // it only contains one sylable.
  if (word.length < 3) {
    return 1;
  }

  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
  word = word.replace(/^y/, '');

  return word.match(/[aeiouy]{1,2}/g).length;
}

module.exports = router;
