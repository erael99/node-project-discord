const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://zen:az@cluster0.8vrua.mongodb.net/discord?retryWrites=true",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connexion ok !");
  })
  .catch((err) => {
    console.log(err);
  });

  module.exports = mongoose;