const { Router } = require("express");
const {
  getFavourites,
  createFavourites,
  updateFavourites,
  deleteFavouritesById,
  deleteAllFavourites,
} = require("../../controllers/api/favourites");

const router = Router();

router.get("/", getFavourites);
router.post("/", createFavourites);
router.put("/:id", updateFavourites);
router.delete("/:id", deleteFavouritesById);
router.delete("/", deleteAllFavourites);

module.exports = router;
