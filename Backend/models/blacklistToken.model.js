const mongoose = require("mongoose");

//this automatically deletes the token after a certain time
//this is dont to ensure the DB is overflooded.

const blacklistTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400, // 24 hours
  },
});

module.exports = mongoose.model("BlacklistToken", blacklistTokenSchema);
