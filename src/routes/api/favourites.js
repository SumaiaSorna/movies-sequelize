const { Router } = require("express");
const {
  getfavourites,
  createFavourites,
  updateFavouritesById,
  deleteFavouritesById,
  deleteAllFavourites,
} = require("../../controllers/api/favourites");

const router = Router;

router.get("/", getfavourites);
router.post("/", createFavourites);
router.put("/:id", updateFavouritesById);
router.delete("/:id", deleteFavouritesById);
router.delete("/", deleteAllFavourites);

module.exports = router;
