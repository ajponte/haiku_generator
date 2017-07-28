var express = require('express');
var router = express.Router();

router.get('generate_haiku', function(req, res) {
            haiku = generate_haiku(function(res, err) {
               res.render(haiku);
            });
});

module.exports = router;