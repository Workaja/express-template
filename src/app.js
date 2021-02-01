require('dotenv').config()

// CONFIG
const PORT = process.env.PORT || 3000

// DEPENDENCIES
const express = require("express")
const app = express()

// MIDDLEWARES
const clog = require("./middlewares/Clog")
app.use(clog)

// ROUTING
const rest = require("./routes/rest")
app.use("/", rest)

// SERVER
app.listen(PORT, () => {
  console.log("==========================")
  console.log("Welcome! Server is Running")
  console.log(`--- On: localhost:${PORT} ---`)
  console.log("==========================")
})