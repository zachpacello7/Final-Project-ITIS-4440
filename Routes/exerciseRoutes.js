let express = require("express");
let controller = require("../Controllers/exerciseController");

const router = express.Router();

router.get("/",controller.index)
router.get("/recipe",controller.api)
router.get("/choosenRecipes",controller.choosenRecipes)
router.post("/userChoosenRecipe",controller.userChoosenRecipe)
router.get("/recipeByName",controller.recipeByName)
router.post("/addRecipe",controller.createRecipe)
router.post("/userRecipe",controller.recipe)
router.post("/addNewRecipe",controller.newRecipe)

router.get("/allExercises",controller.exercise)
router.post("/allExercises",controller.filterExercise)
router.post("/allExercises/removeFilter",controller.removeFilter)
router.post("/userExercises",controller.userExercises)
router.get("/target",controller.target)
router.get("/name",controller.name)

module.exports = router;