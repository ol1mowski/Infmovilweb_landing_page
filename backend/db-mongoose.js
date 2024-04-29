const mongoose = require("mongoose");
// require("dotenv").config();

// const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS } = process.env;

const DB_URL = `mongodb://localhost:27017/infmovilweb`;

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const userSchema = new mongoose.Schema({
  telephone: String,
  email: String,
});

const User = mongoose.model("topBar", userSchema);

(async () => {
  try {
    await mongoose.connect(DB_URL);

    const topBarData = await User.find({ email: "infmovilweb@gmail.com" });

    console.log(topBarData);
  } catch (error) {
    console.error("Błąd podczas odczytu danych:", error);
  } finally {
    mongoose.disconnect();
  }
})();
