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

HeaderBar.find({}, (err, data) => {
  if (err) {
    console.error("Error during data fetching..", err);
  } else {
    console.log("Data: ", data);
  }
  mongoose.disconnect((err) => {
    if (err) {
      console.error("Error during Database disconnecting", err);
    } else {
      console.log("Disconnect successfully");
    }
  });
});

mongoose;
