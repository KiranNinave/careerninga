const router = require("express").Router();
const battleRoutes = require("./battleRoutes");

router.use("/battle", battleRoutes);

module.exports = router;
