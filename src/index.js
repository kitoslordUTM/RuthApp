import expressApp from "./app";
import connectDB from "./database";
import { PORT } from "./config/config";

connectDB().then(() => {
    // Una vez conectados a la base de datos, iniciamos el servidor
    expressApp.listen( PORT, () => {
      console.log('servidor corriendo en puerto 3000')
    });
  });