const mongoose = require("mongoose");

const homeSchema = mongoose.Schema({
    texts: [
        {
          text: {
            type: String,
            required: true,
          },
        },
      ],
});

module.exports = mongoose.model("Home", homeSchema);
