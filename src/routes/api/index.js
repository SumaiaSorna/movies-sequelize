const { Router } = require("express");

const search = require("./search");
const favourites = require("./favourites");
const users = require("./users");

const router = Router;

router.use("./search.js", search);
router.use("./favourites.js", favourites);
router.use("./users.js", users);

module.exports = router;
