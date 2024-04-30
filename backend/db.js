const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Infmovilweb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const headerbarSchema = new mongoose.Schema({
  telephone: String,
  email: String,
});

const HeaderBar = mongoose.model("HeaderBar", headerbarSchema);

module.exports = {
  mongoose: mongoose,
  HeaderBar: HeaderBar,
};
