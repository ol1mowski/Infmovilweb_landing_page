const mongoose = require("mongoose");

const headerbarSchema = new mongoose.Schema({
  icons: [
    {
      id: String,
      icon: String,
    },
  ],
  companyContact: [
    {
      id: String,
      icon: String,
      content: String,
    },
  ],
});

const HeaderBar = mongoose.model("HeaderBar", headerbarSchema);

module.exports = {
  HeaderBar: HeaderBar,
};
