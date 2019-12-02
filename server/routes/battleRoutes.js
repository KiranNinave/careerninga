const router = require("express").Router();
const battleController = require("../controllers/battleController");

router.route("/").post(battleController.addBattles);

router.route("/list").get(battleController.getBattles);

router.route("/list/:id").get(battleController.getBattleById);

router.route("/count").get(battleController.getCount);

router.route("/search").get(battleController.getSearch);

module.exports = router;
