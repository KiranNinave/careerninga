const mongoose = require("mongoose");

const battleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  year: {
    type: Number
  },
  battle_number: {
    type: Number
  },
  attacker_king: {
    type: String,
    default: "NA",
    index: true
  },
  defender_king: {
    type: String,
    default: "NA",
    index: true
  },
  attacker_1: {
    type: String,
    default: ""
  },
  attacker_2: {
    type: String,
    default: ""
  },
  attacker_3: {
    type: String,
    default: ""
  },
  attacker_4: {
    type: String,
    default: ""
  },
  defender_1: {
    type: String,
    default: ""
  },
  defender_2: {
    type: String,
    default: ""
  },
  defender_3: {
    type: String,
    default: ""
  },
  defender_4: {
    type: String,
    default: ""
  },
  attacker_outcome: {
    type: String,
    default: ""
  },
  battle_type: {
    type: String,
    default: "NA"
  },
  major_death: {
    type: Number
  },
  major_capture: {
    type: Number
  },
  attacker_size: {
    type: Number
  },
  defender_size: {
    type: Number
  },
  attacker_commander: {
    type: String,
    default: ""
  },
  defender_commander: {
    type: String,
    default: ""
  },
  summer: {
    type: Number
  },
  location: {
    type: String,
    default: ""
  },
  region: {
    type: String,
    default: ""
  },
  note: {
    type: String,
    default: ""
  }
});

module.exports = mongoose.model("battle", battleSchema);
