const battle = require("../models/battle");
const csvtojson = require("csvtojson");

exports.getBattles = async (req, res) => {
  try {
    const battles = await battle.find({});
    res.json(battles);
  } catch (err) {
    console.log(err);
    res.sendServerError();
  }
};

exports.getBattleById = async (req, res) => {
  try {
    const id = req.params.id;
    const b = await battle.findById(id);
    if (!b) return res.sendNotFound();

    res.json(b);
  } catch (err) {
    console.log(err);
    res.sendServerError();
  }
};

exports.getCount = async (req, res) => {
  try {
    const count = await battle.count({});
    res.json({ total: count });
  } catch (err) {
    console.log(err);
    res.sendServerError();
  }
};

// this will add battles from csv to mongodb atlas
exports.addBattles = async (req, res) => {
  try {
    // load dataset
    const dataset =
      "/home/kiran/Desktop/node/careerninga/server/controllers/battles.csv";
    const datasetJson = await csvtojson().fromFile(dataset);

    // creating collection from dataset
    await Promise.all(
      datasetJson.map(async b => {
        const newBattle = new battle({
          name: b["name"],
          year: Number.parseInt(b["year"] || 0),
          battle_number: Number.parseInt(b["battle_number"] || 0),
          attacker_king: b["attacker_king"],
          defender_king: b["defender_king"],
          attacker_1: b["attacker_1"],
          attacker_2: b["attacker_2"],
          attacker_3: b["attacker_3"],
          attacker_4: b["attacker_4"],
          defender_1: b["defender_1"],
          defender_2: b["defender_2"],
          defender_3: b["defender_3"],
          defender_4: b["defender_4"],
          attacker_outcome: b["attacker_outcome"],
          battle_type: b["battle_type"],
          major_death: Number.parseInt(b["major_death"] || 0),
          major_capture: Number.parseInt(b["major_capture"] || 0),
          attacker_size: Number.parseInt(b["attacker_size"] || 0),
          defender_size: Number.parseInt(b["defender_size"] || 0),
          attacker_commander: b["attacker_commander"],
          defender_commander: b["defender_commander"],
          summer: Number.parseInt(b["summer"] || 0),
          location: b["location"],
          region: b["region"],
          note: b["note"]
        });

        return await newBattle.save();
      })
    );

    res.json({ message: "data added" });
  } catch (err) {
    console.log(err);
    res.sendServerError();
  }
};

exports.getSearch = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.sendServerError();
  }
};
