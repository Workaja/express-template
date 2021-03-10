require('dotenv').config()

const express = require("express")

const clog = require("./middlewares/Clog")
const rest = require("./routes/rest")

// CONFIG
const PORT = process.env.PORT || 3000

// DEPENDENCIES
const app = express()

// MIDDLEWARES
app.use(clog)

// ROUTING
app.use("/", rest)

// SERVER
app.listen(PORT, () => {
  console.log("==========================")
  console.log("Welcome! Server is Running")
  console.log(`--- On: localhost:${PORT} ---`)
  console.log("==========================")
})