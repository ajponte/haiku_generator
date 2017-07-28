var express = require('express');
var router = express.Router();

router.get('generate_haiku', function(req, res) {
            haiku = generate_haiku()
});

/**
 *  Generates a haiku using words from the dictionary.
 */
function generate_haiku() {
   return "foo";
}

module.exports = router;