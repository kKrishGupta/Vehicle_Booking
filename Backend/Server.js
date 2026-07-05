const http = require("http");
const app = require("./src/app");
const PORT = process.env.PORT || 5000;
const connectDB = require("./src/db/db");
connectDB();



const server = http.createServer(app);

server.listen(PORT,() =>{
  console.log(`Server is running on http://localhost:${PORT}`);
});