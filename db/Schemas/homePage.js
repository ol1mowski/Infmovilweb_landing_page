const mongoose = require("mongoose");

const homePageSchema = new mongoose.Schema({
  Cards: [
    {
      
    }
  ]
});

const HomePage = mongoose.model("HomePage", homePageSchema);

module.exports = {
  HomePage: HomePage,
};
