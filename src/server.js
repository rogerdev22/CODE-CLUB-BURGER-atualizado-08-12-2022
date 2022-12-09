//const app = require("./app");
import app  from "./app"
import mainRoutes from "./routes"

app.listen(3005) 

app.use(mainRoutes)

