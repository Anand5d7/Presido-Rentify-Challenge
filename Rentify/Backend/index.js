import app from "./app.js";
import { connectToDatabase } from "./src/config/db.js";

//connections and listeneres
const PORT = process.env.PORT || 5000;
connectToDatabase()
  .then(() => {
    app.listen(PORT, () =>
      console.log("Server Open & Connected To Database 🤟and server on "+PORT)
    );
  })
  .catch((err) => console.log(err));