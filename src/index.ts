import app from "./app.js";
import connectDB from "./configs/db.js";
import env from "./configs/env.config.js";

try {
    connectDB();

    app.listen(env.PORT, () => {
        console.log(`server is listening at http://localhost:${env.PORT}`);
    })
} catch (error) {
    
}

